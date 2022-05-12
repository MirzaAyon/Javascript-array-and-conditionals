var mySelf = ['ayon', 'plabon', 'dui', 'bhai', 'chino', 'oderke'];

var bhaiIndex = mySelf.indexOf('bhai');
console.log(bhaiIndex);
//index mane shuchi/obosthan/posithon
//bhai er position bolse
var secondIndex = mySelf[2];
console.log(secondIndex)
//2nd index e ke ache ta bolse
var secondIndex = mySelf[112];
console.log(secondIndex)
//undefined ashbe karon er kono positiion nai 


var numbers = [12, 23, 34, 45, 56, 78, 89];
// var index = numbers.indexOf(45);
var index = numbers.indexOf(145); //array er modhe nai tai position -1
console.log(index);


//ebar array er maan replace korechi
console.log(numbers);
numbers[1] = 95;
console.log(numbers);
numbers[4] = 546;
console.log(numbers);