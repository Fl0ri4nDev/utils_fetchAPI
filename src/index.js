function displayResponse(myResponse) {
  document.getElementById("app").innerHTML = JSON.stringify(myResponse);
}

function consoleResponse(myResponse) {
  console.log(JSON.stringify(myResponse));
}

function fetchJSON(url, functionTraitement) {
  var myreturn;

  fetch(url)
    .then((response) => response.json())
    .then((data) => (myreturn = data))
    .then(() => functionTraitement(myreturn))

    .catch(function (error) {
      console.log(error);
    });
}

var url_base = "http://router.project-osrm.org/match/v1/bike/";
//var url_coordinate='2.39998,48.84674;2.400429913877873,48.84645272792164';
var url_coordinate =
  "2.4067760204071087,48.845358350231734;2.406598994612126,48.84525950203694";

var url_parameters = "?steps=true&geometries=geojson&annotations=true";

var url_full = url_base + url_coordinate + url_parameters;

document.getElementById("url").innerHTML = url_full;

fetchJSON(url_full, displayResponse);

//fetchJSON("https://jsonplaceholder.typicode.com/posts", displayResponse);
//fetchJSON("https://jsonplaceholder.typicode.com/posts", consoleResponse);
