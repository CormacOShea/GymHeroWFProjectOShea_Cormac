/* GET 'home' page */
const homelist = function(req, res){
  res.render('locations-list', {
    title: 'GymHero - Find a gym to improve your fitness',
    pageHeader: {
      title: 'GymHero',
      strapline: 'Find a gym to improve your fitness!'
    },
    sidebar: "Looking for exciting Fitness studios and Leisure centres? GymHero helps you find places for that perfect workout. These Gyms also have a wide range of services. Let GymHero help you find the place you're looking for.",
    locations: [{
        name: 'Brandon Hotel',
        address: 'Princes St, Tralee, Co. Kerry, V92 PVK6',
        rating: 5,
        facilities: ['Members Only', 'Pool', '15% Food Discount'],
        distance: '12km'  
    }, {    
        name: 'Hercules',
        address: '14, Monavalley Industrial Estate, Tralee, Co. Kerry, V92',
        rating: 3,
        facilities: ['$6 charge', 'Sauna and Steam room'],
        distance: '10km'
    }, {
        name: 'Cork City Gym',
        address: 'Town Park Centre, College Rd, Cork',
        rating: 5,
        facilities: ['Free Parking', 'Premium wifi', 'Studio For Hire'],
        distance: '120km'
    }]
  });
};

/* GET 'Location info' page for Brandon Hotel */
const locationInfo = function(req, res){
  res.render('location-info', {
    title: 'GymHero',
    pageHeader: {
      title: 'GymHero'
    },
    sidebar: {
      context: 'is on GymHero because it has a state of the art pool for its members. Members can also avail of a 15% discount on food in the nearby Brandon Hotel restraunt.'
    },
    location: {
      name: 'Brandon Hotel',
      address: 'Princes St, Tralee, Co. Kerry, V92 PVK6',
      rating: 5,
      facilities: ['Members Only', 'Pool', '15% Food Discount'],
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '9:30pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '7:30pm',
        closed: false
      }, {
        days: 'Sunday',
        opening: '10:00am',
        closing: '5:30pm',
        closed: false
      }]
    }
  });   
};

/* GET 'Location info' page for Hercules Gym */
const herculesLocationInfo = function(req, res){
  res.render('location-info', {
    title: 'Hercules',
    pageHeader: {
      title: 'GymHero'
    },
    sidebar: {
      context: 'is on GymHero because it is great value at only 6 euro per entry. You do not need to be a member to enter. Sauna and Steam room are available also.'
    },
    location: {
      name: 'Hercules',
      address: '14, Monavalley Industrial Estate, Tralee, Co. Kerry, V92',
      rating: 3,
      facilities: ['$6 charge', 'Sauna and Steam room'],
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '9:30pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '7:00pm',
        closed: false
      }, {
        days: 'Sunday',
        opening: '10:00am',
        closing: '5:30pm',
        closed: false
      }]
    }
  });   
};

/* GET 'Location info' page for Hercules Gym */
const corkCityLocationInfo = function(req, res){
  res.render('location-info', {
    title: 'Cork City Gym',
    pageHeader: {
      title: 'GymHero'
    },
    sidebar: {
      context: 'is on GymHero because it is great value at only 6 euro per entry. You do not need to be a member to enter. Sauna and Steam room are available also.'
    },
    location: {
      name: 'Cork City Gym',
      address: 'Town Park Centre, College Rd, Cork',
      rating: 3,
      facilities: ['Free Parking', 'Premium wifi', 'Studio For Hire'],
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '9:30pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '7:00pm',
        closed: false
      }, {
        days: 'Sunday',
        opening: '10:00am',
        closing: '5:30pm',
        closed: false
      }]
    }
  });   
};
   
/* GET 'Register' page */
const addReview = function(req, res){
  res.render('register-form', {
    title: 'Register for GymHero',
    pageHeader: { title: 'Register to see Gyms in your County' }
  });
};

/* GET 'Login' page */
const login = function(req, res){
  res.render('login-form', {
    title: 'Login into your account',
    pageHeader: { title: 'Login to view Gyms near you' }
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
  login
};