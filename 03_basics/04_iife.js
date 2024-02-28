// Immediately Invoked Function Expressions(IIFE)

//named IIFE
(function one(){
    console.log(`DB connected`)
})();

//Unnamed IIFE
((name) => {
    console.log(`DB connected TWO ${name}`)
})('Shuvo');