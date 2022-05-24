const personName = document.querySelector('#personName');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const form = document.querySelector('#form');

const formData = {};
for(let input of [personName, age, email]){
        input.addEventListener('input', ({target})=>{
                const {name, value} = target;
                formData[name] = value
        });
}

form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newWindow = openWin();
        const changeBtn = newWindow.document.querySelector('#change');
        const confirmBtn = newWindow.document.querySelector('#confirm');

        changeBtn.addEventListener('click', () => {
                newWindow.close();
        });
        confirmBtn.addEventListener('click', () => {
                newWindow.close();
                document.querySelector('h1').style.display = "block";
        });
});

function openWin() {
        const myWindow = window.open("", "myWindow","width=400,height=250,top=300,left=750"
        );
        myWindow.document.body.innerHTML = "";
        myWindow.document.write(`<h1>Your current info is: </h1><p>Name: ${formData.name || ""}
        <br /><br /> Age: ${formData.age || ""}<br /><br /> Email: ${formData.email || ""}</p><br />
        <button id="confirm">confirm
        </button>
        <button id="change">change
        </button>`);
        return myWindow
}