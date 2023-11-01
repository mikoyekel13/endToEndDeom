localStorage.setItem('usersIdCounter', 1);
localStorage.setItem('shoesIdCounter', 1);

class shoe {
    constructor(brand, type, color, size, laces) {
        this.id = shoe.counter;
        shoe.count();
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.size = size;
        this.laces = laces;
    }
    static counter = localStorage.getItem('shoesIdCounter');;
    static count() {
        shoe.counter++
        localStorage.setItem('shoesIdCounter', shoe.counter);
    }
}

class user {
    constructor(username, password) {
        this.id = user.counter;
        user.count();
        this.username = username;
        this.password = password;
    }
    static counter = localStorage.getItem('usersIdCounter');
    static count() {
        user.counter++
        localStorage.setItem('usersIdCounter', user.counter);
    }
}

// // whole database
const shoes = [
    //shoes database
    new shoe('Nike', 'Sport', 'Black', 42, true),
    new shoe('Adidas', 'Streetwear', 'Black', 44, true),
    new shoe('Blundstone', 'Boots', 'Brown', 39, false),
    new shoe('Nike', 'Streetwear', 'White', 44, false)
]
//users database
const users =
    [
        new user('miko2003', '123'),
        new user('yoad2005', '123')
    ]
//upload to local storge
localStorage.setItem('shoes', JSON.stringify(shoes));
localStorage.setItem('users', JSON.stringify(users));

// database API
// basic functions

function getWholeArr(str) {
    switch (str) {
        case "shoes":
            const loaclShoes = JSON.parse(localStorage.getItem("shoes"));
            return loaclShoes;
        case "users":
            const loaclusers = JSON.parse(localStorage.getItem("users"));
            return loaclusers;
    }
    return false;
}

function addItem(url, obj) {
    switch (url) {
        case "shoes":
            const checkKeys = ["brand", "type", "color", "size", "laces", "id"];
            currentArr = JSON.parse(localStorage.getItem(url));
            for (let item of Object.keys(obj)) {
                if (!checkKeys.includes(item)) {
                    return false;
                }
            }
            break;
        case "users":
            const checkKeysUsers = ["userName", "password", "id"];
            currentArr = JSON.parse(localStorage.getItem(url));
            for (let item of Object.keys(obj)) {
                if (!checkKeysUsers.includes(item)) {
                    return false;
                }
            }
    }
    currentArr.push(obj);
    localStorage.setItem(url, JSON.stringify(currentArr));
    return true;
}
