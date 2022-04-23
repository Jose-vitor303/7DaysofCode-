const emailInput = document.getElementsByClassName("input")[0];
const sendButton = document.getElementsByClassName("button")[0];
const menuButton = document.getElementsByClassName("menu__button")[0];


console.log(menuButton);

sendButton.addEventListener("click", ()=>{


    localStorage.setItem("email", emailInput.value);

})