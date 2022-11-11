/*
1. Formu seç.
2. Input bilgisini UL içerisine ekle.
3. Form içindeki bilgiyi sıfırla.
4. Forma bilgi girilmezse kullanıcıyı uyar.
*/

//forma ulaşma:
let userFormDOM = document.querySelector("#userForm");
//userForm'un submit eventini dinle:
userFormDOM.addEventListener("submit", formHandler);
//alert elementini bulma:
const alertDOM = document.querySelector("#alert");

//alert mesaj fonksiyonu:
const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

function formHandler(event) {
  //default işlemi sonlandırdı, butonlara tıklayınca sayfa her seferinde yenilenmeyecek.
  event.preventDefault();

  //input bilgilerini alma:
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("#score");

  //username ve score'a değer girilirse ekleme işlemi yapması için if yazıldı: boş değer gönderilmemesi için:
  if (USER_NAME.value && SCORE.value) {
    //ekleme işlemini yapacak fonksiyon, parametre olarak userName ve score elementlerinin içindeki value verilecek.
    addItem(USER_NAME.value, SCORE.value);
    //bilgi girildikten sonra, gönderdikten sonra inputları sıfırlamak için, yani boş olmaları için:
    USER_NAME.value = "";
    SCORE.value = "";
  } else {
    //alert elementinin içeriğine alertFunctiondaki işlemleri ver.
    alertDOM.innerHTML = alertFunction(
        "Başlık Bilgisi",
        "Eksik Bilgi Girildi !",
        "danger" //alert classı danger oldu, rengi değişir.
        );
    // console.log("Hatalı Giriş !");
  }
}

//ul'yi alma:
let userListDOM = document.querySelector("#userList");

//UL'ye ekleme işlemini yapacak fonksiyon:
//Gönder butonuna basınca, oluşturulan listede isim ve puan bilgisi çıkacak.
const addItem = (userName, score) => {
  // li elementi oluşturudlu
  let liDOM = document.createElement("li");
  //li elementinin içeriğine userName ve score bilgileri verildi, score bilgisi spanın içinde verildi.
  liDOM.innerHTML = `
  ${userName}
  <span class="badge bg-primary rounded-pill">${score}</span>
   `;
  //li elementlerinin class bilgileri eklendi:
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  //ul'nin altına ekleme
  userListDOM.append(liDOM);
};

// HTML'DE BU KOD SİLİNİRSE, İLK BAŞTA BU BİLGİ EKRANA GELMEYECEK.
// ALTTAKİ UL-Lİ YAPISINI JS'DE KENDİMİZ OLUŞTURUP EKRANA YAZDIRIYORUZ.
/* <li class="list-group-item d-flex justify-content-between align-items-center">
        A list item
        <span class="badge bg-primary rounded-pill">14</span>
    </li> */
