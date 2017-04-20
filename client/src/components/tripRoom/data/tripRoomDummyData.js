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
  HotelName: 'Villa La Estancia Beach Resort & Spa',
  Price: 250.91,
  StarRating: 5,
  Description: 'Paradise meets comfort at Villa La Estancia',
  Image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/45/9b/f3/villa-la-estancia.jpg'
}, {
  hotelRecomendationId: 21218,
  HotelName: 'Cabo Azul Resort by Diamond Resorts',
  Price: 189.27,
  StarRating: 3,
  Description: 'If you are looking for calm and relaxing, go somewhere else. This is were the fun it at!',
  Image: 'https://images.trvl-media.com/hotels/2000000/1690000/1681600/1681571/1681571_149_z.jpg'
}];

module.exports = {
  tripData: tripData,
  hotelRecomendations: hotelRecomendations,
  tripsArray: tripsArray
}