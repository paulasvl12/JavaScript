/* algorithm intended to count the vowels in the string passed */


function checkingVowels (password) {
    if (typeof password !== "string"){
        alert("Not a string")
    }

var count = 0;
vowels = ["a", "e", "i", "o", "u"]
for (i = 0; i<password.length; i++){
    var character = password[i].toLowerCase()
    if(vowels.includes(character)){
        count++;
    }
}
return count

}