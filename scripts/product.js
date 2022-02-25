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
}

// products data appending part begin here

// array objec data creating begin here

let productsData20 = [
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ragbo/ragbo4587610328/ragbo4587610328_1645215598895_2-0._QL90_UX207_.jpg",
        title: "Reg & Bone",
        type: "Liana Cardigan",
        price: "359.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mothr/mothr215131733b/mothr215131733b_1645465122812_2-0._QL90_UX207_.jpg",
        title: "MOTHER",
        type: "High Waisterd Rider Ank...",
        price: "198.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/loeff/loeff4191214a9b/loeff4191214a9b_1645222764978_2-0._QL90_UX207_.jpg",
        title: "Loeffler Randall",
        type: "Willa Bag",
        price: "295.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rebec/rebec426021af4f/rebec426021af4f_1645216369565_2-0._QL90_UX207_.jpg",
        title: "Redecca Taylor",
        type: "Popover Dress",
        price: "265.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ismdb/ismdb308411c5f0/ismdb308411c5f0_1645223941168_2-0._QL90_UX207_.jpg",
        title: "Lsabel Marant",
        type: "Elham Sandals",
        price: "790.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rebec/rebec426061d360/rebec426061d360_1645459846835_2-0._QL90_UX207_.jpg",
        title: "Rebecca Taylor",
        type: "Poplin Jumpsuit",
        price: "395.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/gamer/gamer304431d3ca/gamer304431d3ca_1645464383960_2-0._QL90_UX207_.jpg",
        title: "Good American",
        type: "Modern Tank Thong Bodysuit.",
        price: "65.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/vince/vince515271d49b/vince515271d49b_1645221902427_2-0._QL90_UX207_.jpg",
        title: "Vince",
        type: "sculptural Panama Shorts",
        price: "275.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rebec/rebec4260433159/rebec4260433159_1645216382268_2-0._QL90_UX207_.jpg",
        title: "Rebecca Tylor",
        type: "LongSleeve Dress",
        price: "295.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mirem/mirem3020211739/mirem3020211739_1645460279658_2-0._QL90_UX207_.jpg",
        title: "Maison Iren",
        type: "Necklace Cortona",
        price: "170.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jcque/jcque308281c5f0/jcque308281c5f0_1645463380121_2-0._QL90_UX207_.jpg",
        title: "Jacquemus",
        type: "Le Jacquemus T-Shirt",
        price: "140.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ragbo/ragbo459051c5f0/ragbo459051c5f0_1641934868261_2-0._QL90_UX207_.jpg",
        title: "Rag & Bone",
        type: "Roxie Leggings",
        price: "225.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cesbe/cesbe300631c925/cesbe300631c925_1639683175067_2-0._QL90_UX207_.jpg",
        title: "Christopher Esber",
        type: "Bandeau Crop Shirt",
        price: "420.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prosh/prosh205271d22e/prosh205271d22e_1645465897005_2-0._QL90_UX207_.jpg",
        title: "Proenza Schouler",
        type: "Zebra Cotton Jacquard Skit",
        price: "890.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rvall/rvall3007811209/rvall3007811209_1635960120967_2-0._QL90_UX207_.jpg",
        title: "Rebecca Vallance",
        type: "Positano Bow Mini Dress",
        price: "455.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rosdb/rosdb30051102ca/rosdb30051102ca_1640190173550_2-0._QL90_UX207_.jpg",
        title: "Rosie Assoulin",
        type: "Rough-Led Around The Edges Top",
        price: "695.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/slvrl/slvrl301291d325/slvrl301291d325_1643231175139_2-0._QL90_UX207_.jpg",
        title: "SLVRLAKE",
        type: "London Jeans",
        price: "329.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/azeez/azeez3007912530/azeez3007912530_1632776276569_2-0._QL90_UX207_.jpg",
        title: "Azeeza",
        type: "Thistle Top",
        price: "495.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/slvrl/slvrl300181729f/slvrl300181729f_q1_2-0._QL90_UX207_.jpg",
        title: "SLVRLAKE",
        type: "Virginia Slim Jeans",
        price: "299.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jkwon/jkwon3003415065/jkwon3003415065_q1_2-0._QL90_UX173_.jpg",
        title: "Jennie Kwon Designs",
        type: "14k Rectangle Diamond...",
        price: "498.00",
    },

];
// end here


// direct products data appended here 

