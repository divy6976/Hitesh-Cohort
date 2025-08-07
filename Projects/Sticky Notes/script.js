const inputbtn = document.getElementById('inputbtn');
const container = document.getElementById('container');
const addbtn = document.getElementById('button-btn');
const notes = document.querySelector('.notes-container');
const themebtn = document.getElementById('themebtn');

// Helper: Get notes from localStorage
function getNotesFromStorage() {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes) : [];
}

// Helper: Save notes to localStorage
function saveNotesToStorage(notesArr) {
  localStorage.setItem('notes', JSON.stringify(notesArr));
}

// Render all notes from storage
function renderNotes() {
  notes.innerHTML = '';
  const notesArr = getNotesFromStorage();
  notesArr.forEach((note, idx) => {
    createNoteElement(note.text, note.color, idx);
  });
}

// Create and append a note element
function createNoteElement(text, color, idx) {
  const box = document.createElement('div');
  box.className = 'note';
  box.style.backgroundColor = color;

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.readOnly = true;

  const editbtn = document.createElement('button');
  editbtn.innerHTML = 'Edit';

  const deletebtn = document.createElement('button');
  deletebtn.innerHTML = 'Delete';

  let editing = true;
  editbtn.addEventListener('click', () => {
    if (editing) {
      textarea.readOnly = false;
      textarea.focus();
      editbtn.innerText = 'Save';
      editing = false;
    } else {
      textarea.readOnly = true;
      editbtn.innerHTML = 'Edit';
      editing = true;
      // Save edit to storage
      const notesArr = getNotesFromStorage();
      notesArr[idx].text = textarea.value;
      saveNotesToStorage(notesArr);
    }
  });

  deletebtn.addEventListener('click', () => {
    // Remove from DOM
    box.remove();
    // Remove from storage
    const notesArr = getNotesFromStorage();
    notesArr.splice(idx, 1);
    saveNotesToStorage(notesArr);
    renderNotes(); // re-render to update indices
  });

  box.appendChild(textarea);
  box.appendChild(editbtn);
  box.appendChild(deletebtn);
  notes.appendChild(box);
}

addbtn.addEventListener('click', () => {
  const value = inputbtn.value.trim();
  if (!value) return;
  const color = getRandomColor();
  // Save to storage
  const notesArr = getNotesFromStorage();
  notesArr.push({ text: value, color });
  saveNotesToStorage(notesArr);
  renderNotes();
  inputbtn.value = '';
});

// On page load, render notes
window.addEventListener('DOMContentLoaded', renderNotes);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let cnt = true;

themebtn.addEventListener('click', () => {
  if (cnt) {
    container.style.backgroundColor = '#171717'; // Matte Black
    container.style.color = 'white';
    themebtn.innerText = 'Enable Light Mode';
  } else {
    container.style.backgroundColor = 'white';
    container.style.color = 'black';
    themebtn.innerText = 'Enable Dark Mode';
  }
  cnt = !cnt;
});

let value = localStorage.getItem('key');
console.log(value);

