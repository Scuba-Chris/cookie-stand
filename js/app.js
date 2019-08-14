'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Locations( storeName, minCustHour, maxCustHour, avgCookieSale ){
  this.storeName = storeName;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieSale = avgCookieSale;
  this.storeSales = [];
  Locations.stores.push(this);
}

Locations.stores = [];

var store1 = new Locations('1st & Pike', 23, 65, 6.3);
var store2 = new Locations('seaTac', 3, 24, 1.2);
var store3 = new Locations('seattle center', 11, 38, 3.7);
var store4 = new Locations('capitol hill', 20, 38, 2.3);
var store5 = new Locations('alki', 2, 16, 4.6);


console.log(Locations.stores);

Locations.prototype.randomCustPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
};



Locations.prototype.cookieSales = function() {
  for (var i = 0; i < storeHours.length; i++){
    this.storeSales.push(Math.floor((this.randomCustPerHour()) * this.avgCookieSale));
  }
};
for (var x = 0; x < Locations.stores.length; x++){
  Locations.stores[x].cookieSales();
  console.log(Locations.stores[x].storeSales);
}
var section = document.getElementById('stores');

function render() {

  for (var i = 0; i < Locations.stores.length; i++){
    var elh2 = document.createElement('h2');
    var list = document.createElement('ul');

    console.log(Locations.stores[i].storeName);
    elh2.textContent = (Locations.stores[i].storeName);
    section.appendChild(elh2);
    section.appendChild(list);
    for ( var x = 0; x < storeHours.length; x++){
      var listItems = document.createElement('li');
      listItems.textContent = (Locations.stores[i].storeSales[x]);
      list.appendChild(listItems);
    }
  }
}
render();
