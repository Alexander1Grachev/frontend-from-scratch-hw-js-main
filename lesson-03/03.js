// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

let largestNumb = 0;
findLargest(888, 6, 32)
function findLargest(number_1, number_2, number_3) {
    switch (true) {
        case number_1 > (number_2 && number_3):
            largestNumb = number_1
            return largestNumb
            
        case number_2 > (number_1 && number_3):
            largestNumb = number_2
            return largestNumb
            
        case number_3 > (number_1 && number_2):
            largestNumb = number_3
            return largestNumb
            
    }
}
console.log(largestNumb)