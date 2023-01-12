let now= new Date();
document.getElementById("date").innerHTML=document.getElementById("date").innerHTML+now



var cityname;
const searchInputBox = document.getElementById("searchBox");
// Event Listener Function on keypress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
      getcity(searchInputBox.value);
  }
});

function getcity(city){

  link =
  "https://api.openweathermap.org/data/2.5/weather?q="
  + city +
  "&appid=c22f1bf16c3dc4482e5481af4d4a8649";

  var request = new XMLHttpRequest();
request.open("GET", link, true);
request.onload = function () {
  var obj = JSON.parse(this.response);
  console.log(obj);
  document.getElementById("city").innerHTML = obj.name;
  document.getElementById("temp").innerHTML =
    Math.round(obj.main.temp - 273.15) + "°C";
  //   document.getElementById("temp")="°C";
  // document.querySelector(.)
};
if (request.status >= 200 && request.status < 400) {
  var temp = obj.main.temp;
} else console.log("City Data is not available");

request.send();

}

