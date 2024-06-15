import jwt from "jwt-simple"
import moment from "moment"

export const SECRET_JWT_KEY = "SECRET_KEY_pRoJeCt_Social_NetWork@"

export function createToken(user) {
    const payload = {
        userId: user._id,
        role: user.role,
        name: user.name,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    }

    return jwt.encode(payload, SECRET_JWT_KEY)
}