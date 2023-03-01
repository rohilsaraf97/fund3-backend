// const ErrorHandler = require('./middlewares/errorHandler')
const { authRouter, campaignRouter, donationRouter } = require('./routes')

const initRoutes = ({ expressApp }) => {
  // expressApp.use('/user', User)
  expressApp.use('/auth', authRouter)
  expressApp.use('/campaign', campaignRouter)
  expressApp.use('/donation', donationRouter)

  // expressApp.use(ErrorHandler)
}

module.exports = initRoutes
