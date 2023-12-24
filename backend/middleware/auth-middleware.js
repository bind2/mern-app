const jwt = require('jsonwebtoken')
const User = require('../models/user-model')

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        if (!token || !token.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized. Token not provided or invalid format' });
        }

        const jwtToken = token.substring(7).trim(); // Remove 'Bearer ' prefix

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await User.findOne({ email: isVerified.email }).select({ password: 0 });

        if (!userData) {
            return res.status(401).json({ message: 'Unauthorized. User not found.' });
        }

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Unauthorized. Token has expired.' });
        }
        return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
    }
};

module.exports = authMiddleware;