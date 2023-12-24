const validate = (schema) => async (req, res, next) => {
    try {
        // Use a more descriptive variable name
        const parsedBody = await schema.parseAsync(req.body);

        // Update the request body with the parsed data
        req.body = parsedBody;

        // Continue to the next middleware or route handler
        next();
    } catch (err) {
        const status = 422;
        const message = "Invalid input data";

        // Check if the error object has the expected structure
        const extraDetails = err.errors && err.errors.length > 0 ? err.errors[0].message : "Unknown error";
        
        // Create a more informative error object
        const error = { status, message, extraDetails };

        // Pass the error to the next middleware for error handling
        next(error);
    }
};

module.exports = validate;
