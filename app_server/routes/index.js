var express = require('express');
var router = express.Router();
var ctrllocations = require('../controller/locations');
var ctrlothers = require('../controller/others');

/* GET Locations page */
router.get('/', ctrllocations.homeList);
router.get('/location', ctrllocations.locationInfo);
router.get('/location2', ctrllocations.locationInfo2);
router.get('/location3', ctrllocations.locationInfo3);
router.get('/location/review/new', ctrllocations.addReview);

/*GET others page */
router.get('/about', ctrlothers.about);

router.get('/signin', ctrlothers.signin);

router.get('/register', ctrlothers.register);

module.exports = router;
