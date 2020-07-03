var fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
   const notes = loadNotes();

   notes.forEach(note => {
    console.log(chalk.white.inverse.bold(note.title + ", " + note.body))
   });
  
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
        
    if(note){
        console.log(chalk.white.inverse.bold(note.title + ", " + note.body))    
    }else{
        console.log(chalk.red.inverse.bold("Note not found with this title"))
    }
  
 };

const addNotes = (title, body) => {
    const notes = loadNotes();
  
    const duplicate = notes.find((note) => note.title === title)
 
    if (!duplicate) {
        notes.push({
            title: title,
            body: body,
        });
        saveNote(notes);
    } else {
        console.log(chalk.red.inverse.bold("Duplicate title, already taken"));
    }
};

const saveNote = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log(chalk.green.inverse.bold("Note saved"));
};

const loadNotes = () => {
    try {
        const buffers = fs.readFileSync("notes.json");
        const dataJSON = buffers.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const deleteNote = (title) => {
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
    deleteNote,
    readNote
};