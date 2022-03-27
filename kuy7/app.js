// //В этом ката вас просят возвести в квадрат каждую цифру числа и объединить их
// function squareDigits(num){
//     num = String(num).split('').map(value => value ** 2).join('');
//     return Number(num);
// }
//
// console.log(squareDigits(3212))

// //Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными всеми гласными.
// let disemvowel = (str) => str.replace(/[aeioUAEIOU]/g,'');
// console.log(disemvowel('No offense but,\\nYour writing is among the worst I\'ve ever read'));

// //Возвращает количество (количество) гласных в данной строке. Мы будем рассматривать a, e, i, o, u как гласные для этого ката (но не y).
// // Входная строка будет состоять только из строчных букв и/или пробелов.
// function getCount(str) {
//     let newArr = [];
//     str =  str.split('').filter(valueStr =>{
//         if (valueStr == 'a' || valueStr == 'e' || valueStr == 'i' || valueStr == 'o' || valueStr == 'u'){
//           return newArr.push(valueStr);
//         }
//     })
//     return newArr.length
// }
//
// console.log(getCount('abracadabra'));


// //В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// //Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.
// function highAndLow(numbers){
// let newArr = numbers.split(' ');
//      let max = Math.max.apply(null,newArr);
//      let min = Math.min.apply(null,newArr);
//      return `${max} ${min}`;
// }
//
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))