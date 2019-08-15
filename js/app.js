'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = [];

function Locations( storeName, minCustHour, maxCustHour, avgCookieSale ){
  this.storeName = storeName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieSale = avgCookieSale;
  this.storeSales = [];
  stores.push(this);
}


var store1 = new Locations('1st & Pike', 23, 65, 6.3);
var store2 = new Locations('seaTac', 3, 24, 1.2);
var store3 = new Locations('seattle center', 11, 38, 3.7);
var store4 = new Locations('capitol hill', 20, 38, 2.3);
var store5 = new Locations('alki', 2, 16, 4.6);


// random customer function
Locations.prototype.randomCustPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
};

Locations.prototype.cookieSales = function() {
  for (var i = 0; i < storeHours.length; i++){
    this.storeSales.push(Math.floor((this.randomCustPerHour()) * this.avgCookieSale));
  }
};
for (var x = 0; x < stores.length; x++){
  stores[x].cookieSales();
  console.log(stores[x].storeSales);
}


// all table variables and functions
var openHours = document.getElementById('store-hours');
var storeNames = document.getElementById('store-names');
var totals = document.getElementById('sale-totals');

function storeNameRender() {
  for (var i = 0; i < stores.length; i++){

    var names = document.createElement('tr');
    names.textContent = (stores[i].storeName);
    storeNames.appendChild(names);

    for (var x = 0; x <= storeHours.length; x++){
      var cookieSales = document.createElement('td');
      cookieSales.textContent = (stores[i].storeSales[x]);
      names.appendChild(cookieSales);
    }
  }
}

storeNameRender();

function storeHoursRender() {

  for ( var x = 0; x < storeHours.length; x++){

    var hours = document.createElement('th');
    hours.textContent = (storeHours[x]);
    openHours.appendChild(hours);
  }
}
storeHoursRender();

function hourlyTotalSales(){
  
  for(var x = 0; x < storeHours.length; x++){
    var sum = 0;
    for ( var i = 0; i < stores.length; i++){
      sum += stores[i].storeSales[x];
    }
    console.log(sum);
    var allHourlySales = document.createElement('td');
    allHourlySales.textContent = (sum);
    totals.appendChild(allHourlySales);

  }
}
hourlyTotalSales();

