// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

//
var a = document.getElementById("bab");


function showImage(){
	if (a.src.match("images/baby.PNG")){
		a.src = "images/aj.png";
	} else if (a.src.match("images/aj.png")){
		a.src = "images/dad.png";
	} else if (a.src.match("images/dad.png")){
		a.src = "images/star.png";
	} else if (a.src.match("images/star.png")) {
		a.src = "images/baby.PNG";
	}
}
var b = document.getElementById("bar");
function showImage2(){
	if (b.src.match("images/aj.png")){
		b.src = "images/rod2.png";
	} else if (b.src.match("images/rod2.png")){
		b.src = "images/dad.png";
	} else if (b.src.match("images/dad.png")){
		b.src = "images/star.png";
	} else if (b.src.match("images/star.png")) {
		b.src = "images/aj.png";
	}
}
var c = document.getElementById("bac");
function showImage3(){
	if (c.src.match("images/dad.png")){
		c.src = "images/rod.png";
	} else if (c.src.match("images/rod.png")){
		c.src = "images/aj.png";
	} else if (c.src.match("images/aj.png")){
		c.src = "images/star.png";
	} else if (c.src.match("images/star.png")) {
		c.src = "images/dad.png";
	}
}
function checkPosition(){
	if (b.src.match("images/rod2.png") && c.src.match("images/rod.png") && a.src.match("images/star.png")){
			a.classList.add("opaque");
			b.classList.add("opaque");
			c.classList.add("opaque");
			document.getElementById("bar").onclick = null;
			document.getElementById("bac").onclick = null;
			document.getElementById("bab").onclick = null;
			document.getElementById("winner").play();
			document.getElementById("bag").classList.remove("none");
			document.getElementById("bad").classList.add("none");
			
	} else {}
}

	
	