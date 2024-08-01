// Your code goes here
const MAPS_API_KEY="AIzaSyCCP20OMYfZgUwnj0636yv9EA74jG3u8ys"

function onDocumentLoaded() {
  document.querySelector("#get-location").addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e)
    navigator.geolocation.getCurrentPosition(handleLocationReceived); 
  })
}
document.addEventListener("DOMContentLoaded", onDocumentLoaded)

function handleLocationReceived(location) {
  console.log("Got location!", location)
  updateMap(location.coords.latitude, location.coords.longitude)
}
function updateMap(latitude, longitude) {
  const new_src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=17&size=600x400&format=png32&maptype=satellite&key=" + MAPS_API_KEY
  document.querySelector("img").src = new_src
}

