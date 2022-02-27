let myLeads = []



const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let deleteBtn = document.getElementById("input-dlt")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render();
}

deleteBtn.addEventListener("dblclick", function(){
  console.log("double click");
  localStorage.clear()
  myLeads = []
  render()
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render()
//  console.log(localStorage.getItem("myLeads"));

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
