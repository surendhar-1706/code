const express = require('express')
const { CreatePageView, GetPagesView } = require('../views/PageView')

const router = express.Router()

router.post('/', CreatePageView)
router.get('/', GetPagesView)

module.exports = router