let nameImg = document.getElementById("logo-img");
nameImg.addEventListener("click", () => {
    window.location.href = "index.html";
});

// adding hyper link for sign in page
function signInpage() {
    window.location.href = "sign in.html";
}

// a register calling function starting here

let dataArr = [];

function registerBtn() {
    let UserName = document.getElementById("UserName").value;
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    let ReEnterPass = document.getElementById("rePass").value;

    let appendErrDiv = document.querySelector(".appendErr");
    if (UserName == "" || Email == "" || Password == "" || ReEnterPass == "") {
        appendErrDiv.innerHTML = "";
        if (UserName == "") {
            let li1 = document.createElement("li");
            li1.innerHTML = "Enter your name"; 
            appendErrDiv.append(li1);
            document.querySelector(".errHide").style.display = "grid";
        }
        if (Email == "") {
            let li2 = document.createElement("li");
            li2.innerHTML = "Enter your email";
            appendErrDiv.append(li2);
            document.querySelector(".errHide").style.display = "grid";
        }
        if (Password == "" || ReEnterPass == "") {
            let li3 = document.createElement("li");
            li3.innerHTML = "Enter your password";
            appendErrDiv.append(li3);
            document.querySelector(".errHide").style.display = "grid";
        }
    } else if (Password.length >= 6 && ReEnterPass.length >= 6) {
        if (Password === ReEnterPass) {
            document.querySelector(".errHide").style.display = "none";

            let usersDataObj = {
                UserName: UserName,
                Email: Email,
                Password: Password,
            }
            dataArr.push(usersDataObj);
            console.log(dataArr);
            localStorage.setItem("UsersData", JSON.stringify(dataArr));
            alert("Registration Succesfully!!");

        }
        else {
            appendErrDiv.innerHTML = "";
            let li4 = document.createElement("li");
            li4.innerHTML = "Passwords not matching";
            appendErrDiv.append(li4);
            document.querySelector(".errHide").style.display = "grid";
        }
    }
    else {
        appendErrDiv.innerHTML = "";
        let li5 = document.createElement("li");
        li5.innerHTML = "Passwords must be at least 6 characters.";
        appendErrDiv.append(li5);
        document.querySelector(".errHide").style.display = "grid";
    }
}
//  ending here
