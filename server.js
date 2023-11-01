function evalReq(str, obj) {
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

    } else if (method === 'POST' && !url.includes('/')) {
        if (url === 'users') {
            for (let item of getWholeArr(url)) {
                if (item.username === obj.username && item.password === obj.password) {
                    return ['200', 'ok'];
                }
            } return ['404', 'Not Found'];
        } else if (url === 'shoes') {
            return addItem(url, obj) ? ['200', 'ok'] : ['404', 'Not Found'];
        }
    }
}