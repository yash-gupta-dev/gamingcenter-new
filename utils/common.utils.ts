import { Request, Response } from "express";
import { stylesPath } from "../constants/constants";

export const renderEjsFile = (req: Request, res: Response, path: string, data: Record<string, any>) => {
    const url = req.protocol + "://" + req.headers.host + "/css/output.css";
    return res.render(path, { ...data, css: url });
}

export const throwEjsError = (req: Request, res: Response, error: string) => {
    req.flash('formValue', req.body);
    req.flash('error', error);
    req.flash('success')
    return res.redirect(req.header('Referer'))
}