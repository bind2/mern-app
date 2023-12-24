const contactForm = require('../controllers/contact-controller')
const validate = require('../middleware/validate-middleware')
const authMiddleware = require('../middleware/auth-middleware')
const { signupSchema, signinSchema } = require('../validators/auth-validator')
const { register, login, readUserData } = require('../controllers/auth-controller')
const { Router } = require("express")

const router = Router()

// all routes

// user register 
router.route('/register').post(validate(signupSchema), register)

// user login
router.route('/login').post(validate(signinSchema), login)

// user contact
router.route('/contact').post(contactForm)

// fetching user profile data
router.route('/user').get(authMiddleware, readUserData)


module.exports = router



