var fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
   const notes = loadNotes();
   console.log(notes)
};

const getSingleNotes = function (title) {
    const notes = loadNotes();
    const newNote = notes.filter(note => {
        if(note.title == title){
            console.log(note)
        }

    })
 };

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicate = notes.filter((note) => {
        return note.title == title;
    });

    debugger;

    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body,
        });

        saveNote(notes);
    } else {
        console.log(chalk.red.inverse.bold("Duplicate title, already taken"));
    }
};

const saveNote = function (notes) {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log(chalk.green.inverse.bold("Notes saves"));
};

const loadNotes = function () {
    try {
        const buffers = fs.readFileSync("notes.json");
        const dataJSON = buffers.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const deleteNotes = function (title) {
    const notes = loadNotes()

    const newNoteArr = notes.filter(note => { return  note.title != title })
 
    if(notes.length > newNoteArr.length){
        console.log(chalk.green.inverse.bold('Note Successfully removed'))
        saveNote(newNoteArr)
     }else{
        console.log(chalk.red.inverse.bold('Note not Found'))
     }
 } 




module.exports = {
    getNotes,
    addNotes,
    deleteNotes,
    getSingleNotes
};