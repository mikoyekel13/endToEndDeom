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
           this.response = connection(`${this.method} ${this.url}`, obj);
        } else if (this.method === 'GET' || this.method == 'DELETE') {
            console.log(`${this.method} ${this.url}`);
            this.response = connection(`${this.method} ${this.url}`);
        }
        this.responseStatus = this.response[0];
        this.responseText = this.response[1];
        try {
            if (this.responseStatus === '200') {
                this.onload();
            }
            else if (this.responseStatus === '404') {
                throw new Error('404 Not Found');
            }
        }
        catch (e) {
            alert(e.message);
        }

    }
}