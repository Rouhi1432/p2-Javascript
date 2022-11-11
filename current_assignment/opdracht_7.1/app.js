let budget = prompt("budget", "");  
let product = 60
if (budget > product) {
    document.getElementById("eindbedrag").style.color = "green"
    document.getElementById("eindbedrag").innerHTML = "U heeft genoeg geld!"
} else {
    document.getElementById("eindbedrag").style.color = "red"
    document.getElementById("eindbedrag").innerHTML = "Helaas, te weinig geld"
}