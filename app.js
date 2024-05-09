'use strict';

const colorBoxes = document.querySelector('.color-boxes');
const color = document.querySelector('#color');
const hex = document.querySelector('#hex');

// const colorBoxes = document.querySelector('.color-boxes');
// const color = document.querySelector('#color');
// const hex = document.querySelector('#hex');

// もし localStorage から 'items' というキーでデータが取得できた場合は、そのデータをJSONパースして取得し、colorsArray に代入します。そうでない場合は、空の配列 [] を colorsArray に代入します。

// let colorsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

let colorsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

colorsArray.forEach(divMaker);

function divMaker(text) {
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  newBox.style.backgroundColor = text.colorName;
  newBox.innerHTML = '<h2>' + text.colorName + '<h2>' +
  '<h2>' + text.hexCode + '<h2>';
  colorBoxes.appendChild(newBox);
}

// colorsArray.forEach(divMaker);
// function divMaker(text) {
//   const div = document.createElement('div');
//   div.className = 'box';
//   div.style.background = text.color_name;
//   div.innerHTML = '<h2>' + text.color_name + '</h2>' +
//                   '<h2>' + text.hex_code + '</h2>';
//   colorBoxes.appendChild(div);
// }

function add() {
  let colorInfo = {
    'colorName': color.value,
    'hexCode': hex.value,
  }
  colorsArray.push(colorInfo);
  localStorage.setItem('items', JSON.stringify(colorsArray));
  divMaker(colorsArray[colorsArray.length - 1]);
  color.value = '';
  hex.value = '';
}

// function add() {
//   let color_info = {
//     'colorName' : color.value,
//     'hexCode' : hex.value,
//   }
//   colorsArray.push(color_info);
//   localStorage.setItem('items', JSON.stringify(colorsArray));
//   divMaker(colorsArray[colorsArray.length - 1]);
//   color.value = '';
//   hex.value = '';
// }

function del() {
  localStorage.clear();
  colorsArray = [];
  colorBoxes.innerHTML = '';
}

// function del() {
//   localStorage.clear();
//   colorsArray = [];
//   colorBoxes.innerHTML = '';
// }