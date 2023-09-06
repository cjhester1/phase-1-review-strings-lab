// Write your code in this file!

//Learning Goals
// Concatenate strings with the + operator
// Interpolate variables and other JavaScript expressions inside template literals
// Read the MDN documentation on string methods and practice using a few

let currentUser = "Alexa"

let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!"

let excitedWelcomeMessage = welcomeMessage.toUpperCase()

const shortGreeting = `Welcome, ${currentUser.slice(0,1)} !`
//slice allows us to cut a string or slice it
//to get certain char of a string... currentUser.charAt() or "Alexa"[1]

console.log(shortGreeting)

console.log(currentUser.charAt(0))