//all client tempaltes
const pages = {
    loginPage: document.querySelector('#loginTemp'),
    appPage: document.querySelector('#appTemp')
}

//switch content function
function showContent(page) {
    let currentPage = page.id;
    history.pushState({ name: page.id }, currentPage, `#${currentPage}`);
    console.log(history.state);
    if (document.body.querySelector('div')) {
        document.body.removeChild(document.body.querySelector('div'));
    }
    document.body.appendChild(page.content.cloneNode(true));
}

//apply functions
window.onload = showContent(pages.loginPage);
window.onhashchange = function() {showContent(pages[history.state['name']])};