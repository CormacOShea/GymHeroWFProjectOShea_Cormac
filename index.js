const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/hercules', ctrlLocations.herculesLocationInfo);
/* Register page */
router.get('/register', ctrlLocations.addReview);
/* Login Page */
router.get('/login', ctrlLocations.login);


/* Other pages 
router.get('/register', ctrlOthers.register);
*/
module.exports = router; 
