const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const authController = require('./controllers/authController')
const addController = require('./controllers/addController')
const donations = require('./controllers/donationsController')
const interestController = require('./controllers/interestController')
const viewController = require('./controllers/viewController')
const middleware = require('./middleware/authSession')




router.get('/',middleware,addController.index)
router.get('/donations/:id',middleware,donations.index)
router.get('/profile/:id',middleware,viewController.index)
router.get('/posts/:id',middleware,viewController.indexProduct)
router.post('/createUser',userController.store)
router.post('/auth',authController.store)
router.post('/add',middleware,addController.store)
router.post('/like/:id',middleware,interestController.store)
router.put('/edit/:id',middleware,addController.update)
router.put('/edit/profile/:id',middleware,userController.update)
router.delete('/destroy/:id',middleware,addController.remove)

module.exports = router