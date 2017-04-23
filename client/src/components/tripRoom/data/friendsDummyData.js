/////////////////////////
// MOCK Friends Data
/////////////////////////

//active user preferences object
// var friendsData =  [
//           {
//             locations: ['New York City', 'San Francisco', 'Honolulu'], // ARRAY OF STRINGS
//             hotelBudget: 100, // NUMBER
//             activitiesBudget: 100, // NUMBER
//             flightBudget: 1000, // NUMBER
//             duration: 3, // NUMBER
//             beginDate: '2017-04-29', //STRING
//             endDate: '2017-05-29', // STRING
//             totalBudget: 0 // NUMBER
//           },
//            {
//             locations: ['New York City', 'San Francisco', 'Miami'], // ARRAY OF STRINGS
//             hotelBudget: 200, // NUMBER
//             activitiesBudget: 50, // NUMBER
//             flightBudget: 800, // NUMBER
//             duration: 5, // NUMBER
//             beginDate: '2017-05-16', //STRING
//             endDate: '2017-06-29', // STRING
//             totalBudget: 0 // NUMBER
//           }
//      ];

//buddy object of each buddy's preferences with their name as the key
    var friendsData =  {
     'Jesse DeOms': {
           locations: ['New York', 'San Francisco', 'Miami'], // PERFECT! ARRAY OF OBJECTS with location name as string at name property    
           hotelBudget: 100, // NUMBER         instead of object just save as a number?  *
           activitiesBudget: 50, // NUMBER    no activities budget being returned  *
           flightBudget: 1000, // NUMBER      no flight budget being returned    *
           duration: 3, // NUMBER        why string?
           beginDate: 'string', //STRING    PERFECT!
           endDate: 'string' // STRING      PERFECT
         },
     'Lou Kaileh': {
           locations: ['San Francisco', 'Honolulu', 'New York'], // PERFECT! ARRAY OF OBJECTS with location name as string at name property    
           hotelBudget: 200, // NUMBER         instead of object just save as a number?  *
           activitiesBudget: 100, // NUMBER    no activities budget being returned  *
           flightBudget: 800, // NUMBER      no flight budget being returned    *
           duration: 5, // NUMBER        why string?
           beginDate: 'string', //STRING    PERFECT!
           endDate: 'string' // STRING      PERFECT!
         }    
    };     
     

module.exports = {
  friendsData: friendsData
}