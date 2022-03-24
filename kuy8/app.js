//Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствует).
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
console.log(countSheeps(array));

//Вам выдается строка, содержащая последовательность последовательностей символов, разделенных запятыми.
// Напишите функцию, которая возвращает новую строку, содержащую те же последовательности символов,
// за исключением первой и последней, но на этот раз разделенных пробелами.
// Если входная строка пуста или удаление первого и последнего элементов приведет к тому, что результирующая строка будет пустой,
// верните пустое значение (представленное в виде общего значения NULL в примерах ниже).
function array(arr){
 let newArr = arr.split(',');
 if (newArr == '' || newArr.length <= 2){
     return null
 }else {
    return  newArr.slice(1, -1).join(' ')
 }
 return newArr;
}
console.log(array('1,2,3,4,5'));

//Сложить два массива.Каждый массив содержит только целые числа. Вывод тоже представляет собой число.
//Первое, что пришло в голову это метод reduce, но потом вспонил, что есть ещё метод concat, и его так же можно использовать.
//Я даже не знаю какой из этих вариантов лучше, помоему оба хорошие. но concat+reduce меньше, значит очко в его пользу)
function arrayPlusArray(arr1, arr2) {
    //решение с помощью reduce.
    let newArr1 = arr1.reduce((value, item) => value + item) + arr2.reduce((value,item) => value + item);
    return newArr1;
   //решение с помощью concat + reduce.
    let newArr2 = arr1.concat(arr2).reduce((value, item) => value + item);
    return newArr2;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))


