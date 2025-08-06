const inputbtn=document.getElementById('inputbtn')
const container=document.getElementById('container')
const addbtn=document.getElementById('button-btn')
const notes = document.querySelector(".notes-container"); // ✅ recommended
const themebtn=document.getElementById('themebtn')
addbtn.addEventListener('click',()=>{
    const value=inputbtn.value;
  
  const box = document.createElement('div'); // 📦 wrapper box
 box.className='note'
  const textarea = document.createElement('textarea');
    const deletebtn = document.createElement('button');
    const editbtn=document.createElement('button');
    textarea.readOnly=true;
  box.style.backgroundColor = getRandomColor();

    textarea.value = value;
    editbtn.innerHTML="Edit"
    
    deletebtn.innerHTML = 'Delete';

    
let editing=true;

editbtn.addEventListener('click',()=>{
    if(editing){
        textarea.readOnly=false;
        textarea.focus();
        editbtn.innerText='Save'
editing = false;
    }else{
textarea.readOnly=true;
editbtn.innerHTML='Edit'
editing=true;
    }
})



    deletebtn.addEventListener('click',()=>{
        box.remove()
         removeFromLocalStorage(value);
    })

  
    box.appendChild(textarea);  // ✅ add textarea inside box
  box.appendChild(editbtn)
    box.appendChild(deletebtn); // ✅ add delete button in same box
    notes.appendChild(box); // ✅ add box to notes area



    inputbtn.value = "";
    
 
})


function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let cnt = true;

themebtn.addEventListener('click', () => {
  if (cnt) {
    container.style.backgroundColor = 'pink';
    container.style.color = 'white'; // optional text color
    themebtn.innerText = 'Enable Light Mode';
  } else {
    container.style.backgroundColor = 'white';
    container.style.color = 'black'; // back to normal
    themebtn.innerText = 'Enable Dark Mode';
  }

  cnt = !cnt; // toggle the flag
});
