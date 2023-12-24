const bcrypt = require('bcrypt')
const User = require('../models/user-model')

// user registration
const register = async (req, res, next) => {
    try {
        const { username, email, phone, password, profilePic } = req.body

        // find user in mongo database 
        const userExist = await User.findOne({ email })

        // checking user exist
        if (userExist) {
            return res.status(400).json({ message: "email already exists" })
        }

        // hash password
        const saltRound = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, saltRound)

        // create user on mongo database
        const userCreated = await User.create({ username, email, phone, password: hashPassword, profilePic })

        // send response
        res.status(201).json({
            message: "registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })

    } catch (error) {
        next(error)
    }
}


// user login
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        // find user in mongo database 
        const userExist = await User.findOne({ email })

        // checking user exist
        if (!userExist) {
            return res.status(400).json({ message: "invalid credential" })
        }

        // comparing password and return true or false value
        const user = await bcrypt.compare(password, userExist.password)

        // send response
        if (user) {
            res.status(200).json({
                message: "login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        } else {
            res.status(401).json({ message: "invalid credential" })
        }

    } catch (error) {
        next(error)
    }
}


// read user profile data
const readUserData = async (req, res, next) => {
    try {
        const userData = req.user
        res.status(200).json({ userData })
    } catch (error) {
        next(error)
    }
}



module.exports = { register, login, readUserData }