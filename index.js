let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  render()
  inputEl.value = "";
})

function render(){
  let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
  //Create element, set text content, append to ul
//  listItems += "<li><a href=' " + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</li></a>"
listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
             ${myLeads[i]}
             </a>
        </li>
            `

  //Nebo lze rozdělit do 3 nasledujiich prikazu
  //const li = document.createElement("li")
  //li.textContent = myLeads[i]
  //ulEl.append(li)
}
  ulEl.innerHTML = listItems
}
