//Нам нужна функция, которая подсчитывает количество овец,
// присутствующих в массиве (true означает присутствует).
//Решил сделать через метод filter, думаю это один из самых правильных вариантов.
let array = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  true, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ,
];

function countSheeps(arrayOfSheep) {
    let newArr = arrayOfSheep.filter(arrValue => arrValue === true).length;
    return newArr;
}

console.log(countSheeps(array))