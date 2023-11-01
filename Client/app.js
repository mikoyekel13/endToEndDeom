function getAppContainer() {
    const container = document.querySelector('main');
    return container;
}

function fillContainer(container, arr) {
    const currnetArr = getWholeArr('shoes');
    for (let item of currnetArr) {
        container.innerHTML += `<div class="items">${item.brand}
        ${item.type}
        ${item.color}
        ${item.size}
        ${item.laces}</div>`;
    }
}

