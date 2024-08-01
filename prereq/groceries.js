// When you type a grocery item into the text input and press [Enter]:
// - the new item should appear at the bottom of the list
// - the text input should be reset to a blank input field
// - the cursor should be blinking in the text input again

document.addEventListener("DOMContentLoaded", setupListeners)

function setupListeners() {
  document.querySelector("form").addEventListener("submit", addItem)
}

function addItem(e) {
  e.preventDefault();

  const newItemText = document.querySelector("input").value

  console.log(newItemText)

  const groceryList = document.querySelector('#groceries')
  // <template>
  //   <li>New Grocery Item
  //     <span><a href="">[delete]</a></span>
  //   </li>
  // </template>
  
  const template = document.querySelector("#newitem_template")
  let newFragment = template.content.cloneNode(true)
  const listItem = newFragment.querySelector('li')
  listItem.textContent = document.querySelector("input").value
  
  groceryList.appendChild(newFragment)

  document.querySelector("form").reset()

  // let newElement = document.createElement("li")
  // newElement.textContent = newItemText
  // let spanElement = document.createElement("span")
  // let linkElement = document.createElement("a")
  // linkElement.href = ""
  // linkElement.textContent = "[delete]"

  // spanElement.appendChild(linkElement)
  // newElement.appendChild(spanElement)
  // groceryList.appendChild(newElement)
  
  // document.querySelector("form").reset()

  
}
