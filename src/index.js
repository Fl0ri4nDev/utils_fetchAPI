var myJSON = "";

function displayResponse(myResponse) {
  //document.getElementById("app").innerHTML = JSON.stringify(myResponse);
  document.getElementById("app").innerHTML = myResponse;
}

function parseJSONResponse(myResponse) {
  myJSON = JSON.parse(myResponse);

  // document.getElementById("app").innerHTML =  document.getElementById("app").innerHTML+ myResponse;
  // var tmp=myJSON.getElementsByTagName('way')[0];
  // document.getElementById("url").innerHTML = tmp;
}

function consoleResponse(myResponse) {
  console.log(JSON.stringify(myResponse));
}

function fetchJSON(url, functionTraitement) {
  var myreturn;

  fetch(url)
    .then((response) => response.text())
    .then((data) => (myreturn = data))
    .then(() => functionTraitement(myreturn))

    .catch(function (error) {
      console.log("erreur :" + error);
    });
}

//chemin Vincennes = 48.83521631227285,2.4347042284819675
//route Nation : 48.84645272792164,2.400429913877873
var url_overpass_coordinates = "48.83521631227285,2.4347042284819675";
var url_overpass_base = "https://overpass-api.de/api/interpreter?data=";
var url_overpass_data =
  "[out:json];(way(around:5," + url_overpass_coordinates + ");>;);out;";
var url_overpass = url_overpass_base + url_overpass_data;

//var url_base = "https://router.project-osrm.org/match/v1/bike/";
//var url_coordinate='2.39998,48.84674;2.400429913877873,48.84645272792164';

//var url_coordinate ="2.4067760204071087,48.845358350231734;2.406598994612126,48.84525950203694";

var url_parameters = "?steps=false&geometries=geojson&annotations=true";

var url_full;
//url_full= url_base + url_coordinate + url_parameters;
url_full = url_overpass;
document.getElementById("url").innerHTML = url_full;

fetchJSON(url_full, parseJSONResponse);
document.getElementById("app").innerHTML = myJSON;

//fetchJSON("https://jsonplaceholder.typicode.com/posts", displayResponse);
//fetchJSON("https://jsonplaceholder.typicode.com/posts", consoleResponse);
