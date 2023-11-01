function fillContainer(container, arr) {
    clearContainer(container); 
  for (let item of arr) {
    container.innerHTML += `<div class="items">${item.id}
        ${item.type}
        ${item.color}
        ${item.size}
        ${item.laces}</div>`;
  }
  container.innerHTML +=
    '<button type="button" class="addshoeBtnStyle" id="addShoeBtn">Add New</button>';
  const addShoeBtn = document.querySelector("#addShoeBtn");
  addShoeBtn.addEventListener("click", fillAgain);
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
  };
  fajax.send(new shoe('', '', 'blue', '', ''));
}
