//whole database
const shoes = [
    //shoes database
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
    ]
    //users database
const users =    
    [
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
//upload to local storge
localStorage.setItem('shoes', JSON.stringify(shoes));
localStorage.setItem('users', JSON.stringify(users));

//database API
//basic functions
function getWholeArr (str) {
    switch (str) {
        case 'shoes':
            const loaclShoes = JSON.parse(localStorage.getItem('shoes'));

            return loaclShoes.shoes;
        case 'users':
            const loaclusers = JSON.parse(localStorage.getItem('users'));
            return loaclusers.users;
    }
    return 404;
} 

function addItem(localItem,ItemPram) {
    localItem = JSON.parse(localStorage.getItem(localItem));
    for(let i = 0; i < localItem.length;i++){
        localStorage.setItem(localItem,localItem[i].push(ItemPram))
    }
}