let productsUl_div = document.querySelector(".products-ul");
let countItems = document.querySelector(".countItems");
let view20itemsBtn = document.getElementById("view20items");
let view45itemsBtn = document.getElementById("view45items");


appendData(productsData20);


function appendData(productsData20) {
    productsUl_div.innerHTML = "";
    productsData20.forEach(element => {

        let li = document.createElement("li");
        li.className = "products-li";
        li.addEventListener("click", () => {
            console.log(element);
            localStorage.setItem("items-term", JSON.stringify(element));
            window.location.href = "product details.html";

        });

        let image = document.createElement("img")
        image.className = "product-img";
        image.src = element.itemImg;

        let textDiv = document.createElement("div");
        textDiv.className = "prodInfoDiv";

        let title = document.createElement("div");
        title.className = "prodtiteletxt";
        title.innerHTML = element.title

        let type = document.createElement("div");
        type.className = "prodtypetxt";
        type.innerHTML = element.type;

        let price = document.createElement("div");
        price.className = "prodpricetxt";
        price.innerHTML = element.price;

        textDiv.append(title, type, price);

        li.append(image, textDiv);

        productsUl_div.append(li);
    });

}
// end here 


function show20Data() {
    countItems.innerHTML = "20 items";
    appendData(productsData20);

    view20itemsBtn.style.textDecoration = "underline";
    view20itemsBtn.style.fontWeight = "700";

    view45itemsBtn.style.textDecoration = "none";
    view45itemsBtn.style.fontWeight = "500";


    function appendData(productsData20) {
        productsUl_div.innerHTML = "";
        productsData20.forEach(element => {


            let li = document.createElement("li");
            li.className = "products-li";
            li.addEventListener("click", () => {
                console.log(element);
                localStorage.setItem("items-term", JSON.stringify(element));
                window.location.href = "product details.html";

            });

            let image = document.createElement("img")
            image.className = "product-img";
            image.src = element.itemImg;

            let textDiv = document.createElement("div");
            textDiv.className = "prodInfoDiv";

            let title = document.createElement("div");
            title.className = "prodtiteletxt";
            title.innerHTML = element.title

            let type = document.createElement("div");
            type.className = "prodtypetxt";
            type.innerHTML = element.type;

            let price = document.createElement("div");
            price.className = "prodpricetxt";
            price.innerHTML = element.price;

            textDiv.append(title, type, price);

            li.append(image, textDiv);

            productsUl_div.append(li);
        });

    }

}


// array objec data 45 creating begin here

