// Your code goes here
const MAPS_API_KEY="ASK_JEFF"

function onDocumentLoaded() {
  document.querySelector("#get-location").addEventListener("click", function(e) {
    e.preventDefault();
  })
}
document.addEventListener("DOMContentLoaded", onDocumentLoaded)

function updateMap(latitude, longitude) {
  const new_src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=17&size=600x400&format=png32&maptype=satellite&key=" + MAPS_API_KEY
  document.querySelector("img").src = new_src
}

