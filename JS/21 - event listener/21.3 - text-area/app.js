var header = document.createElement('p');
document.body.appendChild(header);
header.innerText = 'why are you interested in this position?';

var textarea = document.createElement('textarea');
document.body.appendChild(textarea);

var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
document.body.appendChild(submit);

var message = document.createElement('p');
document.body.appendChild(message);

const messageLength = function(){
        if(textarea.value.length  < 100){
                message.innerText = 'this is too short! , please elobrate'
        }else{
                message.innerText = "";
        }
}

submit.addEventListener('click', messageLength)



