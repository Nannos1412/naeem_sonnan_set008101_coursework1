var alphabet = 	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var newAlphabet = ["z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"]

/*Encrypts cipher with the selected shift amount*/
function encrypt(){
	var message = document.getElementById("messageInput").value;
	var encryption = "";

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
	document.getElementById("messageOutput").innerHTML = encryption;
}

function isLetter(c) {
	if (alphabet.includes(c.toLowerCase())){
		return true;
	}
	return false;
}