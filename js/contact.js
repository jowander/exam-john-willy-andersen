"use strict"
const form = document.querySelector("#create-account-form");
const fullNameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateForm();
});

function validateForm() {
    if (fullNameInput.value.trim() === ""){
            setError(fullNameInput, "Name can`t be less that 5")
    } else if (fullNameInput.value.trim().length <= 5){
        setError(fullNameInput, "Name min 5 characters")
    } else {
        setSuccess(fullNameInput);
    } 
    // email address
    if (emailInput.value.trim() === "") {
        setError(emailInput, "Provide email address");
    } else if (checkEmail(emailInput.value)) {
        setSuccess(emailInput);
    } else {
        setError(emailInput, "Provide valid email address");
    }
    // subject
    if (subjectInput.value.trim() === ""){
        setError(subjectInput, "Subject can`t be less that 15")
    } else if (subjectInput.value.trim().length < 15){
        setError(subjectInput, "Should be more than 15")
    } else {
        setSuccess(subjectInput);
    }
    // message
    if (messageInput.value.trim() === ""){
        setError(messageInput, "Subject can`t be less that 25")
    } else if (messageInput.value.trim().length < 25){
        setError(messageInput, "Should be more than 25")
    } else {
        setSuccess(messageInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains("success")) {
        parent.classList.remove("success");
    }
    parent.classList.add("error");
    const paragraph = parent.querySelector("p");
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains("error")) {
        parent.classList.remove("error");
    }
    parent.classList.add("success");
}

function checkEmail(email) {
    const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(email); 
}


























































// function formValidate() {
//     if (checkLength(nameInput.value < 5)) {
//         nameError.style.display = "none";
//         console.log("if here");
//     } else {
//         nameError.style.display = "block";
//         nameInput.classList.add("invalid");
//     }
    
//     if (checkLength(subjectInput.value, 15)) {
//         subjectError.style.display = "none";
//     } else {
//         subjectError.style.display = "block";
//         subjectInput.classList.add("invalid");
//     }

//     if (emailInput.value) {
//         emailError.style.display = "none";
//     } else {
//         emailError.style.display = "block";
//         emailInput.classList.add("invalid");
//     }

//     if (checkLength(messageInput.value, 25)) {
//         messageError.style.display = "none";
//     } else {
//         messageError.style.display = "block";
//         messageInput.classList.add("invalid");
//     }
// }

// formValidate();





function checkLength(value, len){
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const emailMatch = regEx.test(email);
    return emailMatch;
}



