function getAppContainer() {
    const container = document.querySelector('main');
    fillContainer(container);
}

function fillContainer(container) {
    const currnetArr = JSON.parse(localStorage.getItem('shoes'));
    console.log(currnetArr);
    for (let item of currnetArr) {
        container.innerHTML += `<div>${item.name}</div>`
    }
}

