const productControllers = require('../app/controllers/productControllers')
const productRoute = require('./productRoute/productRoute')
const userRoute = require('./userRoute/userRoute')


function initRoutes(app){

    //use api/products for all products related work
    app.use('/api/products', productRoute)
    app.use('/api/user', userRoute)
}



module.exports = initRoutes