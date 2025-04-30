
function countVowels(str) {
    if(typeof str !== 'string')
        return 0;
    const vowels = "aeiouAEIOU";
    let count = 0

    for (let char of str) {
        if (vowels.includes(char)) {
            count ++;
        }
    }
    return count; 
}


//console.log(countVowels("Darren"));
//console.log(countVowels("12345sixseven"));
//console.log(countVowels("Mississippi"));
//console.log(countVowels(12345));

module.exports = {countVowels};