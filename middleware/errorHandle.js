const CustomAPIError = require('../errors/customError')

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }

  return res.status(500).send('Something went wrong, please try agen later')
}

module.exports = errorHandlerMiddleware
