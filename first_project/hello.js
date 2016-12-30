console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const note = require('./notes')
const argv = yargs.argv;
const command = argv._[0];


if ( command === 'add') {
  note.addNote(argv.title, argv.body)
} else if (command === 'list') {
	note.getAllNotes()
} else if (command === 'read') {
	note.getNote(argv.title)
} else if (command === 'delete') {
  note.removeNote(argv.title)
} else {
	console.log('Command not found')
}
