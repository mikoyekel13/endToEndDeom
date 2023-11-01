function fillContainer(container, arr) {
    clearContainer(container); 
  for (let item of arr) {
    container.innerHTML += `<div class="items">${item.id}
        ${item.brand}
        ${item.type}
        ${item.color}
        ${item.size}
        ${item.laces}
        <button type="button" class="deleteShoeBtn" id="${item.id}">Delete</button>
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
  const fajax = new FakeXMLHttpRequest();
  fajax.open("POST", "shoes");
  fajax.onload = function () {
    const fajax = new FakeXMLHttpRequest();
    fajax.open("GET", "shoes");
    fajax.onload = () => fillContainer(document.querySelector("main"), fajax.responseText);
    fajax.send();
  }
  fajax.send(new shoe('', '', 'blue', '', ''));
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