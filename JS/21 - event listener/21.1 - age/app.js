var input = document.createElement('input');
input.setAttribute('value', '');
document.body.appendChild(input);

var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
document.body.appendChild(submit);

const changeValue = function(){(input.value > 18 ? input.value = "you're old enough to drink" : input.value =  "you're too young")
}

submit.addEventListener('click', changeValue)
