var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var newAlphabet = alphabet;
var remaining = alphabet.slice();
var check;
var input;



function getNewAlphabet(){
	var arr = check;
	

	if (arr.includes(" ")){
		alert("Please don't use any spaces");
		return false;
	}

	if (arr.length !== 26){
		alert("Please make sure you have exactly 26 characters");
		return false;
	}

	if (arr.includes(undefined) || isOnlyLetters(arr) === false){
		alert("Please make sure you have 26 LETTERS ONLY with no spaces or other characters");
		return false;
	}

	newAlphabet = arr;
	return true;
}

function isLetter(c) {
		if (alphabet.includes(c.toLowerCase())){
			return true;
		}
	return false;
}

function isOnlyLetters(arr){
	var i;
	for (i = 0; i < arr.length; i++){
		var letter = arr[i];
		if (!(isLetter(letter))){
			return false;
		}
	}

	return true;
}

function checkLetters(){
	remaining = alphabet.slice();
	check = new Array(26);

	input = new Array(26);

	var i;
	for (i = 1; i <= 26; i++){
		var element = document.getElementById("remainingAlphabet").value.toLowerCase();
		var arr = element.split("");
		var value = arr[i - 1];

		if (value === undefined || value === null || value === "" || !(isLetter(value))){
			continue;
		}

		else if (check.includes(value)){
			alert(value.toUpperCase() + " is being used in already" + ". Please choose an unused letter");
			remaining = "You have multiple uses of letter " + value;
			return false;
		}

		check[i - 1] = value;

		if (isLetter(value) && remaining.includes(value)){
			console.log("Remaining currently: " + remaining);
			var index = remaining.indexOf(value)
			console.log("Index: " + index);
			remaining.splice(index, 1);
		}

		console.log("New Alphabet: " + check);
		console.log("Remaining: " + remaining);
		console.log("Original Alphabet: " + alphabet);
	}

	return true;
}

function displayRemaining(){
	var letters = "";

	for (i = 0; i < remaining.length; i++){
		letters += remaining[i].toUpperCase();
	}

	document.getElementById("remainingLetters").innerHTML = letters;
}

function encrypt(){
	var message = document.getElementById("messageInput").value;
	var encryption = "";

	if (!(checkLetters()) || !(getNewAlphabet())){
		return false;
	}

	getNewAlphabet();

	var i;
	for (i = 1; i <= message.length; i++){
		var letter = message.substring(i - 1, i);
		if (letter === " "){
			encryption += " ";
		}
		else if (!(isLetter(letter))){
			encryption += letter;
		}
		else{
			var index = alphabet.indexOf(letter.toLowerCase()); //Finds the index of the orignal letter
			var newLetter = newAlphabet[index]; //Finds the encrypted letter at that index
			//Add encrypted letter to new String
			if (letter === letter.toUpperCase()){
				encryption += newLetter.toUpperCase();
			}
			else{
				encryption += newLetter;
			}
		}
	}



	document.getElementById("messageOutput").innerHTML = encryption;
	return true;
}

function decrypt(){
	var message = document.getElementById("messageInput").value;
	var encryption = "";

	if (!(checkLetters()) || !(getNewAlphabet())){
		return false;
	}

	getNewAlphabet();

	var i;
	for (i = 1; i <= message.length; i++){
		var letter = message.substring(i - 1, i);
		if (letter === " "){
			encryption += " ";
		}
		else if (!(isLetter(letter))){
			encryption += letter;
		}
		else{
			var index = newAlphabet.indexOf(letter.toLowerCase()); //Finds the index of the orignal letter
			var newLetter = alphabet[index]; //Finds the encrypted letter at that index
			//Add encrypted letter to new String
			if (letter === letter.toUpperCase()){
				encryption += newLetter.toUpperCase();
			}
			else{
				encryption += newLetter;
			}
		}
	}

	document.getElementById("messageOutput").innerHTML = encryption;
	return true;
}