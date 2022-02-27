let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("input-dlt")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const tabs = [
  {url: "https://www.seznam.cz/"}
]

saveBtn.addEventListener("click", function () {
  console.log(tabs)

})

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads);
}
function render(leads){
  let listItems = ""
for (let i = 0; i < leads.length; i++) {
  //Create element, set text content, append to ul
//  listItems += "<li><a href=' " + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</li></a>"
listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
             ${leads[i]}
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

deleteBtn.addEventListener("dblclick", function(){
  console.log("double click");
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
//  console.log(localStorage.getItem("myLeads"));

})
