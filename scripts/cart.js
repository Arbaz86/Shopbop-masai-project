function goToSignInPage() {
  window.location.href = "sign in.html";
}
function goToRegisterPage() {
  window.location.href = "register.html";
}
function navImgLink() {
  window.location.href = "index.html";
}
function gotoCartPage() {
    window.location.href = "cart.html";
};
function thanksForShop(){
    alert("Thank You For Shop!!!");
}



let cartData = JSON.parse(localStorage.getItem("cartProductData"));
let mainAppendDiv = document.querySelector(".mainProdcartDataDiv");

cartData.forEach((element) => {

    console.log(element);


  let div = document.createElement("div");
  div.className = "mainProdCartimg";

  let cartImg = document.createElement("div");
  cartImg.id = "imgcartprod";
  cartImg.src = element.itemImg;

  let textDiv = document.createElement("div");
  textDiv.className = "rpodDtailesDiv";

  let brandname = document.createElement("div");
  brandname.className = "brandname";
  brandname.innerHTML = element.title;

  let brandtitle = document.createElement("div");
  brandtitle.className = "brandtitle";
  brandtitle.innerHTML = element.type;

  let brandprice = document.createElement("div");
  brandprice.className = "brandprice";
  brandprice.innerHTML = element.price;


  textDiv.append(brandname,brandtitle,brandprice);

  div.append(cartImg,textDiv);

  mainAppendDiv.append(div);
});
