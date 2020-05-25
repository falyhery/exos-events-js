// Fonctionnalités 1 et 1-bis
let footer = document.querySelector("footer"); 

footer.addEventListener("click", onClickFooter);

clicksCount = 0;
function onClickFooter() {
	console.log("clique");
	clicksCount++;
	console.log(`clic numéro : ${clicksCount}`);
}

// Fonctionnalité 2
let menuHamb = document.querySelector("span");

menuHamb.addEventListener("click", toggleCollapse);

function toggleCollapse() {
	document.getElementById("navbarHeader").classList.toggle("collapse");
}

// Fonctionnalité 3
let firstEditBtn = document.getElementsByTagName("button")[2];

firstEditBtn.addEventListener("click", changeText); 

function changeText() {
	document.getElementsByClassName("card-text")[0].style.color = "red";
}

// Fonctionnalité 4
let secondEditBtn = document.getElementsByTagName("button")[4]; 

secondEditBtn.addEventListener("click", toggleText);

function toggleText() {
	if (document.getElementsByClassName("card-text")[1].style.color === "") {
	document.getElementsByClassName("card-text")[1].style.color = "green";
	} else { 
		document.getElementsByClassName("card-text")[1].style.color = "";
	}
}

// Fonctionnalité 5
let navbarToClick = document.querySelector("div.navbar.navbar-dark.bg-dark.box-shadow");

navbarToClick.addEventListener("dblclick", toggleBootstrap); 

function toggleBootstrap() {
	if (document.getElementsByTagName("head")[0].childNodes[3].href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
		document.getElementsByTagName("head")[0].childNodes[3].href = "";
	} else { document.getElementsByTagName("head")[0].childNodes[3].href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" // cliquer sur la même ligne que JS & Events pour revenir à la normale
	}
}

// Fonctionnalité 6
for (let i = 0; i < document.getElementsByClassName("btn-success").length; i++) {

	let btnView1 = document.getElementsByClassName("btn-success")[i];

	btnView1.addEventListener('mouseover', changeText);
	btnView1.addEventListener('mouseover', changeImg);

	function changeText() {
		if (document.getElementsByClassName("card-text")[i].textContent === "") {
			document.getElementsByClassName("card-text")[i].textContent = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web";
		} else {
			document.getElementsByClassName("card-text")[i].textContent = "";
		}
	}

	function changeImg() {
		if (document.getElementsByTagName("img")[i].style.width === "") {
			document.getElementsByTagName("img")[i].style.width = "20%";
		} else {
			document.getElementsByTagName("img")[i].style.width = "";
		}
	}
}

// Fonctionnalité 7 
let greyBtn = document.getElementsByClassName("btn-secondary")[0];

greyBtn.addEventListener("click", changeOrder);

function changeOrder() {
	let firstCard = document.getElementsByClassName("col-md-4")[0];

	let lastCard = document.getElementsByClassName("col-md-4")[5];

	document.getElementsByClassName("row")[1].insertBefore(lastCard, firstCard);
	}

// Fonctionnalité 8 
let blueBtn = document.getElementsByClassName("btn-primary")[0];

blueBtn.addEventListener("click", reverseOrder); 

let lastCard = document.getElementsByClassName("col-md-4")[5];

let firstCard = document.getElementsByClassName("col-md-4")[0]

function reverseOrder(e) {
	e.preventDefault();
	document.getElementsByClassName("row")[1].insertBefore(firstCard, lastCard.nextSibling);
}

// Fonctionnalité 9

// console.log(document.getElementsByTagName("strong")[0]);

console.log(document.getElementsByClassName("navbar-dark")[0]);

// let input = document.getElementsByTagName("strong")[0]; 

let input = document.getElementsByClassName("navbar-dark")[0]

// input.addEventListener('keydown', (event) => {
// 	console.log(`key=${event.key},code=${event.code}`);
// });

input.addEventListener("keypress", (event) => {
	if (event.key === "a") {
		document.body.className = "";
		document.body.classList.add("col-4");
	} else if (event.key === "y") {
		document.body.className = "";
		document.body.classList.add("offset-4", "col-4"); 
	} else if (event.key === "p") {
		document.body.className = "";
		document.body.classList.add("offset-8", "col-4"); 
	} else if (event.key === "b") {
		document.body.className = "";
	}
});
