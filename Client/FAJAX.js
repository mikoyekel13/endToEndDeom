class FakeXMLHttpRequest{
    constructor(){
        this.method = '';
        this.url = '';
        this.async = true;
    }
    open(method, url){
        if(method === "GET"){
            this.method = 'GET';
            this.url = url;

        }
        if(method === "POST"){
            this.method = 'GET';
            this.url = url;
        }
        // if(method == "PUT"){

        // }
        // if(method == "DELETE"){

        // }
    }
    send(obj){
        if(obj){
            return `${this.method} ${this.url}`;

        }
        return evalReq(`${this.method} ${this.url}`);
    }

}
const fajax = new FakeXMLHttpRequest();
fajax.open('GET', 'shoes');
//
console.log(fajax.send());