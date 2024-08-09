document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like").forEach((element) => {
    element.addEventListener("click", onLikeClicked)
  })
})

// <a class="like">&hearts; <span>0</span></a>

function onLikeClicked(event) {
  console.log(event.target)
  console.log(event.currentTarget)
  event.preventDefault();
  let count = parseInt(event.currentTarget.querySelector("span").textContent)
  count += 1
  event.currentTarget.querySelector("span").textContent = count
  event.currentTarget.style.backgroundColor = "red"
  event.currentTarget.style.color = "white"
  // const t = event.currentTarget
  setTimeout(() => {
    event.style.backgroundColor = "white"
    event.style.color = "red"  
  }, 500)
  
}
