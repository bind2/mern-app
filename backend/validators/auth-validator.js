const { object, string } = require('zod')

//creating an object schema
const signupSchema = object({
    username: string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 charactors" })
        .max(255, { message: "Name must not be more than 255 charactors" }),

    email: string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 charactors" })
        .max(255, { message: "Email must not be more than 255 charactors" }),

    phone: string({ required_error: "Phone number is required" })
        .trim()
        .min(10, { message: "Phone number must be at least of 10 charactors" })
        .max(10, { message: "Phone number must not be more than 10 charactors" }),

    password: string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least of 8 charactors" })
        .max(1024, { message: "Password must not be more than 1024 charactors" }),

    profilePic: string({ required_error: "You can choose your profile pic" })
})


// for signin
const signinSchema = object({
    email: string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 charactors" })
        .max(255, { message: "Email must not be more than 255 charactors" }),

    password: string({ required_error: "Password is required" })
        .min(8, { message: "Password must be at least of 8 charactors" })
        .max(1024, { message: "Password must not be more than 1024 charactors" }),
})


module.exports = { signupSchema, signinSchema }