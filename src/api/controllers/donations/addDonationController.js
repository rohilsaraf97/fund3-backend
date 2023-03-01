const { Donation } = require('../../../models')
const mongoose = require('mongoose')

const addDonationController = async (req, res) => {
  const { amount, txHash, campaign_id } = req.body
  const { _id } = req.userData
  const userId = mongoose.Types.ObjectId(_id)
  const campaignId = mongoose.Types.ObjectId(campaign_id)

  try {
    const newDonation = await Donation.create({
      amount,
      txHash,
      donor: userId,
      campaign: campaignId,
    })
    // const currentUser = await User.findById(_id)
    // await currentUser.donations.push(newDonation)
    // await currentUser.save()
    // const currentCampaign = await Campaign.findById(campaign_id)
    // await currentCampaign.donations.push(newDonation)
    // await currentCampaign.save()
    res.send(newDonation)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = addDonationController
