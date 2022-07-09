const jsonwebtoken = require('jsonwebtoken')
const { AuthFailException } = require('./exception')
require('dotenv').config()

module.exports.auth = async function (req, res, next) {
    try {
        const { auth } = req.body;
        if (auth) {
            const tokenDecode = jsonwebtoken.decode(auth, process.env.SECRET_KEY)
            if (tokenDecode == process.env.TOKEN) {
                return next();
            }
        }
        let error = new Error(AuthFailException.message);
        error.code = AuthFailException.code;
        error.status_code = AuthFailException.statusCode;
        return next(error);
    } catch (e) {
        return next(e);
    }
}

module.exports.genToken = async () => {
    const token = await jsonwebtoken.sign(
        process.env.TOKEN,
        process.env.SECRET_KEY
    );
    return token;
}