let productsData40 = [
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ajeee/ajeee301571071b/ajeee301571071b_1642541994684_2-0._QL90_UX173_.jpg",
        title: "Aje",
        type: "Promenade Woven Bucket Chain Bag",
        price: "245.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/marah/marah419041a561/marah419041a561_1644960906909_2-0._QL90_UX173_.jpg",
        title: "MARA HOFFMAN",
        type: "Tiffany Organic Dress",
        price: "325.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cdlam/cdlam314821bf28/cdlam314821bf28_1644962249493_2-0._QL90_UX173_.jpg",
        title: "Derek Lam 10 Crosby",
        type: "Colette Dress",
        price: "395.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ismdb/ismdb308331071b/ismdb308331071b_1641325957728_2-0._QL90_UX173_.jpg",
        title: "Isabel Marant",
        type: "Lennyo Sandals",
        price: "580.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/slvrl/slvrl301291d325/slvrl301291d325_1643231175139_2-0._QL90_UX173_.jpg",
        title: "SLVRLAKE",
        type: "London Jeans",
        price: "329.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ragbo/ragbo4587610328/ragbo4587610328_1645215598895_2-0._QL90_UX207_.jpg",
        title: "Reg & Bone",
        type: "Liana Cardigan",
        price: "359.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mothr/mothr215131733b/mothr215131733b_1645465122812_2-0._QL90_UX207_.jpg",
        title: "MOTHER",
        type: "High Waisterd Rider Ank...",
        price: "198.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/loeff/loeff4191214a9b/loeff4191214a9b_1645222764978_2-0._QL90_UX207_.jpg",
        title: "Loeffler Randall",
        type: "Willa Bag",
        price: "295.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rebec/rebec426021af4f/rebec426021af4f_1645216369565_2-0._QL90_UX207_.jpg",
        title: "Redecca Taylor",
        type: "Popover Dress",
        price: "265.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ismdb/ismdb308411c5f0/ismdb308411c5f0_1645223941168_2-0._QL90_UX207_.jpg",
        title: "Lsabel Marant",
        type: "Elham Sandals",
        price: "790.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rebec/rebec426061d360/rebec426061d360_1645459846835_2-0._QL90_UX207_.jpg",
        title: "Rebecca Taylor",
        type: "Poplin Jumpsuit",
        price: "395.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/gamer/gamer304431d3ca/gamer304431d3ca_1645464383960_2-0._QL90_UX207_.jpg",
        title: "Good American",
        type: "Modern Tank Thong Bodysuit.",
        price: "65.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/vince/vince515271d49b/vince515271d49b_1645221902427_2-0._QL90_UX207_.jpg",
        title: "Vince",
        type: "sculptural Panama Shorts",
        price: "275.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rebec/rebec4260433159/rebec4260433159_1645216382268_2-0._QL90_UX207_.jpg",
        title: "Rebecca Tylor",
        type: "LongSleeve Dress",
        price: "295.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/mirem/mirem3020211739/mirem3020211739_1645460279658_2-0._QL90_UX207_.jpg",
        title: "Maison Iren",
        type: "Necklace Cortona",
        price: "170.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jcque/jcque308281c5f0/jcque308281c5f0_1645463380121_2-0._QL90_UX207_.jpg",
        title: "Jacquemus",
        type: "Le Jacquemus T-Shirt",
        price: "140.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ragbo/ragbo459051c5f0/ragbo459051c5f0_1641934868261_2-0._QL90_UX207_.jpg",
        title: "Rag & Bone",
        type: "Roxie Leggings",
        price: "225.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cesbe/cesbe300631c925/cesbe300631c925_1639683175067_2-0._QL90_UX207_.jpg",
        title: "Christopher Esber",
        type: "Bandeau Crop Shirt",
        price: "420.00",
    },
    {
        itemImg:
            "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/prosh/prosh205271d22e/prosh205271d22e_1645465897005_2-0._QL90_UX207_.jpg",
        title: "Proenza Schouler",
        type: "Zebra Cotton Jacquard Skit",
        price: "890.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rvall/rvall3007811209/rvall3007811209_1635960120967_2-0._QL90_UX207_.jpg",
        title: "Rebecca Vallance",
        type: "Positano Bow Mini Dress",
        price: "455.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rosdb/rosdb30051102ca/rosdb30051102ca_1640190173550_2-0._QL90_UX207_.jpg",
        title: "Rosie Assoulin",
        type: "Rough-Led Around The Edges Top",
        price: "695.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/slvrl/slvrl301291d325/slvrl301291d325_1643231175139_2-0._QL90_UX207_.jpg",
        title: "SLVRLAKE",
        type: "London Jeans",
        price: "329.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/azeez/azeez3007912530/azeez3007912530_1632776276569_2-0._QL90_UX207_.jpg",
        title: "Azeeza",
        type: "Thistle Top",
        price: "495.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/slvrl/slvrl300181729f/slvrl300181729f_q1_2-0._QL90_UX207_.jpg",
        title: "SLVRLAKE",
        type: "Virginia Slim Jeans",
        price: "299.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jkwon/jkwon3003415065/jkwon3003415065_q1_2-0._QL90_UX173_.jpg",
        title: "Jennie Kwon Designs",
        type: "14k Rectangle Diamond...",
        price: "498.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jorti/jorti301061ca35/jorti301061ca35_1640106188643_2-0._QL90_UX173_.jpg",
        title: "Johanna Ortiz",
        type: "Shells At Dusk Midi Dress",
        price: "750.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/alice/alice4646410cd7/alice4646410cd7_1641500579225_2-0._QL90_UX173_.jpg",
        title: "alice + olivia",
        type: "Vegan Leather Puff...",
        price: "330.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/stela/stela2182514459/stela2182514459_1643203763558_2-0._QL90_UX173_.jpg",
        title: "Stella McCartney",
        type: "Falabella Eco Soft...",
        price: "835.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/alxis/alxis206181228d/alxis206181228d_1639000821404_2-0._QL90_UX207_.jpg",
        title: "Alexis",
        type: "Sebina Dress",
        price: "630.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/balen/balen3007216072/balen3007216072_q3_2-0._QL90_UX207_.jpg",
        title: "Balenciaga",
        type: "Dynasty Vintage Square...",
        price: "405.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/amill/amill3022311266/amill3022311266_1641241518073_2-0._QL90_UX207_.jpg",
        title: "Alex Mill",
        type: "Ruby Honeycomb Cardigan",
        price: "165.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/dldll/dldll408321ca19/dldll408321ca19_1638478221733_2-0._QL90_UX207_.jpg",
        title: "DL1961",
        type: "Rylan Drawstring Shorts",
        price: "139.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/aqudb/aqudb3063512208/aqudb3063512208_q1_2-0._QL90_UX207_.jpg",
        title: "Aquazzura",
        type: "Sundance 50 Sandals",
        price: "695.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/onrun/onrun3014190994/onrun3014190994_1644957955649_2-0._QL90_UX173_.jpg",
        title: "On",
        type: "Cloud 5 Sneakers",
        price: "130.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cdlam/cdlam3148017461/cdlam3148017461_1644953060334_2-0._QL90_UX207_.jpg",
        title: "Derek Lam 10 Crosby",
        type: "Charlotte Tie Waist Shirt Dress",
        price: "395.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/themo/themo300331caea/themo300331caea_1645218980226_2-0._QL90_UX207_.jpg",
        title: "Themoire",
        type: "Bios Bag",
        price: "509.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/acndb/acndb3179313159/acndb3179313159_1645459211973_2-0._QL90_UX207_.jpg",
        title: "Acne Studios",
        type: "Knit Face Vest",
        price: "320.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/agole/agole306241d3fe/agole306241d3fe_1645464395979_2-0._QL90_UX207_.jpg",
        title: "AGOLDE",
        type: "Fen High Rise Relaxed Tapered Jeans",
        price: "188.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jande/jande303741a561/jande303741a561_1645202928839_2-0._QL90_UX207_.jpg",
        title: "AGOLDE",
        type: "Fen High Rise Relaxed Tapered Jeans",
        price: "645.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/ganni/ganni3149514b4e/ganni3149514b4e_1642604212110_2-0._QL90_UX207_.jpg",
        title: "GANNI",
        type: "Printed Light Crepe Dress",
        price: "255.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/jcque/jcque308281c5f0/jcque308281c5f0_1645463380121_2-0._QL90_UX207_.jpg",
        title: "Jacquemus",
        type: "Le Jacquemus T-Shirt",
        price: "140.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/pisto/pisto3005170733/pisto3005170733_1622752738625_2-0._QL90_UX207_.jpg",
        title: "Pistola Denim",
        type: "Nova Shorts",
        price: "108.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/irooo/irooo4183138545/irooo4183138545_1645477163207_2-0._QL90_UX207_.jpg",
        title: "IRO",
        type: "Shavani Jacket",
        price: "380.00",
    },
    {
        itemImg: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/slvrl/slvrl3008687054/slvrl3008687054_q1_2-0._QL90_UX207_.jpg",
        title: "SLVRLAKE",
        type: "London High Rise Straight Jeans",
        price: "269.00",
    },

]

