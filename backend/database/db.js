const { connect } = require('mongoose')


const URI = process.env.DB_URI

const connectDB = async () => {
    try {
        await connect(URI)
        console.log('database connection is successful')
    } catch (error) {
        console.error('database connection failed')
        process.exit(0)
    }
}

module.exports = connectDB