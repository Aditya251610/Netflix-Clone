import jwt from 'jsonwebtoken'

const JWT_SECRET = '2df74f03cb98e91d1c963c6905a451ae283aaac82e61d46e1119b99986cf67a3'

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: '15d'})

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 *60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
    });

    return token;
}