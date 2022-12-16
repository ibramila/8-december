//!email side
const userEmail = document.querySelector("#userEmail");

//!password side
const password_strength = document.querySelector("#password");
const lock = document.querySelector(".fa-lock");
const unlock = document.querySelector(".fa-lock-open");

//!submit button
const submit = document.querySelector("#submit");
const register = localStorage.getItem("register") === null ? [] : JSON.parse(localStorage.getItem("register"))
const blur = document.querySelector(".bg-image");

lock.addEventListener("click", lockFunc)
unlock.addEventListener("click", unlockFunc);
submit.addEventListener("click", submitFunc);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    register.push({
        Email: userEmail.value,
        Password: password_strength.value,
    })

    localStorage.setItem("register", JSON.stringify(register));
    window.location.reload()
    ClearInput(e)
})

const ClearInput = (e) => {
    e.target.reset();
}
var myBool = false;

function isGood(password) {
    var password_strength = document.getElementById("password-text");
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    var regex = new Array();
    regex.push("[A-Z]");
    regex.push("[a-z]");
    regex.push("[0-9]");
    regex.push("[$@$!%*#?&]");

    var passed = 0;


    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    var strength = "";
    switch (passed) {
        case 0:
        case 1:
        case 2:
            strength = "<small class='progress-bar bg-danger' style='width: 40%; background-color:red; padding: 0 10%;'>Weak</small>";
            blur.style.filter = "blur(15px)";
            myBool = false;
            break;
        case 3:
            strength = "<small class='progress-bar bg-warning' style='width: 60%; background-color:yellow; padding:0 23%'>Medium</small>";
            blur.style.filter = "blur(8px)";
            myBool = false;
            break;
        case 4:
            strength = "<small class='progress-bar bg-success' style='width: 100%; background-color:green; padding:0 46%'>Strong</small>";
            blur.style.filter = "blur(0)"
            myBool = true;
            break;
    }
    password_strength.innerHTML = strength;

}

function lockFunc() {
    password_strength.type = "text";
    lock.style.display = "none"
    unlock.style.display = "block";
}
function unlockFunc() {
    password_strength.type = "password"
    unlock.style.display = "none"
    lock.style.display = "block";
}
function submitFunc() {
    if (userEmail.value.trim() == 0) {
        alert("Please full of email")
    };
    if (myBool == true) {
        alert("congratulations!!!");
    }
    else {
        alert("Please again");
    }
}
