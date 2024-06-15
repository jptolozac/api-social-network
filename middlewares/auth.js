import jwt from 'jwt-simple'
import moment from 'moment'
import { SECRET_JWT_KEY } from '../services/jwt'

export function ensureAuth(req, res, next) {
    const authorization = req.headers.authorization
    if (!authorization) {
        return res.status(403).json({
            status: "error",
            message: "Sin token"
        })
    }

    const token = authorization.replace(/['"]+/g, '')

    try {
        let payload = jwt.decode()
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            status: "error",
            message: "Token no válido"
        });
    }
}