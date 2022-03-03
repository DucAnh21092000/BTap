const menuItem = [
    {
        name: "Trang chủ",
        active: false,
        iconUrl: "fas fa-angle-double-right ml-2 mr-2",
    },
    {
        name: "Thời trang",
        active: false,
        iconUrl: "fas fa-angle-double-right ml-2 mr-2",
    },
    {
        name: "Áo thun nữ Belike",
        active: true,
        iconUrl: "",
    },
];
let img = [
    {
        id:1,
        name:"Áo Thun Nữ Belike",
        url:"ao-somi-2_master",
        price:21092000,
        sale:10,
        info:`Trẻ trung và cuốn hút theo phong cách đường phố thu đông với áo sơ mi
              thêu hình động vật của thương hiệu Asos. Chát liệu cotton pha. Cổ 3cm.
              Tay dài, suông- Không lót trong- Màu sắc: Xám. Hướng dẫn sủ dụng: Giặt
              bằng tay với nhiệt độ không quá 30 độ C. Không được tẩy....       
        `
    },
    {
        id:2,
        name:"Áo Thun Nữ Belike 2",
        url:"2_44_90_master",
        price:24082000,
        sale:15, 
        info:`Trẻ trung và cuốn hút theo phong cách đường phố thu đông với áo sơ mi
        thêu hình động vật của thương hiệu Asos. Chát liệu cotton pha. Cổ 3cm.
        Tay dài, suông- Không lót trong- Màu sắc: Xám. Hướng dẫn sủ dụng: Giặt
        bằng tay với nhiệt độ không quá 30 độ C. Không được tẩy....       
  `
    },
    {
        id:3,
        name:"Áo Thun Nữ Belike 3",
        url:"1200_6_451_master",
        price:17072007,
        sale:0,
        info:`Trẻ trung và cuốn hút theo phong cách đường phố thu đông với áo sơ mi
        thêu hình động vật của thương hiệu Asos. Chát liệu cotton pha. Cổ 3cm.
        Tay dài, suông- Không lót trong- Màu sắc: Xám. Hướng dẫn sủ dụng: Giặt
        bằng tay với nhiệt độ không quá 30 độ C. Không được tẩy....       
  `
    }
]
const renderMenu = () => {
    let html = "";
    html = menuItem.map((arr,index) => {
        return `
            <li class="header__li">${arr.name} <i class="${arr.iconUrl}"></i> </li>
        `;
    });
    const menu__ul = document.querySelector(".header__ul");
    menu__ul.innerHTML = html.join("");
};
renderMenu();

const liItem = document.querySelectorAll(".header__li");
let itemActive = menuItem[menuItem.length -1].name;

const handleCheckActive = () => {
    liItem.forEach((item) => {
        item.onclick = function () {
            itemActive = item.textContent;
            handleCheckActive();
        };
        if (item.textContent == itemActive) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
};
handleCheckActive();

const renderProduct=() =>{
    let html=""
    html= img.map( arr => {
        return `
        <img src="./Images/products/${arr.url}.jpg"  
        onclick="handleChangeProduct(${arr.id},'${arr.name}','${arr.price}','${arr.sale}','${arr.url}')"  class="product__footer-image" /> `
     })
     let footer = document.querySelector('.product__footer')
     footer.innerHTML = html.join("")
     console.log(html.join(""))
}
renderProduct()

const handleChangeProduct =(id,name,price,sale,url) =>{
    let namepr = document.querySelector('.product__right-name')
    let idPr = document.querySelector('.idProduct')
    let infoPr = document.querySelector('.product__info')
    let priceSale = document.querySelector('.price1')
    let price1 = document.querySelector('.priceSale')
    let img = document.querySelector('.product__image')

    namepr.innerHTML = name;
    idPr.innerHTML = id;
    priceSale.innerHTML = price - price * sale/100;   
    price1.innerHTML = price
    img.src= './Images/products/'+url+'.jpg';

}