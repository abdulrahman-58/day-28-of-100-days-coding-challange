// Assalamualaikum @everyone 👋
// 🚀 Day 28 Challenge: Start Coding! 🚀
// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function stringLength(str) {
    return str.length;
}
console.log(stringLength("Pakistan"));
console.log("\n");
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function convertCase(str) {
    var upperStr = str.toUpperCase();
    var lowerStr = str.toLowerCase();
    console.log("Uppercase: ", upperStr);
    console.log("Lowercase: ", lowerStr);
}
convertCase("Hey Dear!");
console.log("\n");
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and I am coding in in JavaScript."));
