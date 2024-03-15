// Imports
// import moment from "./node_modules"

var comSubmit = document.getElementById("submit")

function comMake() {
    // Get comment contents
    let comTents = document.getElementById("combox")
    var comText = comTents.value
    // Get comment date
    // let comDate = moment()
    // Create new object in body with date and contents
    // let comHead = " <div class='comment'>" 
    // let comFoot = "</div> "
    // let dateHtml = "<p class='date'>" + comDate.fromNow() + "</p>"
    let tentsHtml = comText
    var tentsItem = document.createElement("li")
    tentsItem.textContent = tentsHtml

    // document.getElementById("comsect").innerHTML = comHead + dateHtml + tentsHtml + comFoot
    let prevTents = document.getElementById("comsect")
    prevTents.appendChild(tentsItem)

}

comSubmit.addEventListener("click", comMake)
