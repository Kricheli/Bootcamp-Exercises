
const checkbox = document.querySelector('#checkbox');
const img = document.querySelector('#img');

checkbox.addEventListener('click', function () {
        if(this.checked == true){
               img.src = 'https://live.staticflickr.com/2357/1842641007_ce9a3dc4c1_b.jpg'
        }else{
                img.src = '';
        }
})