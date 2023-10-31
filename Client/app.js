const databaseCheck = JSON.parse(localStorage.getItem('database'));
const gridContainer = document.querySelector('main');

for (let item of databaseCheck.shoes) {
    gridContainer.innerHTML += `<div>${item.id}</div>`;
}