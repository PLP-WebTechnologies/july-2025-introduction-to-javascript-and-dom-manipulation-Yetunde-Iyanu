// Part 1: Variable Declarations and Conditionals
let userName = "Yetunde";
let userAge = 20;
let isStudent = true;

// Conditional Example
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}


// Part 2: Custom Functions
// Function 1: Check Age
function checkAge(age) {
  if (age >= 18) {
    return "You are an adult.";
  } else {
    return "You are a minor.";
  }
}


// Part 3: Loops Examples
// Loop 1: For loop
let colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color: " + colors[i]);
}

// Loop 2: While loop
let count = 1;
while (count <= 3) {
  console.log("Count is: " + count);
  count++;
}


// Part 4: DOM Interactions
// 1. Display greeting message
document.getElementById("greeting").textContent = "Hello, " + userName + "Welcome to the project.";

// 2. Add event listener for age check
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  document.getElementById("result").textContent = checkAge(userAge);
});

// 3. Add event listener for generating numbers
document.getElementById("generateNumbersBtn").addEventListener("click", function() {
  document.getElementById("result").textContent = "Numbers: " + generateNumbers(10);
});

// 4. Add event listener to display colors using loop
document.getElementById("showColorsBtn").addEventListener("click", function() {
  let output = "";
  for (let color of colors) {
    output += color + " ";
  }
  document.getElementById("loop-output").textContent = "Colors: " + output;
});
