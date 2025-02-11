// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
let evenNumb = true;
let number = 2;
isEven(number);
function isEven(number) {
    if (number % 2 != 0){
        
        evenNumb = false;
    } else {
        evenNumb = true;
    }
    return evenNumb
}
console.log(evenNumb)
