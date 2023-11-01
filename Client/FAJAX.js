class FakeXMLHttpRequest{
    constructor(){
        this.method = '';
        this.url = '';
        this.async = true;
        this.response = [];
        this.responseStatus = '';
        this.responseText = '';
        this.onload = null;
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
            
        }
        this.response = evalReq(`${this.method} ${this.url}`);
        this.responseStatus = this.response[0];
        try{

        if(this.responseStatus === '200'){
            this.onload();
        }
        else if(this.responseStatus === '404'){
            throw new Error('404 Not Found');
        }
    }
    catch(e){
        alert(e.message);
    }

        this.responseText = this.response[1];
    }
}

// }
//