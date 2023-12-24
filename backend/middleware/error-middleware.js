const errorMiddleware = (err, req, res, next) => {
   const status = err.status || 500;
   const message = err.message || 'Internal Server Error';
   const extraDetails = err.extraDetails || 'Error from the backend';

   // Use the appropriate HTTP status and send a JSON response
   return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
