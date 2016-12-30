console.log('Starting Notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
  var notes = [];
  var note = {
    title,
    body
  }
  try {
    var noteString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(noteString);
  } catch(e) {

  }

  var duplicatesNotes = notes.filter(notes => note.title === title)
   if (duplicatesNotes.length === 0) {
     notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
   }

};

const getNote = (title) => {
	console.log('Getting Note', title)
}

const getNotes = () => {
  console.log('Getting all Notes');
}

const removeNote = (title) => {
	console.log('Removing Note', title)
}


module.exports = {
	addNote,
	getNote,
	getNotes,
	removeNote
}
