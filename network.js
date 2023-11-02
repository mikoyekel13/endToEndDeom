function connection(req, onconnect, obj) {
    setTimeout(() => {
        response = evalReq(req, obj);
        onconnect(response);
    }, 800);
}