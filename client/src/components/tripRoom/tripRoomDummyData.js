/////////////////////////
// MOCK Trip Room Data
/////////////////////////


var tripData = {
  tripId: 12345,
  tripName: 'Hiking Trip with the Guys',
  locations: ['Hawaii', 'Florida', 'Bahamas'],
  priceRange: '$1,500-$2,500',
  dateRange: '12/10 - 12/21',
  buddyList: ['Lou', 'Preston', 'Max', 'Nate', 'Jesse'],
  bookmarkedTrips: []
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
  hotelRecomendations: hotelRecomendations
}