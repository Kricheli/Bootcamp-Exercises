const container = document.createElement('id');
document.body.appendChild(container);

const lightBulbOn = document.createElement('img');
lightBulbOn.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
container.appendChild(lightBulbOn);

const turnOff = function (){lightBulbOn.src === 'https://www.w3schools.com/js/pic_bulbon.gif' ?

lightBulbOn.src = 'https://www.w3schools.com/js/pic_bulboff.gif': lightBulbOn.src = 'https://www.w3schools.com/js/pic_bulbon.gif'}

lightBulbOn.addEventListener('click', turnOff);

