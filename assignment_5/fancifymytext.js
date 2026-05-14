function makeBigger() {
	document.getElementById("text").style.fontSize = "24pt";
}

function changeStyles() {
	var textArea = document.getElementById("text");
	if (document.getElementById("fancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (document.getElementById("boring").checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function moo() {
	var textArea = document.getElementById("text");
	var text = textArea.value.toUpperCase();
	var parts = text.split(".");
	textArea.value = parts.join("-Moo");
}
