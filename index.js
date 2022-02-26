let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
  render()
})

function render(){
  let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
  //Create element, set text content, append to ul
  listItems += "<li>" + myLeads[i] + "</li>"

  //Nebo lze rozdělit do 3 nasledujiich prikazu
  //const li = document.createElement("li")
  //li.textContent = myLeads[i]
  //ulEl.append(li)
}
  ulEl.innerHTML = listItems
}
