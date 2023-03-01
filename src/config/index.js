require('dotenv').config()

const config = {
  APP_DOMAIN: process.env.APP_DOMAIN,
  MORALIS_API_KEY: process.env.MORALIS_API_KEY,
  REACT_URL: process.env.REACT_URL,
  AUTH_SECRET: process.env.AUTH_SECRET,
  PORT: process.env.PORT,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASS: process.env.MONGO_PASS,
  DB_URI: process.env.DB_URI,
  statement: 'Please sign this message to confirm your identity.',
  timeout: 60,
}

module.exports = config
