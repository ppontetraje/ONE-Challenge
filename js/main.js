
/*
function encrypt(str){
    let newWord ="";
    let indexVowel =0; "asdasd"
    for (let index = 0; index < str.length; index++) {
        currentVowel = str.charAt(index);
        indexVowel = vowels.indexOf(currentVowel);

        if (indexVowel != -1){
            newWord += replaceWord[indexVowel];
        }
        else{
            newWord += currentVowel;
        }       
    }
    return newWord; 
}

*/
/*
funcion de desencriptacion
*/

const vowels2 = ['a','e','i','o','u'];
const replaceWord2 =['ai','enter','imes','ober','ufat'];

function decrypt3(desafio){

   //let desafio = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
    let arrayWords = desafio.split(" ");
    let currentWord ="";
    let newWord="";
    let indexVowel =0;
    for (let index = 0; index < arrayWords.length; index++) {
        currentWord = arrayWords[index];
        
        for (let j = 0; j < currentWord.length; j++) {
            currentVowel = currentWord.charAt(j);
            indexVowel = vowels2.indexOf(currentVowel);

            if (indexVowel != -1 ){
                console.log("slice--- " + currentWord.slice(j, j + replaceWord2[indexVowel].length));
                console.log("replace-- "+ replaceWord2[indexVowel]);
                if (currentWord.slice(j, j + replaceWord2[indexVowel].length) == replaceWord2[indexVowel]){
                    newWord += vowels2[indexVowel];
                    j += replaceWord2[indexVowel].length - 1;
                } 
                else {
                    newWord += currentVowel;
                }
            }
            else{
                newWord += currentVowel;
            }       
            
        }
        newWord += " ";
    }
    return newWord;
   
   
}