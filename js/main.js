var button = document.querySelector(".button__encrypt");
button.onclick = encrypt;

var button2 = document.querySelector(".button__decrypt3");
var textToDecrypt = document.querySelector(".output__text_decrypt").value;
button2.onclick = decrypt;

var button3= document.querySelector(".button__copiar");
button3.onclick = copiar;

function copiar(){
    var text = document.querySelector(".output__text_decrypt").value;
    navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
console.error('Async: Could not copy text: ', err);
});

}

function noOutput() {
    let decrypt = document.querySelector(".output__text_decrypt").value;
    console.log(decrypt.length);
    if (decrypt.length != 0) {
        document.getElementById("no__output").style.display = "none";
        console.log("No entro");
        document.getElementById("text__decrypted").style.display = "initial";
    } else {
        document.getElementById("no__output").style.display = "block";
        console.log("si entro");
        document.getElementById("text__decrypted").style.display = "none";
    }
}


const vowels = ['a', 'e', 'i', 'o', 'u'];
const replaceWord = ['ai', 'enter', 'imes', 'ober', 'ufat'];

function encrypt() {
    let newWord = "";
    let indexVowel = 0;
    let str = document.querySelector(".input__text_encrypt").value;

    for (let index = 0; index < str.length; index++) {
        currentVowel = str.charAt(index);
        indexVowel = vowels.indexOf(currentVowel);

        if (indexVowel != -1) {
            newWord += replaceWord[indexVowel];
        }
        else {
            newWord += currentVowel;
        }
    }
    var output = document.querySelector(".output__text_decrypt");
    output.value = newWord;
    noOutput();
}

function decrypt() {
    let desafio = document.querySelector(".input__text_encrypt").value;
    let arrayWords = desafio.split(" ");
    let currentWord = "";
    let newWord = "";
    let indexVowel = 0;
    for (let index = 0; index < arrayWords.length; index++) {
        currentWord = arrayWords[index];

        for (let j = 0; j < currentWord.length; j++) {
            currentVowel = currentWord.charAt(j);
            indexVowel = vowels.indexOf(currentVowel);

            if (indexVowel != -1) {
                if (currentWord.slice(j, j + replaceWord[indexVowel].length) == replaceWord[indexVowel]) {
                    newWord += vowels[indexVowel];
                    j += replaceWord[indexVowel].length - 1;
                }
                else {
                    newWord += currentVowel;
                }
            }
            else {
                newWord += currentVowel;
            }

        }

        if(index == arrayWords.length-1){
            newWord += "";
        }else{
            newWord += " ";
        }
    }
    var output = document.querySelector(".output__text_decrypt");
    output.value = newWord;
    noOutput();
}