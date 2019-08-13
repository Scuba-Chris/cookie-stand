
var store1 = {
  storeName: '1st & Pike',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookieSale: 6.3,
  cookieSalePerHour: [],
  randomCustPerHour: function() {
    return [Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour];
  }
};
console.log(store1.randomCustPerHour());

var store2 = {
  storeName: 'seatac airport',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookieSale: 1.2,
  cookieSalePerHour: [],
  randomCustPerHour: function() {
  return [Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour];
  }
};
console.log(store2.randomCustPerHour());

var store3 = {
  storeName: 'seattle center',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookieSale: 3.7,
  cookieSalePerHour: [],
  randomCustPerHour: function() {
  return [Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour];
  }
};
console.log(store3.randomCustPerHour());

var store4 = {
  storeName: 'capitol hill',
  minCustHour: 20,
  maxCustHour: 38,
  avgCookieSale: 2.3,
  cookieSalePerHour: [],
  randomCustPerHour: function() {
  return [Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour];
  }
};
console.log(store4.randomCustPerHour());

var store5 = {
  storeName: 'alki',
  minCustHour: 2,
  maxCustHour: 16,
  avgCookieSale: 4.6,
  cookieSalePerHour: [],
  randomCustPerHour: function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
  }
};
// console.log(store5.randomCustPerHour());
// store5.cookieSalePerHour.push(Math.floor(store5.randomCustPerHour() * store5.avgCookieSale));
// console.log(store5.cookieSalePerHour);

// var randomCustPerHour = [];
// var randomCustPerHour = function() {
//  document.getElementById(randomCustPerHour);
// } 
// randomCustPerHour();
// console.log(randomCustPerHour);


var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores = [store1, store2, store3, store4, store5];

storeSales = function() {
  for (i = 0; i < storeHours.length; i++){
    stores[0].cookieSalePerHour.push(Math.floor(stores[0].randomCustPerHour() * stores[0].avgCookieSale));
    for (j = 0; j < stores.length; j++){
      
    }
    
  }
};
storeSales();

console.log(stores[0].cookieSalePerHour);