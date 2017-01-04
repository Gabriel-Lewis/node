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
  var notes = fetchNotes();
  var return_note = notes.filter((note) => note.title === title);
  return return_note[0]
}

const getAllNotes = (title) => {
  return fetchNotes();
}


const removeNote = (title) => {
  var notes = fetchNotes()
  var newNotes = notes.filter((note) => note.title !== title);
  saveNotes(newNotes)
}

module.exports = {
	addNote,
	getNote,
  getAllNotes,
	removeNote
}
