let addBtn = document.getElementById("add-button");
let clearBtn = document.getElementById("clear-button");
let message = document.getElementById("message-content");
let duration = document.getElementById("duration");
let cancelable = document.getElementById("cancelable");
let success = document.getElementById("success");
let error = document.getElementById("error");
let toasts = document.getElementById("toasts");
let innerToast = document.getElementById("innerToast");
// let cancelBtn = document.querySelectorAll(".cancel-button")

addBtn.addEventListener("click", addFunction);
clearBtn.addEventListener("click", clearFunction);
// button.addEventListener("click", cancelFunction);

function addFunction() {
    const toast = document.createElement("div");
    toast.classList.add("toast")
    const testMsg = document.createElement("p");
    toast.appendChild(testMsg);
    toasts.appendChild(toast);

    if (success.checked) {
        testMsg.innerText = "success"
        toast.classList.add("success-toast");
    } else {
        testMsg.innerText = "error"
        toast.classList.add("error-toast");
    }

    if (message.value) {
        testMsg.innerText = `${message.value}`

    }

    if (cancelable.checked) {
        const button = document.createElement("button");
        button.innerText = "x";
        toast.appendChild(button);
        // button.onclick = function myfunc(e) {
        //   toast.remove();
        // }
    }

    if ((duration.value == "") && (duration.value < 500) && duration.value.isNaN) {
        setTimeout(() => {
            toast.remove()
        }, 500)
    } else {
        setTimeout(() => {
            toast.remove();
        }, duration.value)
    }

    message.value = "";

}


function clearFunction() {
    toasts.innerHTML = "";

}