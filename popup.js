import { createBox, appendToDoItem } from "./content.js";

let todos = [];
let inputField = document.getElementById("typing-effect"); // retrieves the input field
const catImages = [
  "imgs/catwithtextshort.png",
  "imgs/catwithtextsecond.png", 
]
const catImage = document.querySelector("#catpic img"); // Select the cat image element
let currentImageIndex = 0; // To keep track of the current image index

function changeCatImage() {
  currentImageIndex = (currentImageIndex + 1) % catImages.length; // Cycle through the images
  catImage.src = catImages[currentImageIndex];
}

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const userinput = inputField.value.trim(); // retrieves the user input

    if (userinput !== "") { 
      if (todos.length == 0) { 
        createBox(); // renders the user input
      } 
      todos.push(userinput); // adds the user input to the todos array (internal)
      appendToDoItem(userinput); // renders the user input
      changeCatImage();
      inputField.value = ""; // clears the input field
      inputField.setAttribute("placeholder", "What's next?"); 
    }
  }
});