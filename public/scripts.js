// Using coinlayer api

// variables needed for fetch
const apiKey = "5f5ec626ea1831755e448594a5e786ec";
const url = "https://api.coinlayer.com/api/live?access_key=";
const urlAddition = "&symbols=";
let tickerName; // People use $XBT for $BTC
const apiUrl = url + apiKey;

// variables needed for dom manipulations
let select = document.querySelector("select");
let pee = document.querySelector("p");
let selectValue = document.getElementById("id");

/*
! API info:

URL is formed:
http://api.coinlayer.com/api/live?access_key=       5f5ec626ea1831755e448594a5e786ec    &symbols=    BTC,ETH

*/
// message.innerHTML = url + apiKey + urlAddition + "BTC";

// fetch to get prices
let array;
function fetchData() {
  fetch(apiUrl)
    .then((results) => {
      return results.json();
    })
    .then((tickers) => {
      //displayPrice(tickers);
      //displayData(tickers.rates);
      createDropdown(tickers.rates);
    })
    .catch((err) => console.log(err));
}

fetchData();

const createDropdown = (input) =>
  Object.entries(input).forEach(([key, value]) => {
    console.log(key, value);

    let option = document.createElement("option");

    select.appendChild(option);
    option.innerText = key;
    option.id = value;
  });

const handleChange = (e) => {
  console.log(
    "Selected value",
    selectValue.options[selectValue.selectedIndex].id
  );
  document.querySelector(".output").textContent =
    selectValue.options[selectValue.selectedIndex].id;
};
console.log(selectValue.value);
