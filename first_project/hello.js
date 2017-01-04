const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const titleOptions = {
  description: 'Title of Note',
  demand: true
  alias: 't'
}

const bodyOptions = {
  description: 'Body of Note',
  demand: false,
  alias: 'b'
}
const argv = yargs
  .command('add', 'add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'Lists all note')
  .command('delete', 'Deletes a note', {
    title: titleOptions
  })
  .command('read', 'Read a Note', {
    title: titleOptions
  })
  .help()
  .argv;

const command = argv._[0];


if ( command === 'add') {
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note Created')
    printNote(note)
  } else {
    console.log('Title taken')
  }
} else if (command === 'list') {
	var allNotes = notes.getAllNotes()
  console.log(`printing ${allNotes.length} notes`);
  allNotes.forEach((note) => printNote(note));
} else if (command === 'read') {
	var note = notes.getNote(argv.title)
  if (note) {
    printNote(note)
  } else {
    console.log('Not Found');
  }
} else if (command === 'delete') {
  notes.removeNote(argv.title)
} else {
	console.log('Command not found')
}

function printNote(note) {
  console.log('--')
  console.log(note.title)
  console.log('--')
  console.log(note.body);
}
