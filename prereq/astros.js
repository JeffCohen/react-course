// Display the names of all of the astronauts in space, in alphabetic order by first name.

// Your code goes here:

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("h1").addEventListener("click", getAstronauts)
})

function emitName(person) {
  console.log(person.name)
}

function extractName(person) {
  return person.name
}

async function getAstronauts(e) {
  const httpResponse = await fetch("http://api.open-notify.org/astros.json")  // GET  
  let data = await httpResponse.json()
  console.log(data)

  const people = data.people

  // people.map { |person| person.name }
  
  const names = people.map(person => person.name)

  // console.log(names)

  people.forEach(person => { console.log(person.name); return ... })                            
                                // people.each do |person|
                                //   puts person.name
                                // end

  // for (person of people) {
  //   console.log(person.name)
  // }
}
