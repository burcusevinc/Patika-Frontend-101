const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//butonların oluşturulacağı div :
let buttonDOM = document.querySelector(".btn-container");
let buttonArray = ["All", "Korea", "Japan", "China"];

buttonArray.forEach((currentValue) => {
  //button elementleri oluşturuldu
  let buttons = document.createElement("button");
  //butonların id bilgisi parametreden geliyor
  buttons.id = currentValue;
  //butonların text bilgisi parametreden geliyor
  buttons.innerText = currentValue;
  //butonlara bootstrap stili verildi
  buttons.classList = "btn-item btn btn-outline-dark d-inline";
  //div içine button elementleri eklendi
  buttonDOM.appendChild(buttons);
});

//tüm butonlar id değerlerine göre bulundu ve tıklama eventi verildi
document.querySelector("#All").addEventListener("click", click);
document.querySelector("#Korea").addEventListener("click", click);
document.querySelector("#Japan").addEventListener("click", click);
document.querySelector("#China").addEventListener("click", click);

//menünün listelenip gösterileceği fonksiyon:
function menuList(menuListName) {
  //yeni bir array oluşturur
  menuListName.map((index) => {
    //menünün oluşturulacağı div elementi:
    let menuDOM = document.querySelector(".section-center");
    //
    let divcontainer = document.createElement("div");
    //büyük div oluşturuldu 6'lık kısımlara bölündü:
    divcontainer.classList = "menu-items col-6  ";
    //container, divin içine eklendi.
    menuDOM.appendChild(divcontainer);

    //img elementi oluşturuldu
    let img = document.createElement("img");
    img.classList = "photo";
    //img yolu, objenin içindeki img key'inden gelecek
    img.src = index.img;
    //img elementi, containerın içine oluşturuldu
    divcontainer.appendChild(img);

    //yemek bilgilerini içermesi için genel bir div oluşturuldu
    let divInfo = document.createElement("div");
    divInfo.classList = "menu-info";
    //containerın içine yeni div eklendi
    divcontainer.appendChild(divInfo);

    //title ve price bilgilerini eklemek için yeni bir div oluşturuldu
    let divTitle = document.createElement("div");
    divTitle.classList = "menu-title";
    divInfo.appendChild(divTitle);

    //title bilgisi
    let title = document.createElement("h4");
    //title bilgisi, obje içinden alındı
    title.innerHTML = index.title;
    divTitle.appendChild(title);

    //price bilgisi
    let price = document.createElement("h4");
    price.classList = "price";
    //price bilgisi, obje içinden alındı
    price.innerHTML = index.price;
    divTitle.appendChild(price);

    //desc bilgisi için yeni bir div oluşturuldu
    let divDesc = document.createElement("div");
    divDesc.classList = "menu-desc";
    //desc bilgisi, obje içinden alındı
    divDesc.innerHTML = index.desc;
    divInfo.appendChild(divDesc);
  });
}

//kategorilere göre yemekleri listeleme işlemi:
//reduce:dizinin tüm elemanları için verilen işlemi gerçekleştirir.
CategoryMenu = menu.reduce((acc, menuElement) => {
  let key = menuElement["category"];

  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(menuElement);
  return acc;
}, {});

let sectionDOM = document.querySelector(".section-center");
function click() {
  while (sectionDOM.hasChildNodes()) {
    sectionDOM.removeChild(sectionDOM.firstChild);
  }
  if (this.id == "All") {
    menuList(menu);
  } else if (this.id == "Korea") {
    menuList(CategoryMenu.Korea);
  } else if (this.id == "Japan") {
    menuList(CategoryMenu.Japan);
  } else if (this.id == "China") {
    menuList(CategoryMenu.China);
  }
}
