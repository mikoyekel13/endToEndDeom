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
        document.querySelector("#filterBtn").addEventListener("click", FilterReq);
        document.querySelector("#getBtn").addEventListener("click", getAllShoes);
        getAllShoes();
    }
}

//apply functions
window.onload = showContent(pages.loginPage);
window.onhashchange = function () {
    showContent(pages[history.state["name"]]);
};

function FilterReq() {
    const brand = document.getElementById("brand");
    const type = document.getElementById("type");
    const size = document.getElementById("size");
    const color = document.getElementById("color");
    const laces = document.getElementById("laces");
    const looplength = [brand, type, size, color, laces]
    let url = `shoes/`

    for (let i = 0; i < looplength.length; i++) {
        if (looplength[i].value !== "") {
            url += `?${looplength[i].name}=${looplength[i].value}`
        }



    }
    const fajaxfilter = new FakeXMLHttpRequest();
    fajaxfilter.open("GET", url);
    fajaxfilter.onload = (response) => {
        this.response = response;
        this.responseStatus = this.response[0];
        this.responseText = this.response[1];
        try {
            if (this.responseStatus === '200') {
                fillContainer(document.querySelector("main"), this.responseText);
            }
            else if (this.responseStatus === '404') {
                throw new Error('404 Not Found');
            }
        }
        catch (e) {
            alert(e.message);
        }
    }
    fajaxfilter.send();

}

function userPostReq() {
    const pwrd = document.getElementById("pwrd").value;
    const userName = document.getElementById("userName").value;
    const fajax = new FakeXMLHttpRequest();
    fajax.open("POST", "users");
    fajax.onload =
        (response) => {
            this.response = response;
            this.responseStatus = this.response[0];
            this.responseText = this.response[1];
            try {
                if (this.responseStatus === '200') {
                    showContent(pages.appPage);
                }
                else if (this.responseStatus === '404') {
                    throw new Error('404 Not Found');
                }
            }
            catch (e) {
                alert(e.message);
            }
        }
    fajax.send({ username: `${userName}`, password: `${pwrd}` });
}

function getAllShoes() {
    const fajax = new FakeXMLHttpRequest();
    fajax.open("GET", "shoes");
    fajax.onload =
        (response) => {
            this.response = response;
            this.responseStatus = this.response[0];
            this.responseText = this.response[1];
            try {
                if (this.responseStatus === '200') {
                    fillContainer(document.querySelector("main"), this.responseText);
                }
                else if (this.responseStatus === '404') {
                    throw new Error('404 Not Found');
                }
            }
            catch (e) {
                alert(e.message);
            }
        }

    fajax.send();
}