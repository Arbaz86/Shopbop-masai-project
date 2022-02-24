function navbar(){
    return `<div class="logo-nav-link">
    <img
      src="https://m.media-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/media/3/images/logos/rebrand_shopbop_logo_2x_1-3.png"
      id="link-logo" onclick="navImgLink()" alt="There must be a problem with the server image not being
              automatically uploaded" />
  </div>
  <div class="nav-bar-section">
    <ul class="ul-navbar">
      <li class="Wnew samePrrodList"><span>WHAT'S NEW</span></li>
      <li class="Ofav samePrrodList"><span>OUR FAVORITES</span></li>
      <li class="Desig samePrrodList"><span>DESIGNERS</span></li>
      <li class="Clot samePrrodList"><span>CLOTHING</span></li>
      <li class="Acti samePrrodList"><span>ACTIVE</span></li>
      <li class="Shoes samePrrodList"><span>SHOES</span></li>
      <li class="Bags samePrrodList"><span>BAGS</span></li>
      <li class="Acce samePrrodList"><span>ACCESSORIES</span></li>
      <li class="Men samePrrodList"><span>MEN</span></li>
      <li class="Sale samePrrodList"><span>SALE</span></li>
      <button id="search-icon"><i class="fa fa-search"></i></button>
    </ul>
  </div>`;
}

export default navbar;