function topbar() {
   return `<!-- this part starting for top left bar -->
    <div class="utility-container">

       <div class="contry">
          <i class="fa fa-map-marker" style="font-size:18px"></i>
          <label for="BO">BO</label>
          <select id="BO" class="border-hide"></select>
       </div>

       <div class="Languages">
          <label for="EN">EN</label>
          <select id="EN" class="border-hide"></select>
       </div>

       <div class="currency">
          <label for="USD">$USD</label>
          <select id="USD" class="border-hide"></select>
       </div>
    </div>

    <div class="promo-text">
       <div class="prom-text-here">
          FREE express international delivery + EASY returns
       </div>
    </div>
    <div class="account-info-container">
       <label for="SignReg" class="cursor-pointer"><span onclick="goToSignInPage()">Sign In</span> / <span onclick="goToRegisterPage()">Register</span></label>
       <select id="SignReg" class="border-hide"></select>
       <i class="fa fa-heart" class="favlist" style="font-size:22px; color:rgb(250, 169, 103)"></i>
       <div class="cart-icon-and-count">
          <div class="cart-img-div">
             <img src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/_global/images/topnav/bag_1-0.png" width="46%" alt="cart-icon-image">
          </div>
          <div class="cart-count">
             <span id="count">0</span>
          </div>

       </div>
    </div>`
}
export default topbar;