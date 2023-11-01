function fillContainer(container, arr) {
  clearContainer(container);
  for (let item of arr) {
    container.innerHTML += `
            <div class="container-shoes"> 
        <div  id="iditem">id: ${item.id}</div>
        <div  id="branditem">brand: ${item.brand}</div>
        <div  id="typeitem">type: ${item.type}</div>
        <div  id="coloritem">color: ${item.color}</div>
        <div  id="sizeitem">size: ${item.size}</div>
        <div  id="lacesitem">laces: ${item.laces}</div>
        <hr id="break-header">
        <button type="button" class="deleteShoeBtn " id="${item.id}"> <span>Delete</span></button>
        </div>`;
  }
  container.innerHTML +=
    '<button type="button" class="addshoeBtnStyle" id="addShoeBtn">Add New</button>';
  const addShoeBtn = document.querySelector("#addShoeBtn");
  const deleteShoeBtn = document.querySelectorAll(".deleteShoeBtn");
  addShoeBtn.addEventListener("click", fillAgain);
  deleteShoeBtn.forEach(item => item.addEventListener('click', deleteShoe));
}

function clearContainer(container) {
  for (let item of Array.from(container.children)) {
    container.removeChild(item);
  }
}

function fillAgain() {
  let currentShoe = {};
  const addItemform = document.getElementById("addItemform");
  const submitaddnew = document.getElementById("submitaddnew");
  addItemform.style.display = "flex";
  submitaddnew.addEventListener("click", inputcheckNull);

  function inputcheckNull() {
    const brand = document.getElementById("nBrand");
    const type = document.getElementById("nType");
    const size = document.getElementById("nSize");
    const color = document.getElementById("nColor");
    const laces = document.getElementById("nLaces");
    const postFajax = new FakeXMLHttpRequest();
    postFajax.open("POST", "shoes");
    postFajax.onload = function () {
      submitaddnew.removeEventListener("click", inputcheckNull);
      const fajax = new FakeXMLHttpRequest();
      fajax.open("GET", "shoes");
      fajax.onload = () =>
        fillContainer(document.querySelector("main"), fajax.responseText);
      fajax.send();
    };
    if (
      brand.value !== '' &&
      type.value !== '' &&
      size.value !== '' &&
      color.value !== '' &&
      laces.value !== ''
    ) {
      postFajax.send(
        new shoe(brand.value, type.value, size.value, color.value, laces.value)
      );
      addItemform.style.display = "none";
    }
  }
}

function deleteShoe() {
    const id = this.id;
    const fajax = new FakeXMLHttpRequest();
    fajax.open("DELETE", `shoes/${this.id}`);
    fajax.onload = function () {
        const fajax = new FakeXMLHttpRequest();
        fajax.open("GET", "shoes");
        fajax.onload = () => fillContainer(document.querySelector("main"), fajax.responseText);
        fajax.send();
    }
    fajax.send();
}