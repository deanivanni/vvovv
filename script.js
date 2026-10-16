var beginDate = new Date("Oct 9, 2023 00:00:00").getTime();

var x = setInterval(function() {

	var now = new Date().getTime();
	var distance = now - beginDate;

	// Time calculations for years, days, hours, minutes and seconds
	var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
	// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("counter").innerHTML = years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	/*
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("counter").innerHTML = "";
	}
	*/
}, 1000);
