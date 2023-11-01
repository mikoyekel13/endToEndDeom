function getAppContainer() {
    const container = document.querySelector('main');
    return container;
}

function fillContainer(container, arr) {
    for (let item of arr) {
        container.innerHTML += `<div class="items">${item.brand}
        ${item.type}
        ${item.color}
        ${item.size}
        ${item.laces}</div>`;
    }
    container.innerHTML += '<button type="button" id="addShoeBtn">Add New</button>'
    const addShoeBtn = document.querySelector('#addShoeBtn');
    addShoeBtn.addEventListener('click', fillAgain)
}

function fillAgain() {
    const fajax = new FakeXMLHttpRequest();
    fajax.open("POST", "shoes");
    fajax.onload = function () {
        const fajax = new FakeXMLHttpRequest();
        fajax.open("GET", "shoes");
        fajax.onload = () => fillContainer(getAppContainer(), fajax.responseText);
        fajax.send(); 
    }
    fajax.send({ brand: 'Nike' });
}

