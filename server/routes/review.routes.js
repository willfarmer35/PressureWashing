const express = require('express')

//controller functions
const {createReview, getReview,
    getReviews,
    deleteReview } = require('../controllers/reviewController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.get('/', getReviews) 

router.use(requireAuth)

router.get('/:id', getReview)



router.post('/', createReview)



router.delete('/:id',deleteReview)


module.exports = router