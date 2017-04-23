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


var tripData  = {
  tripId: 12345,
  tripName: 'Hiking Trip',
  commonDates:  {
    beginning: '4/29/2017',
    duration: 4,
    ending: '5/12/2017'
  },
  commonLocations: [
    'Cabo San Fruede',
    'Bahamas'
  ],
  averageNightlyHotelBudget: 127.00,
  buddyList: [{
      name: 'Lou',
      email: 'formMasterLou@gmail.com',
    }, {
      name: 'Preston',
      email: 'gotYourBackPreston@gmail.com',
    }, {
      name: 'Nate',
      email: 'flexBoxFriday@gmail.com',
    }, {
      name: 'Max',
      email: 'mustLoveCoffee@gmail.com',
    }, {
      name: 'Jesse',
      email: 'seriouslySeriousAboutOldBay@gmail.com',
    }],
  bookmarks: [{
    bookmarkID: Date.now(),
    tripId: 23,
    bookmarkerName: 'Lou',
    boormarkerNote: 'stringComment',
    bookmarkedHotelId: 'expediaHotelString',
    bookmarkComments: [{
      buddyName: 'Lou',
      buddyEmail: 'formMasterLou@gmail.com',
      date: 1492888181571,
      comment: 'messageMadeUnderBookmark'}
    ],
    buddyVotes: [{
      buddyName: 'Lou',
      buddyEmail: 'formMasterLou@gmail.com',
      buddyVote: -1
    },{
      buddyName: 'Preston',
      buddyEmail: 'gotYourBackPreston@gmail.com',
      buddyVote: 1
    }, {
      buddyName: 'Nate',
      buddyEmail: 'flexBoxFriday@gmail.com',
      buddyVote: -1
    }, {
      buddyName: 'Max',
      buddyEmail: 'mustLoveCoffee@gmail.com',
      buddyVote: 0
    }, {
      buddyName: 'Jesse',
      buddyEmail: 'seriouslySeriousAboutOldBay@gmail.co',
      buddyVote: -1
    }]
  }]
}



// var tripData = {
//   tripId: 12345,
//   tripName: 'Hiking Trip',
//   locations: ['Hawaii', 'Florida', 'Bahamas'],
//   priceRange: '$1,500-$2,500',
//   dateRange: '12/10 - 12/21',
//   buddyList: ['Lou', 'Preston', 'Max', 'Nate', 'Jesse'],
//   bookmarkedTrips: [],
//   url:''
// };



var hotelRecomendations = [{
  hotelId: 12345,
  HotelName: 'Villa La Estancia Beach Resort & Spa',
  Price: 250.91,
  StarRating: 5,
  Description: 'Paradise meets comfort at Villa La Estancia',
  Image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/45/9b/f3/villa-la-estancia.jpg'
}, {
  hotelId: 21218,
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