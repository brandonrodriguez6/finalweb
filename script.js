//The var a/b/c applies the id "bab/bar/bac" to the div or button/image that is being clicked.
var a = document.getElementById("bab");

// The function showImage is the function that cycles images. The first if statement is cheecking to see if image baby is in div a which has the id "bab" Once the image baby is in place then it will switch to AJ. From there it will repeat the process and switch to the next image and then to the next to create a cycle of images.
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
//This is the main part of the function which acutally checks if the images are in place. The letter b,c, and a are the ids that the div has. To summarize the correct postions are rod2 in div b rod in div c and star is in div a.
	if (b.src.match("images/rod2.png") && c.src.match("images/rod.png") && a.src.match("images/star.png")){
		//the class opaque makes the images not visible when images are in the correct position. This function is adding a class
			a.classList.add("opaque");
			b.classList.add("opaque");
			c.classList.add("opaque");
		//Null makes the images not clickable anymore.
			document.getElementById("bar").onclick = null;
			document.getElementById("bac").onclick = null;
			document.getElementById("bab").onclick = null;
		//Plays audio when images are in the correct position.
			document.getElementById("winner").play();
		//This part of the function removes a class that makes the image with the id "bag" not appear will be removed.
			document.getElementById("bag").classList.remove("none");
		//This is the next part which adds the class "none" to the image that was previously in the div section. That makes the new image appear and takes over the place of the old image in the div.
			document.getElementById("bad").classList.add("none");
			
	} else {}
}

	
	
