// Imediately Invoked Function Expressions (IIFE)

   // named IIFE
   (function name(){
    console.log("Vikram")
   })(); // Vikram

   //unnamed IIFE
   (function (){
    console.log("Vikram")
   })(); // Vikram


   // with arrow function
   (() => {
    console.log("Vikram")
   })(); // Vikram

   // ex
   ((name) => {
    console.log(`My name is ${name}`)
   })("Vikram SIngh"); // My name is Vikram SIngh


