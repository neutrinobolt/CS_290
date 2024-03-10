// Imports
import moment from "moment"

var comSubmit = document.getElementById("submit")

function comMake() {
    // Get comment contents
    let comTents = document.getElementById("combox")
    // Get comment date
    let comDate = moment()
    // Create new object in body with date and contents
    let comHead = "<div class='comment'>" 
    let comFoot = "</div>"
    let dateHtml = "<p class='date'>" + comDate.fromNow() + "</p>"
    let tentsHtml = "<p class='comTents>" + comTents + "</p>"

    document.getElementById("comsect").innerHTML = comHead + dateHtml + tentsHtml + comFoot

}

comSubmit.addEventListener("click", comMake)
