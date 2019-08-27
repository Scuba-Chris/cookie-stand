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

//calc cookies sold each hour 
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
  storeNames.innerHTML = '';
  for (var i = 0; i < stores.length; i++){

    var row = document.createElement('tr');
    var name = document.createElement('td');
    name.textContent = (stores[i].storeName);
    row.appendChild(name);
    
    for (var x = 0; x < storeHours.length; x++){
      var cookieSales = document.createElement('td');
      cookieSales.textContent = (stores[i].storeSales[x]);
      row.appendChild(cookieSales);
    }
    dailyStoreTotals(i, row);
    storeNames.appendChild(row);
  }

}

storeNameRender();

function storeHoursRender() {
  openHours.innerHTML = '';
  var hourlyTh = document.createElement('th');
  hourlyTh.textContent = 'store names';
  openHours.appendChild(hourlyTh);
  for ( var x = 0; x < storeHours.length; x++){

    var hours = document.createElement('th');
    hours.textContent = (storeHours[x]);
    openHours.appendChild(hours);
  }
}
storeHoursRender();

function hourlyTotalSales(){
  totals.innerHTML = '';
  var hourlyTotalsTd = document.createElement('td');
  hourlyTotalsTd.textContent = 'hourly totals';
  totals.appendChild(hourlyTotalsTd);
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

function dailyStoreTotals(x, location){
  var sum = 0;
  for ( var i = 0; i < storeHours.length; i++ ){
    sum += stores[x].storeSales[i];
  }
  console.log(sum);

  var allDailySalesTotals = document.createElement('td');
  allDailySalesTotals.textContent = (sum);
  location.appendChild(allDailySalesTotals);
}

var form = document.getElementById('add-store');

function formData ( event ){
  event.preventDefault();
  var storeName = event.target.store_name.value;
  var minCustHour = event.target.min_customers.value;
  var maxCustHour = event.target.max_customers.value;
  var avgCookieSale = event.target.average_sales.value;
  var newStore = new Locations(storeName, minCustHour, maxCustHour, avgCookieSale);
  form.reset();
  newStore.cookieSales();
  renderAll();
}


console.log(stores);
form.addEventListener('submit', formData);


function renderAll(){

  storeNameRender();
  storeHoursRender();
  hourlyTotalSales();

}
form.addEventListener('submit', renderAll);
