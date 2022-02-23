const Controller = require('../../core/controller')

const UserModel = require('../../models/user.model')
const ProductOriginModel = require('../../models/productOrigin.model')
class AccountController extends Controller {
    constructor() {
        super()
    }

    create = async (req , res)=>{
        res.render('admin/productOrigin')
    }

    store = async (req, res) => {
        let name = req.body.name
        let ProductOrigin = new ProductOriginModel({
            name : name

        })

        ProductOrigin.save()

        res.send(ProductOrigin)

    }


}
module.exports = new AccountController()
