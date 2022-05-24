const header = document.createElement('h1');
header.innerText = 'Select your font size';
document.body.appendChild(header);

const plusButton = document.createElement('button');
plusButton.innerText = '+';
document.body.appendChild(plusButton);

const minusButton = document.createElement('button');
minusButton.innerText = '-';
document.body.appendChild(minusButton);

let fontSizePx = getComputedStyle(header).fontSize;
let headerFontSize = parseFloat(fontSizePx);

const increaseSize = function(){
(headerFontSize < 100) ? headerFontSize += 2 : false;
header.style.fontSize = headerFontSize + 'px'
}

const decreaseSize = function(){
        (headerFontSize > 6) ? headerFontSize -= 2 : false;
        header.style.fontSize = headerFontSize + 'px'
        }

plusButton.addEventListener('click', increaseSize);
minusButton.addEventListener('click', decreaseSize);



