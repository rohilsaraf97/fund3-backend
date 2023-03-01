const { Router } = require('express')
const {
  getAllCampaignsController,
  addCampaignController,
} = require('../../controllers/campaigns')

const authMiddleware = require('../../middlewares/auth/index.js')

const router = Router()

router.get('/', [authMiddleware], getAllCampaignsController)

router.post('/add', [authMiddleware], addCampaignController)

router.delete('/delete')

module.exports = router
