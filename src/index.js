function displayResponse(myResponse)
{
 document.getElementById("app").innerHTML = JSON.stringify(myResponse);
}

function consoleResponse(myResponse)
{
 console.log(JSON.stringify(myResponse));
}

function fetchJSON(url,functionTraitement) {

  var myreturn;
  
  fetch(url)
    .then((response) => response.json())
    .then(data => myreturn = data)
    .then(()=> functionTraitement(myreturn))
   
    .catch(function (error) 
    {
      console.log(error);
    });

}

fetchJSON("https://jsonplaceholder.typicode.com/posts",displayResponse);

fetchJSON("https://jsonplaceholder.typicode.com/posts",consoleResponse);
