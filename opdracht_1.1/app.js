
let paragraaf = document.getElementById("paragraaf");


const winkelmand = ["bananen ", "whiskey ", "chips ", "bonen ", "aardappelen "];


let aantal = winkelmand.length;

paragraaf.innerText = "er zitten " + aantal + " producten in je winkelmand";

paragraaf.innerText = "Uw producten zijn: " + winkelmand

paragraaf.innerText = winkelmand[3] + " staat op de vierde plek in uw winkelmand";

winkelmand[1] = "bier"

paragraaf.innerText = winkelmand

function product_toevoegen() {
    winkelmand.push("kaas")
    paragraaf.innerText = winkelmand
}

if (aantal > 1) {
    aantal = winkelmand;
}
else {
    aantal = "u heeft niet genoeg producten om te tonen";
}

document.getElementById("paragraaf").innerHTML = aantal;
console.log(aantal);

if (winkelmand[4] == "drop") {
    paragraaf.innerText = winkelmand
}
else {
    paragraaf.innerText = "u heeft geen drop"
}


const winkelmand2 = winkelmand.slice(2);
paragraaf.innerText = winkelmand + " * * " + winkelmand2;


winkelmand.sort();
paragraaf.innerText = winkelmand.sort();

