const Router = require('express').Router()
const productOriginController = require('../../controllers/admin/productOrigin.controller')

Router.get('', productOriginController.create)
Router.post('', productOriginController.store)
module.exports = Router


