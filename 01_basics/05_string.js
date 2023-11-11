const name = "vikram"
const repoCount = 16

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('VikramSingh');
console.log(gameName) // [String: 'VikramSingh']
console.log(gameName[0]) // V
console.log(gameName.length) // 11
console.log(gameName.toLowerCase()) // vikramsingh
console.log(gameName.toUpperCase()) // VIKRAMSINGH
console.log(gameName.charAt(6)) // S
console.log(gameName.indexOf('S')) // 6


console.log(gameName.substring(0,4)) // Vikr

console.log(gameName.slice(0,4)) // Vikr
console.log(gameName.slice(-10,4)) // ikr

const name1 = "   Vikram Singh  "
console.log(name1.trim()) // Vikram Singh remove starting and ending space


const url = "https://vikram.com/vikram%20singh"
console.log(url.replace('%20', '-')) // https://vikram.com/vikram-singh  replace %20 from (-)


console.log(url.includes('singh')) // true


const name2 = "Vikram-Singh-Com"
console.log(name2.split('-'))