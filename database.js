//whole database
const database = {
    //shoes database
    shoes: [
        {
            id: 1,
            brand: 'Nike',
            type: 'Sport',
            color: 'Black',
            size: 42,
            laces: true
        },
        {
            id: 2,
            brand: 'Adidas',
            type: 'Streetwear',
            color: 'Black',
            size: 44,
            laces: true
        },
        {
            id: 3,
            brand: 'Blundstone',
            type: 'Boots',
            color: 'Brown',
            size: 39,
            laces: false
        },
        {
            id: 4,
            brand: 'Nike',
            type: 'Streetwear',
            color: 'White',
            size: 44,
            laces: false
        },
    ],
    //users database
    users: [
        {
            id: 1,
            username: 'miko2003',
            password: 'Abcd1234'
        },
        {
            id: 2,
            username: 'yoad2005',
            password: 'Abcd1234'
        },
    ]
}

//upload to local storge
localStorage.setItem('database', JSON.stringify(database));

//database API
//basic functions
function getWholeArr (str) {
    switch (str) {
        case 'shoes':
            return database.shoes;
        case 'users':
            return database.users;
    }
    return 404;
}