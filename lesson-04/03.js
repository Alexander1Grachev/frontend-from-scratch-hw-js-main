/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
    const commonElements = [];
    let i;


    for (let num of array1 && array2) {
        if (includesElement(array1, num) === includesElement(array2, num)) { // если элементы 1 массива равны элементам 2го запуш их 
            commonElements.push(num)
        }
    }
    return commonElements
}


const commonElements = findCommonElements([1, 2, 3], [2, 3, 4]);
console.log(commonElements);