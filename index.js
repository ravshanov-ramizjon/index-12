let cars = [
    9000,
    14000,
    7000,
    30000,
    37000,
    55000,
    23000,
    75000,
    100000
]
let cheap = cars.filter(cars => cars < 35000)
cheap.sort((a,b) => a - b)

console.log(cheap);


let index = +prompt('Введите индекс!');
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];

if (!isNaN(index) && index >= 0 && index < arr.length) {
  arr.splice(index, 1);
  alert(`Имя с индексом ${index} удалено из списка.`);
  console.log(arr);
} else {
  alert(`Некорректный индекс.`);
}


let num = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];
let numbers = num.filter(item => typeof item === 'number').length;

if (numbers > 5) {
  console.log('Good');
}
