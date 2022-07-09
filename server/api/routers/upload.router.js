const express = require('express');
const router = express.Router();


const controller = require('../controllers/upload.controller');
const { parseBody, fileValidate } = require('../middleware/upload.middleware');
const authnMiddleWare = require('../middleware/auth.middleware');

router.post('/', parseBody, authnMiddleWare.auth, fileValidate, controller.upload)

module.exports = router