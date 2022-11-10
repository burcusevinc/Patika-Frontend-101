// Girişte ismimizi sorsun:
let enteredName = prompt("İsminizi Giriniz: ");

// İsmi yazdıracağımız elementi bulalım
let myName = document.querySelector("#myName");
// İsmin baş harfini büyük yapalım
enteredName = enteredName[0].toUpperCase() + enteredName.substring(1);
// myName elementine girilen stringi yazalım.
myName.innerHTML = `${enteredName}`;

function getDate() {
  // Tarih ve saati alalım
  let date = new Date().toLocaleString("tr-TR");
  // Tarih ve saati yazdıracağımız elementi bulalım
  let myClock = document.querySelector("#myClock");
  // myClock elementine tarih-saat bilgisini yazdıralım
  // Bu şekilde o anki sabit tarih ve saat yazdırılır
  myClock.innerHTML = `${date}`;
}

// Bu fonksiyonu 1 saniye içinde yenilersek, tarih-saat anlık olarak güncellenir.
setInterval(getDate, 1000);