// end here 


//  products45 appending here

function show45Data() {
    appendData45(productsData40);
    countItems.innerHTML = "45 items";

    view20itemsBtn.style.textDecoration = "none";
    view20itemsBtn.style.fontWeight = "500";

    view45itemsBtn.style.textDecoration = "underline";
    view45itemsBtn.style.fontWeight = "700";

    function appendData45(productsData45) {
        productsUl_div.innerHTML = "";

        productsData45.forEach(element => {


            let li = document.createElement("li");
            li.className = "products-li";
            li.addEventListener("click", () => {
                console.log(element);
                localStorage.setItem("items-term", JSON.stringify(element));
                window.location.href = "product details.html";

            });

            let image = document.createElement("img")
            image.className = "product-img";
            image.src = element.itemImg;

            let textDiv = document.createElement("div");
            textDiv.className = "prodInfoDiv";

            let title = document.createElement("div");
            title.className = "prodtiteletxt";
            title.innerHTML = element.title

            let type = document.createElement("div");
            type.className = "prodtypetxt";
            type.innerHTML = element.type;

            let price = document.createElement("div");
            price.className = "prodpricetxt";
            price.innerHTML = element.price;

            textDiv.append(title, type, price);

            li.append(image, textDiv);

            productsUl_div.append(li);
        });

    }
}
