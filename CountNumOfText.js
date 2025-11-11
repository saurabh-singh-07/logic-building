// Count the number of sentences in a given text

function CountSentences(InputTexts){
    InputTexts = InputTexts.trim();
    let splittedSentences = InputTexts.split(' ');
    
    const nonEmptySentences = splittedSentences.filter((element) => element !== "");
    return nonEmptySentences.length;
}
let Text = CountSentences("Hello,      how are you");
console.log(Text);