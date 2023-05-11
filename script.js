import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://realtime-database-b5195-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.querySelector("#input-field");
const addButtonEl = document.querySelector("#add-button");
const shoppingListEl = document.querySelector("#shopping-list");

addButtonEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  clearInputFieldEl();
});

onValue(shoppingListInDB, function(snapshot) {
  let shoppingArray = Object.values(snapshot.val());
  clearShoppingListEl();
  for (let i = 0; i < shoppingArray.length; i++) {
    let currentShoppingItem = shoppingArray[i];
    let inputValue = currentShoppingItem;
    appendItemToShoppingListEl(shoppingArray[i]);
  }
});

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}


function appendItemToShoppingListEl(inputValue) {
  shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}
