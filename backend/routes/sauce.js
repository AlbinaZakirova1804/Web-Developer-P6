const express = require('express');
const router = express.Router();//
const SauceCtrl =require('../controllers/sauce');

const auth = require('../middleware/auth');
const Sauce = require('../models/sauce');

/**************** */
/**************** */
//routes
//save new sauce in DB
router.post('/', auth, SauceCtrl.createSauce);

//retrive the list of sauces
router.get('/', auth, SauceCtrl.viewAllSauces);

//retrive only one particular sauce
router.get('/:id', auth,  SauceCtrl.viewSauce);

//update one
router.put('/:id', auth, SauceCtrl.updateSauce);

//delete one
router.delete('/:id', auth, SauceCtrl.deleteSauce);

module.exports = router; //make this router available outside of this file