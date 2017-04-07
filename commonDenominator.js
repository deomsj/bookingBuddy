var Max = {
  locations: ['San Franciso', 'Honolulu', 'Puerto Rico'],
  maxBudget: 1000,
  duration: 7
  beginDate: 'Apr 06 2017' 
  endDate: 'June 06 2017'
  };

var Lou = {
  locations: ['Paris', 'Honolulu', 'New York'],
  maxBudget: 1200,
  duration: 7
  beginDate: 'May 06 2017'
  endDate:  'Aug 10 2017'
  };   

var Preston = {
  locations: ['San Franciso', 'Honolulu', 'Puerto Rico'],
  maxBudget: 1500,
  duration: 7
  beginDate: 'May 06 2017'
  endDate: 'Jun 30 2017'  
  };  

var Jesse = {
  locations: ['Chicago', 'Honolulu', 'Paris'],
  maxBudget: 1800,
  duration: 7
  beginDate: 'Jun 06 2017'
  endDate: 'Aug 06 2017'
  };

var Nate = {
  locations: ['San Franciso', 'Honolulu', 'Hong Kong'],
  maxBudget: 2000,
  duration: 7
  beginDate: 'May 15 2017'
  endDate: 'Jul 25 2017'

  };  

var friends = [Nate, Jesse, Preston, Lou, Max];

var commonLocations = function(array) {
  var allLocations = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].locations.length; j++) {
      if(!allLocations.includes(array[i].locations[j])) {
        allLocations.push(array[i].locations[j]);
      }
    }
  }
  return allLocations;
}  

commonLocations(friends);
// Array.prototype.isSubsetOf = function (arr) {
//   if (this.length === 0) {
//     return false;
//   } 
//   var contains = 0;
//   for (var i = 0; i < this.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j] === this[i]) {
//         contains++;
//       }  
//       if (contains === this.length) {
//         return true;
//       }
//     }
//   }

//   return false; 
//   // your code here
// };


