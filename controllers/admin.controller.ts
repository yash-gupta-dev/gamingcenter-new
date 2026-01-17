import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { db } from "../models";
import bcrypt from 'bcrypt'
import { generateAccessToken } from "../utils/token";
import { getcookie } from "../utils/cookie.utils";
import { renderEjsFile } from "../utils/common.utils";
import { throwEjsError } from "../utils/ApiError";

// LOGIN
const showLogin = async (req: Request, res: Response, next: NextFunction) => {
    let token = getcookie(req);
    if (!token) {
        const error = req.flash('error')
        const message = req.flash('success')
        const formValue = req.flash('formValue')[0];
        return renderEjsFile(req, res, 'admin/login.ejs', { message, error, formValue });
    } else {
        const Admin = await db.Admin.findOne({ where: { token: token } })
        if (!Admin) {
            const error = req.flash('error')
            const message = req.flash('success')
            const formValue = req.flash('formValue')[0];
            return renderEjsFile(req, res, 'admin/login.ejs', { message, error, formValue });
        }
        res.redirect("/admin/dashboard")
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'), 'Password must be at least 8 characters long').required()
    })

    await schema.validateAsync(req.body);

    const admin = await db.Admin.findOne({
        where: {
            email
        }
    });

    if (!admin) return throwEjsError(req, res, "Admin Not Found");


    const isMatch = await bcrypt.compare(password, admin.password_hash);
    if (!isMatch) return throwEjsError(req, res, "Invalid Credentials");
    const token = generateAccessToken(admin.id, "365d");

    admin.token = token;
    await admin.save();
    res.cookie('dd-token', token, { maxAge: 1000 * 60 * 60 * 24 * 365 })

    res.redirect('/admin/dashboard')
};

// DASHBOARD
const showDashboard = async (req: Request, res: Response, next: NextFunction) => {
    const users = await db.User.count()
    const games = await db.Game.count()

    return res.render("admin/dashboard.ejs", ({
        users,
        games
    }))
};

// CATEGORIES
const showCategories = async (req: Request, res: Response, next: NextFunction) => {
    return res.render("admin/categories.ejs", ({

    }))
};

export default {
    showLogin,
    login,
    showDashboard,
    showCategories
}