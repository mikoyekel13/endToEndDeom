class FakeXMLHttpRequest {
    constructor() {
        this.method = '';
        this.url = '';
        this.async = true;
        this.response = [];
        this.responseStatus = '';
        this.responseText = '';
        this.onload = null;
    }
    open(method, url) {
        this.method = method;
        this.url = url;
    }
    send(obj) {
        if (this.method === 'POST') {
            console.log(`${this.method} ${this.url}`, obj);
            connection(`${this.method} ${this.url}`, this.onload, obj);
        } else if (this.method === 'GET' || this.method == 'DELETE') {
            console.log(`${this.method} ${this.url}`);
            connection(`${this.method} ${this.url}`, this.onload);
        }
    }
}