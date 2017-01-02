console.log('Starting Notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return []
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


const addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }
  var duplicatesNotes = notes.filter((note) => note.title === title);

  if (duplicatesNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note
  }
}

const getNote = (title) => {
	console.log('Getting Note', title)
}

const removeNote = (title) => {
	console.log('Removing Note', title)
}

module.exports = {
	addNote,
	getNote,
	fetchNotes,
	removeNote
}
