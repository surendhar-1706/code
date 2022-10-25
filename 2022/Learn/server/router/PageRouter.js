const express = require('express')
const { CreatePageView } = require('../views/PageView')

const router = express.Router()

router.get('/', CreatePageView)

module.exports = router