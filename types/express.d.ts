import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
      };
    }
  }
}
declare module 'express-serve-static-core' {
  interface Request {
    flash(type: string, message?: string | string[]): string[];
  }
}