//all client tempaltes
const pages = {
    loginPage: document.querySelector("#loginTemp"),
    appPage: document.querySelector("#appTemp"),
};

//switch content function
function showContent(page) {
    let currentPage = page.id;
    history.pushState({ name: page.id }, currentPage, `#${currentPage}`);
    if (document.body.querySelector("div")) {
        document.body.removeChild(document.body.querySelector("div"));
    }
    document.body.appendChild(page.content.cloneNode(true));
    if (page.id === "loginTemp") {
        const submitbtn = document.querySelector("#submitbtn");
        submitbtn.addEventListener("click", userPostReq);
    } else if (page.id === "appTemp") {
        const fajax = new FakeXMLHttpRequest();
        fajax.open("GET", "shoes");
        fajax.onload = () => fillContainer(document.querySelector("main"), fajax.responseText);
        fajax.send(); //
    }
}

//apply functions
window.onload = showContent(pages.loginPage);
window.onhashchange = function () {
    showContent(pages[history.state["name"]]);
};

function userPostReq() {
    const pwrd = document.getElementById("pwrd").value;
    const userName = document.getElementById("userName").value;
    const fajax = new FakeXMLHttpRequest();
    fajax.open("POST", "users");
    fajax.onload = function() {
        showContent(pages.appPage);
    }
    fajax.send({username: `${userName}`, password: `${pwrd}`});
}
