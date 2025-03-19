import jwt from 'jsonwebtoken';
import type { Request } from 'express';

// Set the expiration time for the token
const expiration = '2h';
// Set the secret key for the token
const secret = process.env.JWT_SECRET || 'superdupersecretkey';

// Function to sign a token
export const signToken = (payload: object): string => {
    return jwt.sign(payload, secret, { expiresIn: expiration });
};

// Function to verify a token
export const authenticateToken = (req: Request): object | null => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        console.error('Invalid token: ', err);
        return null;
    }
};
