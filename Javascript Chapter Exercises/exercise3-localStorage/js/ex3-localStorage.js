// Counter bilgisini storage içinde tutup, storage içinden counter bilgisini alalım.
// Counter bilgisini storage içinde tutarak, sayfa kapandığında ya da yenilendiğinde counterın değişmemesini sağlayacağız.


//counter keyinin içindeki bilgi counter variableına veriliyor.
//eğer counter bilgisi varsa kendisini numbera çevir, yoksa 0 getir, sayacın düzgün çalışması için.
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
//id'si counter olan element
let counterDOM = document.querySelector('#counter');
//id'si increase olan element
let increaseDom = document.querySelector('#increase')
//id'si decrease olan element
let decreaseDom = document.querySelector('#decrease')

//counterDOM elementinin içindeki bilgi, counter değişkeninden gelecek.
counterDOM.innerHTML = counter 
//click event
increaseDom.addEventListener("click", clickEvent)
decreaseDom.addEventListener("click",clickEvent)

function clickEvent(){
    //id değerini yazdırıyor.
    console.log(this.id)
    // id değeri increase ise counterı 1 arttır,değilse 1 azalt.
    this.id == "increase" ? counter+=1 : counter -= 1

    //counter key'ine counter variable'ı verilerek, localStorage oluşturuldu.
    //fonksiyon çağrıldığında bu localStorage çalışacak.
    localStorage.setItem('counter',counter)

    //counterDOM elementinin içeriğine counter değişkenini göm.
    counterDOM.innerHTML = counter
}