
const addbtn = document.getElementById('adding');
const input = document.getElementById('inputbtn');
const unorderlist = document.getElementById('list');
const delet = document.getElementById('sbhtao');

addbtn.addEventListener('click', () => {
    const valuei = input.value;
    
    if (valuei.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li'); // <li> </li>
    li.innerText = valuei;

    const btn = document.createElement('button');
    btn.innerText = "x";

    btn.addEventListener('click', () => {
        li.remove(); // only this <li> gets removed
    });
    li.append(btn);

    console.log(li);
    unorderlist.appendChild(li);
    input.value = "";
});

delet.addEventListener('click', () => {
    unorderlist.innerHTML = "";
});

