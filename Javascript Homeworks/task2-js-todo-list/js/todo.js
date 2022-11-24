// todo add işlemi:
// 1. yazılacak alan, buton, gösterilecek alanların elementlerini bul.
// butona tıklayınca yazıyı aşağıda göster.

//input element:
const task = document.querySelector("#task");
//buton element:
const liveToastBtn = document.querySelector("#liveToastBtn");
//liste element:
const list = document.querySelector("#list");

//butona tıkladığımızda yeni bir liste elementi oluşturulacak.
function newElement() {
  //inputa bir şey yazılmamışsa error mesajı verir
  if (task.value == "" || !task.value.trim()) {
    $(`.error`).toast("show");
  }
  //inputa yeni bir şey yazılırsa
  else {
    //yeni bir li elementi oluşturuldu
    const newTask = document.createElement("li");
    //oluşturulan elementin içeriğine task inputuna yazılan değer verildi
    newTask.innerHTML = task.value;
    //başarılı uyarı mesajı verir
    $(`.success`).toast("show");
    //list elementine yeni oluşturulan li elementi eklenir.
    list.appendChild(newTask);

    //remove işlemi için span elementi oluşturuldu
    const removeBtn = document.createElement("span");
    //class'ı close yapıldı
    removeBtn.classList.add("close");
    const btnImg = document.createTextNode("\u00D7");
    removeBtn.appendChild(btnImg);
    //yeni oluşturulan elemente remove butonu eklenir.
    newTask.appendChild(removeBtn);

    //butona tıklayınca, fonskiyon çalışır
    removeBtn.addEventListener("click", removeTask);

    //yazılan task silinir.
    function removeTask() {
      newTask.remove();
    }

    //butona tıklayınca, fonskiyon çalışır
    newTask.addEventListener("click", selectTask);
    //yapıldı özelliği eklenir
    function selectTask() {
      newTask.classList.toggle("checked");
    }
  }
}
//tüm li elementleri seçilir
const allLi = document.querySelectorAll("li");

//her li elementi için:
allLi.forEach((e) => {
  //elemente tıklayınca, fonksiyon çalışır
  e.addEventListener("click", selectTask);
  //yapıldı özelliği ekler
  function selectTask() {
    e.classList.toggle("checked");
  }
  //close butonu eklendi
  const removeBtn = document.createElement("span");
  removeBtn.classList.add("close");
  // x character
  const btnImg = document.createTextNode("\u00D7");
  removeBtn.appendChild(btnImg);
  e.appendChild(removeBtn);
  //butona tıklayınca, fonskiyon çalışır
  removeBtn.addEventListener("click", removeTask);
  //yazılan task silinir.
  function removeTask() {
    e.remove();
  }
});
