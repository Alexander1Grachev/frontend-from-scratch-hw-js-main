/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/
document.addEventListener('DOMContentLoaded', function () {
  console.log('HTML разобран и DOM дерево построено')

  const WEB_TECH_IMAGES = [
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
  ]

  const prev = document.getElementById("prev-button");
  const next = document.getElementById("next-button");

  let imgToChange = document.getElementById("web-tech-image");

  let i = 0;

  next.addEventListener('click', function () {
    if (i < WEB_TECH_IMAGES.length - 1) {
      i++;
    } else {
      i = 0;
    }
    imgToChange.src = WEB_TECH_IMAGES[i]
  });

  prev.addEventListener('click', function () {
    if (i > 0) {
      i--;
    } else {
      i = WEB_TECH_IMAGES.length - 1;
    }
    imgToChange.src = WEB_TECH_IMAGES[i]
  });
})