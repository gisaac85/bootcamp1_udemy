// var count = -10;
// while (count <= 19) {
//     console.log(count);
//     count++;
// }

// console.log('===============================');

// var even = 10;
// while (even <= 40) {
//     if (even % 2 === 0) {
//         console.log(even);
//     }
//     even++;
// }

// console.log('===============================');

// var odd = 300;
// while (odd <= 333) {
//     if (odd % 2 !== 0) {
//         console.log(odd);
//     }
//     odd++;
// }

// console.log('===============================');

// var num = 5;
// while (num <= 50) {
//     if ((num % 3 === 0) && (num % 5 === 0)) {
//         console.log(num);
//     }
//     num++;
// }

for (var i = -10; i <= 19; i++) {
    console.log(i);
}
console.log('===============================');
for (var i = 10; i <= 40; i += 2) {
    console.log(i);
}
console.log('===============================');
for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log('===============================');
for (var i = 5; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log(i);
    }
}