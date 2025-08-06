const inputbtn=document.getElementById('inputbtn')
const addbtn=document.getElementById('addbtn')
const themebtn=document.getElementById('theme')

const ul=document.getElementById('unordered')
const hatao=document.getElementById('dele')


addbtn.addEventListener('click',()=>{

    const value=inputbtn.value;
    const li=document.createElement('li')
    li.innerText=value;
const deletebtn=document.createElement('button')
deletebtn.innerText='delete'
li.append(deletebtn)

deletebtn.addEventListener('click',()=>{
    li.remove();

})

    ul.append(li)
inputbtn.value=""

})

hatao.addEventListener('click',()=>{
    ul.remove()
})

let cnt = true;

themebtn.addEventListener('click', () => {
    if (cnt === true) {
        document.body.style.backgroundColor = 'lavender';
        cnt = false;
    } else {
        document.body.style.backgroundColor = 'black';
        cnt = true;
    }
});