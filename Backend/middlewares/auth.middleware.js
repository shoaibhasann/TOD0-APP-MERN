import jwt from 'jsonwebtoken';

const isLoggedIn = async (req,res,next) => {

    const {token} = req.cookies;

    if(!token){
        return res.status(404).json({
            success: false,
            message: 'Unauthorized, please login first'
        })
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;

    next();
}

export default isLoggedIn;