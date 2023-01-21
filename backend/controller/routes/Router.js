const router = require("express").Router();
const services = require('../services/auth')

// router.get('/',services.create)
router.get('/',services.getUser)
router.post('/',services.authenticate,services.createUser)

module.exports = router;