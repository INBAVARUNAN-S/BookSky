var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
})

// select cancel button

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

// select container,add-book-button,book-title-input,book-author-input,book-description-output
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book") // button
var title = document.getElementById("book-title")
var author = document.getElementById("book-author-input") 
var description = document.getElementById("book-description-output")

addbook.addEventListener("click", function(event){
    event.preventDefault()

    // prevent adding empty books
    if(!title.value.trim() || !author.value.trim() || !description.value.trim()){
        alert("Please fill in all field")
        return
    }

    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `
            <h2>${title.value}</h2>
            <h5>${author.value}</h5>
            <p>${description.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.appendChild(div)

    // title.value = ""
    // author.value = ""
    // description.value = ""

    // close popup after reading a book
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}