// Counter artırma ve azaltma

//counter variable
let counter = 0;

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

    // id değerlerine göre counter değişkeninin değeri değiştirildi.
    // ve counterDOM elementinin içine gömüldü.
    // if (this.id == "increase") {
    //     counterDOM.innerHTML = counter += 1
    // }
    // else if(this.id == "decrease") {
    //     counterDOM.innerHTML = counter -= 1
    // }

    //kısa yol :
    // id değeri increase ise counterı 1 arttır,değilse 1 azalt.
    this.id == "increase" ? counter+=1 : counter -= 1
    //counterDOM elementinin içeriğine counter değişkenini göm.
    counterDOM.innerHTML = counter
}
