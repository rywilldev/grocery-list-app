/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
let inputEl = document.querySelector("#input-field");
let inputValue = inputEl.value;
let inputBtn = document.querySelector("#add-button");

inputBtn.addEventListener("click", function() {
    inputValue = inputEl.value;
    console.log(inputValue);
})