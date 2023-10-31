function getAppContainer() {
    const container = document.querySelector('main');
    fillContainer(container);
}

function fillContainer(container) {
    const currnetArr = getWholeArr('shoes');
    console.log(currnetArr);
    for (let item of currnetArr) {
        container.innerHTML += `<div class="items">${item.brand}
        ${item.type}
        ${item.color}
        ${item.size}
        ${item.laces}</div>`;
    }
}

