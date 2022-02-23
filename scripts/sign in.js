let nameImg = document.getElementById("logo-img");
nameImg.addEventListener("click", () => {
    window.location.href = "index.html"
});

// goto Regitration page Btn
function register() {
    window.location.href = "register.html"
}

// sign in working part begin here
let usersData = JSON.parse(localStorage.getItem("UsersData")) || [];

function signInBtn() {

    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;

    let errInputEmail = document.querySelector(".errInputEmail");
    let errInputPass = document.querySelector(".errInputPass");

    if (Email == "" && Password == "") {
        errInputEmail.style.display = "inline-block"
        errInputPass.style.display = "inline-block"
    }
    else if (Email == "") {
        errInputEmail.style.display = "inline-block"
        errInputPass.style.display = "none"

    }
    else if (Password == "") {
        errInputEmail.style.display = "none";
        errInputPass.style.display = "inline-block"
    }
    else {
        errInputEmail.style.display = "none";
        errInputPass.style.display = "none";

        for (var i = 0; i < usersData.length; i++) {
            if (usersData[i].Email === Email && usersData[i].Password === Password) {
                alert("login successful");
                window.location.href = "index.html";
                break;
            }
        }

    }

}
// end here


