const { Router } = require('express')
const {
  getAllDonationsController,
  addDonationController,
} = require('../../controllers/donations')

const authMiddleware = require('../../middlewares/auth/index.js')

const router = Router()

router.get('/', [authMiddleware], getAllDonationsController)

router.post('/add', [authMiddleware], addDonationController)

module.exports = router
