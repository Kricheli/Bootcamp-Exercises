const form = document.querySelector('[name = "verify"]');
const inputes = document.querySelectorAll('.inputs input');

function handleInput(e) {
const input = e.target;
if(input.nextElementSibling && input.value);{
  input.nextElementSibling.focus();
}
}
function handlePaste(e){
     const paste = e.clipboardData.getData('text');
     inputes.forEach((input, index) => {input.value = paste[index] || ''})
}

inputes[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput);
