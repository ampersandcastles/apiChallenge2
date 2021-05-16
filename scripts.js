// Using coinlayer api

// variables needed for fetch
const apiKey = "5f5ec626ea1831755e448594a5e786ec";
const url = "http://api.coinlayer.com/api/live?access_key=";
const urlAddition = "&symbols=";
let tickerName; // People use $XBT for $BTC
const apiUrl = url + apiKey;
const eth = "eth";

// variables needed for dom manipulations
let select = document.querySelector("select");
let option = document.createElement("option");

/*
! API info:

URL is formed:
http://api.coinlayer.com/api/live?access_key=       5f5ec626ea1831755e448594a5e786ec    &symbols=    BTC,ETH

*/

// message.innerHTML = url + apiKey + urlAddition + "BTC";

// I feel like I should be using async here.

// fetch to get prices

function fetchData() {
  fetch(apiUrl)
    .then((results) => {
      return results.json();
    })
    .then((tickers) => {
      displayPrice(tickers);
    })
    .catch((err) => console.log(err));
}

fetchData();

function displayPrice(list) {
  let array = Object.entries(list.rates);
  console.log(array);
}
