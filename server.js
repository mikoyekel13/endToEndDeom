function evalReq(str, obj) {
    const accReq = ['GET', 'POST', 'DELETE'];
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
    switch (method) {
        case 'GET':
            return getMethod(url);
        case 'POST':
            return postMethod(url, obj);
        case 'DELETE':
            return deleteMethod(url);
    }
}

function getMethod(url) {
    if (!url.includes('/')) {
        return getWholeArr(url) ? ['200', getWholeArr(url)] : ['404', {}];
    } else if (url.includes('/') && url.includes('shoes')){
        return getFiltered(url);
    }
}

function getFiltered(url) {
    let data; let specific;
    let currentKey = '';
    const keys = [];
    let currentValue = '';
    const values = [];
    let lastBreak = '';
    let returnedArr = [];
    for (let i = 0; i < url.length; i++) {
        if (url[i] === '/') {
            data = url.slice(0, i);
            specific = url.slice(i + 1, url.length);
            break;
        }
    }
    const currentArr = getWholeArr(data);
    for (let i = 0; i < specific.length; i++) {
        if (specific[i] === '?') {
            if (currentKey) {
                keys.push(currentKey);
                values.push(currentValue);
            }
            lastBreak = '?';
            currentKey = '';
            currentValue = '';
        } else if (specific[i] === '=') {
            lastBreak = '=';
        } else if (specific[i] !== '=' && specific[i] !== '?' && lastBreak === '?') {
            currentKey += specific[i];
        } else if (specific[i] !== '=' && specific[i] !== '?' && lastBreak === '=') {
            currentValue += specific[i];
        }
    }
    keys.push(currentKey);
    values.push(currentValue);
    for (let item of currentArr) {
        let check = false;
        for (let i = 0; i < keys.length; i++) {
            //console.log(item[keys[i]], values[i]);
            if (item[keys[i]].toString() === values[i]) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (check) {returnedArr.push(item)};
    }
    return returnedArr.length > 0 ? ['200', returnedArr] : ['404', 'Not Found'];
}

    function postMethod(url, obj) {
        if (!url.includes('/')) {
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

    function deleteMethod(url) {
        if (url.includes('/')) {
            let id = '';
            for (let i = 0; i < url.length; i++) {
                if (url[i] === '/') {
                    return removeItem(url.slice(0, i), parseInt(url.slice(i + 1, url.length))) ? ['200', 'ok'] : ['404', 'Not Found'];
                }
            }
        }
    }
