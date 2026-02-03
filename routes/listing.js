const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js')
const Listing = require('../models/listing.js');
const Review = require('../models/review.js');

const methodOverride = require("method-override")
const { isLoggedIn, isOwner, validateListing } = require('../middleware.js');
const listingController = require('../controllers/listing.js');
const multer  = require('multer')
const {storage}=require('../cloudConfig.js')
const upload = multer({ storage })

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing))
    // .post(upload.single('listing[image][url]'),(req,res)=>{
    //     res.send(req.file)});


//New route
router.get('/add', isLoggedIn, (listingController.renderNewForm));

router.route('/:id')
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner,upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
    .delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))

//Edit route
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))

module.exports = router;