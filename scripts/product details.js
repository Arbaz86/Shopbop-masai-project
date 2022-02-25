function goToSignInPage() {
    window.location.href = "sign in.html";
};
function goToRegisterPage() {
    window.location.href = "register.html";
};
function gotoCartPage() {
    window.location.href = "cart.html";
};
function navImgLink() {
    window.location.href = "index.html";
};


// here the local storage data append to html
let itemsData = JSON.parse(localStorage.getItem("items-term")) || [];

let headTitle = document.querySelector("title");
headTitle.innerHTML = itemsData.title;

let prodImg = document.getElementById("prodImg");
prodImg.src = itemsData.itemImg
let BrandName = document.querySelector(".BrandName");
BrandName.innerHTML = itemsData.title;
let prodTitle = document.querySelector(".prodTitle");
prodTitle.innerHTML = itemsData.type;
let prodPrice = document.querySelector(".prodPrice");
prodPrice.innerHTML = "$" + itemsData.price;

console.log(itemsData);
// end here 


// the size button part begin here 
let ClickBtn1 = document.querySelector(".sizeClickBtn1");
let ClickBtn2 = document.querySelector(".sizeClickBtn2");
let ClickBtn3 = document.querySelector(".sizeClickBtn3");
let ClickBtn4 = document.querySelector(".sizeClickBtn4");


function colorChangeBtn1() {

    ClickBtn1.style.backgroundColor = "#000";
    ClickBtn1.style.color = "#fff";

    ClickBtn2.style.backgroundColor = "#fff";
    ClickBtn2.style.color = "#000";

    ClickBtn3.style.backgroundColor = "#fff";
    ClickBtn3.style.color = "#000";

    ClickBtn4.style.backgroundColor = "#fff";
    ClickBtn4.style.color = "#000";

}
function colorChangeBtn2() {

    ClickBtn1.style.backgroundColor = "#fff";
    ClickBtn1.style.color = "#000";

    ClickBtn2.style.backgroundColor = "#000";
    ClickBtn2.style.color = "#fff";

    ClickBtn3.style.backgroundColor = "#fff";
    ClickBtn3.style.color = "#000";

    ClickBtn4.style.backgroundColor = "#fff";
    ClickBtn4.style.color = "#000";

}
function colorChangeBtn3() {

    ClickBtn1.style.backgroundColor = "#fff";
    ClickBtn1.style.color = "#000";

    ClickBtn2.style.backgroundColor = "#fff";
    ClickBtn2.style.color = "#000";

    ClickBtn3.style.backgroundColor = "#000";
    ClickBtn3.style.color = "#fff";

    ClickBtn4.style.backgroundColor = "#fff";
    ClickBtn4.style.color = "#000";

}
function colorChangeBtn4() {

    ClickBtn1.style.backgroundColor = "#fff";
    ClickBtn1.style.color = "#000";

    ClickBtn2.style.backgroundColor = "#fff";
    ClickBtn2.style.color = "#000";

    ClickBtn3.style.backgroundColor = "#fff";
    ClickBtn3.style.color = "#000";

    ClickBtn4.style.backgroundColor = "#000";
    ClickBtn4.style.color = "#fff";

}

// end here 




let cartData = [];
function DataAddToCart() {
    let cartProductCount = document.getElementById("count");

    alert("You have added this item to your cart!")
    cartData.push(JSON.parse(localStorage.getItem("items-term")));

    cartProductCount.innerHTML = cartData.length;

    localStorage.setItem("cartProductData", JSON.stringify(cartData))

}