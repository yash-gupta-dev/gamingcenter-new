import "express";
import 'express-serve-static-core';
import { AdminAttributes } from "../models/types/types";

declare module 'express-serve-static-core' {
  interface Request {
    flash(type: string, message?: string | string[]): string[];
    profile?: AdminAttributes; // replace `any` with a proper type (recommended)
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
      };
    }
  }
}