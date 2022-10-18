const x = 1001;


function multitask(x, y, z, str) {
    let p = 0;
    switch (x) {
        case 12:
            console.log('equal 12');
            break;
    
        default:
            p++;
            console.log('not equal 12');
            break;
    }
    // p = 0

    if (y > z) {
        p = 100;
    }

    // p = 100

    if (typeof str !== 'string') {
        p = 'MOLOKO';
    }
    // p = 'MOLOKO'
    return p;
}

const result = multitask(12, 6, 3, 'coffee');
console.log('result: ', result);

// switch (x) {
//     case 2:
//         console.log('OK 2');
//         break;
    
//     case 100: console.log('asdgadsgdf'); break;
    
//     case 'ab':
//         console.log('єто строка');
//         break;

//     default:
//         console.log('ничего не подошло');
//         break;
// }
