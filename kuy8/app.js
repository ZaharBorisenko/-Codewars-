//Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствует).
// ===========Мысли================
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
//==========МЫСЛИ=============================================================================
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

//Вам будет предоставлен массив строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе значений символов ASCII), а затем вернуть первое значение.
// Возвращаемое значение должно быть строкой и содержать "***" между каждой из ее букв. Вы не должны удалять или добавлять элементы из / в массив.
// =========================Мысли=============================================
//P.S задачка прикольная, отсортировал с помощью sort(),и вывел значение, потом опять сделал из строки массив, ну и соединил обратно в строку с добавлением звезд.
function twoSort(s) {
    let newArr =  s.sort()[0].split('').join('***');
    return newArr;
}

console.log(twoSort(["over", "take", "the","bitcoin", "world", "maybe", "who", "knows", "perhaps"]))

// создать функцию, которая удаляет первый и последний символы строки
//============Мысли================
// Тут можно использовать один метод .slice(), я дубина.
let removeChar =(str) => str = str.split('').slice(1,-1).join('');

console.log(removeChar('eloquent'))

// возвращает строку "Да" для true или строку "Нет" для false.
let boolToWord = (bool) => checkBoll = bool == true ? 'Yes' : 'No';
console.log(boolToWord(false));

//Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// ... - кипирование массива.
let findSmallestInt = (args) => Math.min(...args);
console.log(findSmallestInt([78,56,232,12,8]))

// из строки сделать инициалы
let abbrevName = (name) => name = name.split(' ').map(word => word[0].toUpperCase()).join('.');
console.log(abbrevName('zahar borisenko'));

//Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель.
// Первый аргумент - это массив чисел, а второй - делитель.
function divisibleBy(numbers, divisor){
    let newArr = [];
    numbers.forEach(function (item){
        if (item % divisor == 0){
          return  newArr.push(item);
        }
    })
    return newArr;
}
console.log(divisibleBy([1,2,3,4,5,6], 2));

//Вы получаете массив с результатами тестов ваших сверстников. Теперь рассчитайте среднее значение и сравните свой результат!
//
// Верните значение True, если вы лучше, в противном случае False
function betterThanAverage(classPoints, yourPoints) {
    let newArr = classPoints.reduce((first,last) => first+last / classPoints.length,0);
    if (newArr < yourPoints)return true
    else return false
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88],75));


function isDivideBy(number, a, b) {
    let result = (number % a == 0 && number % b == 0) ? true : false;
    return result;
}
console.log(isDivideBy(-13,2,-6))

