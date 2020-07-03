
const fs    = require('fs');
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes');
const { string } = require('yargs');
 
yargs.version('1.1.0')



/**
 * NOTE APP WITH YARGS
 * Command line app
 * add, delete, get and getSingle function handeler to get the desired result  
 */

yargs.command({
    command:'add',
    describe: 'addNote',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'delete',
    describe:'delete note with title',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list of all note',
    handler(){
        notes.getNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read single note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()