const vowels = ['a','e','i','o','u'];
const replaceWord =['ai','enter','imes','ober','ufat'];
function encrypt(str){
    let newWord ="";
    let indexVowel =0;
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
function decrypt(str){
    
}