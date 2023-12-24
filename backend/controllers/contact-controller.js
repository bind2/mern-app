const Contact = require('../models/contact-model')

// user contact
const contactForm = async (req, res) => {
    try {
        const { username, email, phone, message } = req.body

        // create contact info on mongo database
        await Contact.create({ username, email, phone, message })

        // send response
        res.status(201).json({ message: "message send successfully" })

    } catch (error) {
        res.status(500).json({ message: "message not send" })
    }
}


module.exports = contactForm