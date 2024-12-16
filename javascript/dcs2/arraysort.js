const array = [3, 5, 7, 2, 1, 9, 4, 8];
//Bubble Sort algorithm (n^2 comparison good for small arrays)
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i; j++) {
//         if (array[j] > array[j + 1]) {
//             let temp = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] = temp;
//         }
//     }
// }
array.sort()
console.log(array);

