const express = require('express');
const router = express.Router();//
const SauceCtrl =require('../controllers/sauce');
const Sauce = require('../models/sauce');

/**************** */
/**************** */
//routes
//save new sauce in DB
router.post('/',SauceCtrl.createSauce);

//retrive the list of sauces
router.get('/', SauceCtrl.viewAllSauces);

//retrive only one particular sauce
router.get('/:id', SauceCtrl.viewSauce);

module.exports = router; //make this router available outside of this file