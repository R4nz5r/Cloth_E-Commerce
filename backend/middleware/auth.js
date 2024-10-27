import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    const {token} = req.headers
    if (!token) {
        return res.json({success:false ,message: 'You are not authorized to access this route please login first'})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        console.log(error);
        req.json({success: false, message: error.message})
        
    }
}

export default authUser;