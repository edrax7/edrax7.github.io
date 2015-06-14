// Commenting out things in JS you can either use "//" or "/*   */"

function askQuestions() {

var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

if (firstName.toLowerCase() == "general" && lastName.toLowerCase() != "assembly") {
	
	console.log("Welcome General, you have command!");

} else if (lastName == "Assembly") {
	alert("GET BACK TO WORK!!");

}
}

$(function() {
	$("img").on("click", askQuestions);
});



/*

//below is code for throwing up name and age boxes. The "prompt" command puts up a prompt box on the web page to capture data
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName = firstName + " " + lastName;

console.log(fullName);  //this displays the output in the console to help with testing


// this replaces the h2 text with the fullName entered above
$("h2").text("Hello " + fullName);

// this then asks for the user's name and provides a conditional response
var userAge = prompt("How old are you?");
userAge = parseInt(userAge);

if (userAge >= 18) {
	console.log("User is an adult!");

} else if (userAge >= 13) {
	alert("Come back in a few years");

} else {
	alert("Piss off child!");
}





// below is code for changing the CSS in the web page

// When the page has loaded
$(function() {

	// Hide the content when the page loads
	$("h3").next().hide();

		// When the user clicks on an h3
		$("h3").on("click", function () {

			// Find the next element and toggle it to hide and then re-appear on click over x000 milliseconds, or x secs
			$(this).next().slideToggle(1000);

			// Toggle a class of "open" on click. This will chance the "+" to a "-" on click
			$(this).toggleClass("open");

	})

})


	/* $ is default shortcut for JQuery.  JQuery is a library of
	JS that has already been coded.  Every time you type $ you
	are calling JQuery */