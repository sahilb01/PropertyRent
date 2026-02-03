const express=require('express');
const router=express.Router({mergeParams:true});

const Review=require('../models/review.js');
const wrapAsync=require("../utils/wrapAsync.js")

const Listing=require('../models/listing.js');
const methodOverride=require("method-override")
const {validateReview, isLoggedIn, isReviewAuthor}=require('../middleware.js')
const reviewController=require('../controllers/review.js')




//Reviews
//newReview
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))

//delete review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))
module.exports=router;