const input = document.getElementById('input');
const btn = document.getElementById('btn');
const section = document.querySelector('section')
btn.innerText = 'submit'

const smile = function() {
        const inputNum = input.value;
        if(isNaN(inputNum)){
                alert('Invalid input, please enter a number')
        }
        for(let i=0; i<inputNum; i++){
                const img = document.createElement('img');
                img.src='https://images.vexels.com/media/users/3/223218/isolated/preview/cb1f691a4ab49f5ae2fc31071eb3d040-in-love-emoji-icon.png';
                section.appendChild(img);
                img.height = '100';
                img.width = '100';
        }
}
const deleteInputValue = function () {
        input.value = '';
        section.innerHTML = '';
}

btn.addEventListener('click', smile)
input.addEventListener('click', deleteInputValue)