// //whole database
// const shoes = [
//     //shoes database
//         {
//             id: 1,
//             brand: 'Nike',
//             type: 'Sport',
//             color: 'Black',
//             size: 42,
//             laces: true
//         },
//         {
//             id: 2,
//             brand: 'Adidas',
//             type: 'Streetwear',
//             color: 'Black',
//             size: 44,
//             laces: true
//         },
//         {
//             id: 3,
//             brand: 'Blundstone',
//             type: 'Boots',
//             color: 'Brown',
//             size: 39,
//             laces: false
//         },
//         {
//             id: 4,
//             brand: 'Nike',
//             type: 'Streetwear',
//             color: 'White',
//             size: 44,
//             laces: false
//         },
//     ]
//     //users database
// const users =    
//     [
//     {
//         id: 1,
//         username: 'miko2003',
//         password: 'Abcd1234'
//     },
//     {
//         id: 2,
//         username: 'yoad2005',
//         password: 'Abcd1234'
//     },
// ]
// //upload to local storge
// localStorage.setItem('shoes', JSON.stringify(shoes));
// localStorage.setItem('users', JSON.stringify(users));

//database API
//basic functions
function getWholeArr (str) {
    switch (str) {
        case 'shoes':
            const loaclShoes = JSON.parse(localStorage.getItem('shoes'));

            return loaclShoes;
        case 'users':
            const loaclusers = JSON.parse(localStorage.getItem('users'));
            return loaclusers;
    }
    return 404;
} 

function addShoes(ItemPram) {
    const checkKeys =['brand','type','color','size','laces' ]
    currentArr = JSON.parse(localStorage.getItem('shoes'));
    for (let item of Object.keys(ItemPram)){
        if(checkKeys.includes(item)){
            console.log('ok');
        }
    }
    currentArr.push(ItemPram);
    localStorage.setItem('shoes',JSON.stringify(currentArr));
    return 200;
}
