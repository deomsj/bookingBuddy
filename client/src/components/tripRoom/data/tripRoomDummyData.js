/////////////////////////
// MOCK Trip Room Data
/////////////////////////


var tripsArray = [{
  tripId: '0001',
  name: '10 Year Reunion Trip',
  description: 'Can you believe its been ten years since we graduated??? We all want to get together, catch up, and have some fun together. Take a few minutes to throw your life info in Booking Buddies so that we can all get on the same page get something fun on the calendar together!'
}, {
  tripId: '0002',
  name: 'Weekend Trip to Cabo San Freude',
  description: 'Wow! We are finished HRR. Seems like just yesturday that we were all having our first tango with the floobits ghost! Lets find a time, place, and gameplan that works for everyone to get together for some grilling, bebidas, and hot tubn on Ryans rooftop!!!'
}
];





var tripData = {
  tripId: 12345,
  tripName: 'Hiking Trip',
  locations: ['Hawaii', 'Florida', 'Bahamas'],
  priceRange: '$1,500-$2,500',
  dateRange: '12/10 - 12/21',
  buddyList: ['Lou', 'Preston', 'Max', 'Nate', 'Jesse'],
  bookmarkedTrips: [],
  url:''
};



var hotelRecomendations = [{
  hotelRecomendationId: 12345,
  HotelName: 'Sagamore Pendry Baltimore',
  Price: 450.91,
  StarRating: 5,
  Description: 'Where all the ballers and shot callers come to relax and recharge',
  Image: 'https://s3-media3.fl.yelpcdn.com/bphoto/8qcpzDf8VSeYxPtHG4Lu5g/o.jpg'
}, {
  hotelRecomendationId: 21218,
  HotelName: 'Hotel Indigo Baltimore Downtown',
  Price: 180.27,
  StarRating: 4.5,
  Description: 'Calm and relaxing',
  Image: 'https://s3-media2.fl.yelpcdn.com/bphoto/FHD4nLq6s1C7itT-UNf6gQ/o.jpg'
}];

module.exports = {
  tripData: tripData,
  hotelRecomendations: hotelRecomendations,
  tripsArray: tripsArray
}