const CustomAPIError = require('../errors/customError')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
  }
  const id = new Date().getDate()

  const token = jwt.sign({ id, username }, process.env.JWT_URL, {
    expiresIn: '30d',
  })

  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  const autoHeader = req.headers.authorization

  if (!autoHeader || !autoHeader.startsWith('bearer ')) {
    throw new CustomAPIError('no token provided', 401)
  }

  const token = autoHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_URL)
    console.log(decoded)

    const num = Math.floor(Math.random() * 1000)
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `here your authorized data ${num}`,
    })
  } catch (error) {
    throw new CustomAPIError('Not authorized to access this route', 401)
  }
}

module.exports = {
  login,
  dashboard,
}
