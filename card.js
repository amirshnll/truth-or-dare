var data = [];
var colors = [];

function onload() {
	readTextFile("data.json", function(text){
		data = JSON.parse(text);
		data = data['question'];
		randomcardtext();
	});
	readTextFile("color.json", function(text){
		colors = JSON.parse(text);
	});
}

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	}
	rawFile.send(null);
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomcardtext() {
	var random_number = randomIntFromInterval(0, data.length - 1);
	document.getElementById('text').innerHTML = data[random_number];
}

function changebackground(color) {
	document.getElementById('body').style.backgroundColor = colors[color];
}

function changecardbackground(color) {
	document.getElementById('card').style.backgroundColor = colors[color];
	document.getElementById('next').style.backgroundColor = colors[color];
	document.getElementById("card").style.boxShadow = "0 0 20px " + colors[color];
	document.getElementById("next").style.boxShadow = "0 0 20px " + colors[color];
}