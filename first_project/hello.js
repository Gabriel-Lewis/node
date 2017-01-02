console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')
const argv = yargs.argv;
const command = argv._[0];


if ( command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note Created')
    console.log('--')
    console.log(note.title)
    console.log('--')
    console.log(note.body);

  } else {
    console.log('Title taken')
  }
} else if (command === 'list') {
	notes.getAllNotes()
} else if (command === 'read') {
	notes.getNote(argv.title)
} else if (command === 'delete') {
  notes.removeNote(argv.title)
} else {
	console.log('Command not found')
}
