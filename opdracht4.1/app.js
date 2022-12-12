//variable
let button = document.getElementById ( "button") 
//variable
let background = document.querySelector("body")
//variable
let time;
//variable
let time_after
//variable
let time_end


//je roept die variable en geeft aan dat je daarmee wilt gaan werken 
let para = document.getElementById ("para")
// je kunt op de button klikken 
button.addEventListener("click", button_click )
// je roept die functie
function button_click() {
// button verdwijnt
button.style.display = "none"
// je zet hier de achtergrond op rood 
background.style.backgroundColor = "red"
// je laat hier mee de apparaat een rondom getal tussen de 0 en de 10 sec (er staat 10000 omdat het in ms gaat)
time = Math.random() * 10000
// na die rondom getal komt er een groen achtergrond
setTimeout(green_color, time  )

}
// je roept die functie 
function green_color() {
    // je laat zien wat voor achtergrond je wilt 
    background.style.backgroundColor = "green"

  //huidige tijd in ms
time_after = Date.now()

}
// vanaf die clicktime begint het tellen 
window.addEventListener("click", clicktime)
// je roept die variable
function clicktime() {
// je zet als de achtergrond groen wordt zet je die timer uit 
    if (background.style.backgroundColor == "green") {
        //huidige tijd in ms
        time_end = Date.now()
        para.innerText = time_end - time_after
    } else {
        
    }
}