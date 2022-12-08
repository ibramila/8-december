let addBtn = document.getElementById("add-button");
let clearBtn = document.getElementById("clear-button");
let message = document.getElementById("message-content");
let duration = document.getElementById("duration");
let cancelable = document.getElementById("cancelable");
let success = document.getElementById("success");
let error = document.getElementById("error");
let toasts = document.getElementById("toasts");
let innerToast = document.getElementById("innerToast");
let cancelBtn = document.querySelectorAll(".cancel-button")
// let canceltoast =document.querySelectorAll(".toast");

// const myTimeout = setTimeout(addFunction, 0);

// function myStopFunction() {
//     clearTimeout(myTimeout);
//     innerToast.innerHTML = "";
// }
// function myFunction() {
//     var x = document.getElementById("myCheck").checked;
//     document.getElementById("demo").innerHTML = x;
// }
addBtn.addEventListener("click", addFunction);
clearBtn.addEventListener("click", clearFunction);
cancelBtn.addEventListener("click", cancelFunction);



function addFunction() {
    console.log(message.value);
    if ((message.value == "") && (success.checked == true) && (cancelable.checked == true)) {
        toasts.innerHTML += `<div id="innerToast" class="toast success-toast"><p> ${"Success!"} </p> <button class="cancel-button">X</button>
         </div>`

    }
    else if ((message.value == "") && (success.checked == true) && (cancelable.checked == false)) {
        toasts.innerHTML += `<div id="innerToast" class="toast success-toast"><p> ${"Success!"} </p></div>`

    }
    else if ((message.value == "") && (error.checked == true) && (cancelable.checked == true)) {
        toasts.innerHTML += `<div id="innerToast" class="toast error-toast"><p> ${"Error!"} </p> <button class="cancel-button">X</button></div>`

    }
    else if ((message.value == "") && (error.checked == true) && (cancelable.checked == false)) {
        toasts.innerHTML += `<div id="innerToast" class="toast error-toast"><p> ${"Error!"} </p></div>`

    }
    else if ((success.checked == true) && (cancelable.checked == true)) {
        toasts.innerHTML += `<div id="innerToast" class="toast success-toast"><p> ${message.value} </p><button class="cancel-button">X</button></div>`

    }
    else if ((error.checked == true) && (cancelable.checked == false)) {
        toasts.innerHTML += `<div id="innerToast" class="toast error-toast"><p> ${message.value} </p></div>`

    }

    message.value = "";

    // const toast = document.querySelector(".toast")
    // const myTimeout = setTimeout(() => {
    //     toast.remove();

    // }, duration.value);

}

function clearFunction() {
    toasts.innerHTML = "";

}
function cancelFunction() {
    // innerToast.innerHTML="";

}