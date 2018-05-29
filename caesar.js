var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var newAlphabet = alphabet; //Shifted alphabet
var save = 0; //Saves the last inputted shift amount

/*Encrypts cipher with the selected shift amount*/
function encrypt(){
	var message = document.getElementById("messageInput").value;
	var encryption = "";
	var amount = document.getElementById("offset").value;
	
	console.log("amount: " + amount);

	if (amount === 0 || amount === null || amount === undefined || amount === "" || amount === " "){
		newAlphabet = alphabet;
	}
	else{
		shiftAlphabet();
	}

	var i;
	for (i = 1; i <= message.length; i++){
		var letter = message.substring(i - 1, i);
		if (letter === " "){
			encryption += " ";
		}
		else if (!(isLetter(letter))){
			encryption += letter;
		}
		else if (isNaN(amount)){
			alert("Please use positive numbers only");
			return;
		}
		else{
			console.log("newAlph: " + newAlphabet);
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
	document.getElementById("messageOutput").innerHTML = "Output: " + encryption;
}

/*Decrypts cipher with the selected shift amount*/
function decrypt(){
	var message = document.getElementById("messageInput").value;
	var encryption = "";
	var amount = document.getElementById("offset").value;

	shiftAlphabet();

	var i;
	for (i = 1; i <= message.length; i++){
		var letter = message.substring(i - 1, i);
		if (letter === " "){
			encryption += " ";
		}
		else if (!(isLetter(letter))){
			encryption += letter;
		}
		else if (isNaN(amount)){
			alert("Please use positive numbers only");
			return;
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
	document.getElementById("messageOutput").innerHTML = "Output: " + encryption;
}

/*Makes a new shifted alphabet depending on inputted offset number*/
function shiftAlphabet(){
	var offset = document.getElementById("offset").value;
	newAlphabet = new Array(26);

	if (offset > 26){
		offset = offset % 26;
	}

	var shift = offset;

	var i = 0;
	while (true){
		if (shift >= 26){
			shift = 0;

			while (true){
				if (shift == offset){
					break;
				}

				newAlphabet[i] = alphabet[shift];
				shift++;
				i++;
			}
			break;
		}
		newAlphabet[i] = alphabet[shift];
		shift++;
		i++
	}

	console.log("New alphabet is " + newAlphabet);
}

function isLetter(c) {
	if (alphabet.includes(c.toLowerCase())){
		return true;
	}
	return false;
}

function checkOffset() {
	var amount = document.getElementById("offset").value;

	console.log("amount: " + amount);

	if (amount <= 0){
		return false;
	}

	return true;
}