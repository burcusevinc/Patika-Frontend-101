// Girişte ismimizi sorsun:
let enteredName = prompt("İsminizi Giriniz: ");
// İsmi yazdıracağımız elementi bulalım
let myName = document.querySelector("#myName");
// İsmin baş harfini büyük yapalım
enteredName = enteredName[0].toUpperCase() + enteredName.substring(1);
// myName elementine girilen stringi yazalım.
myName.innerHTML = `${enteredName}`;


// günler arrayi
let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function getDate(){
    let date = new Date();
    //günler
    //getDay fonksiyonu 0-6 arası değerler verir
    //oluşturduğumuz days arrayine bu değerleri atadık, 
    //örneğin bugün günlerden perşembe, 4 indeksine karşılık geliyor.
    let d = days[date.getDay()];
    //saat
    let h = date.getHours();
    //dakika
    let m = date.getMinutes();
    //saniye
    let s = date.getSeconds();
    // tarih bilgisini yazdıracağımız elementi seçelim
    let time = document.querySelector("#myClock")
    // eğer saat,dakika veya saniye 10'dan küçük ise başına 0 ekler -> 05,03 gibi. 16:05:03
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    //time elementine yazılacak bilgi verildi
    time.innerHTML = `${h}:${m}:${s} ${d}`
}

// Bu fonksiyonu 1 saniye içinde yenilersek, tarih-saat anlık olarak güncellenir.
setInterval(getDate, 1000);
