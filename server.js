function evalReq (str, obj) {
    const accReq = ['GET', 'POST'];
    let currentStr = '';
    let method = '';
    let url = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (accReq.includes(currentStr)) {
                method = currentStr;
                url = str.slice(i + 1, str.length);
                break;
            } else {
                return ['404', {}];
            }
        }
        currentStr += str[i];
    }
    if (method === 'GET' && !url.includes('/')) {
        return getWholeArr(url) ? ['200', getWholeArr(url)] : ['404', {}];

    } else if (method === 'POST') {
        
        
    }
} 