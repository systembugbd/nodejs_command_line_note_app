// const fs = require('fs')
// const name = require('./utils')
// const validator = require('validator')
const fs    = require('fs');
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes');
 
yargs.version('1.1.0')
// fs.writeFileSync('notes.txt', 'My Name is Shaheb Ali')
// fs.appendFileSync('notes.txt', '\nI am backend Developer')


// fs.appendFileSync('notes.txt', notes('\nI will desice my note from any where'))


// console.log(validator.isEmail(notes('wwwdonus@gmail.com')))
// let msg = notes('Success message showin green BG with NODE Chalk module')
// console.log(chalk.bgGreen(msg))
// console.log(chalk.bgRed(msg))
// console.log(chalk.green(msg))
// console.log(chalk.yellow(msg))

// console.log(chalk.yellow.inverse.bold(msg))
// // console.log(chalk.bgYellow(msg).fontcolor(''))
// console.log(chalk.bgCyan(msg).bold)
// console.log(chalk.bgRed.bold('Error'));


// const miles = 18;
// const calculateFeet = miles => miles * 5280;
 
// console.log(chalk`
//     There are {red.bold 5280 feet} in a mile.
//     In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
// `);

// console.log(process.argv)

// if(process.argv[2] === 'add'){
//     console.log(chalk.bgGreen.inverse.bold('Note Added....'))
// }else if(process.argv[2] == 'remove'){
//     console.log(chalk.bgRed.bold('Note Removing...'))
// }else{
//     console.log(chalk.red.bold('There is no user input ...'))
// }


// yargs.version('1.1.0')
// console.log(process.argv);


// yargs.command({
//     command: 'add',
//     describe: 'add of notes',
//     handler: function(){
//         console.log('This is the add of Notes');
//     }
// })



// yargs.command({
//     command: 'list',
//     describe:'just list of note',
//     handler: function () { 
//         console.log('List of Note')
//      }
// })
// console.log(yargs.argv);


// yargs.command({
//     command:'add',
//     describe:'Note add',
//     builder:{
//         title:{
//             describe:'Title Note',
//             demandOption: true,
//             type: 'string'
//         },
//         body:{
//             describe:'Note body',
//             demandOption: true,
//             type:'string'
//         },
//         age:{
//             describe:'Note body',
//             demandOption: true,
//             type:'string'
//         }
//     },
//     handler: function(argv){
//         console.log(chalk.green.inverse.bold(argv.title), chalk.bgCyan.bold(argv.body), chalk.bgCyan.bold(argv.age))
//     }
// })

// yargs.parse()
 

// yargs.command({
//     command:'add',
//     describe:'Create JSON file with user Input',
    
//     builder:{
//         name:{
//             describe:'name of the person',
//             demandOption: true,
//             type:'string'
//         },
//         age:{
//             describe:'age of the person',
//             demandOption: true,
//             type:'number',
//         },
//         education:{
//             describe:'education of Person',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
      
//         const person = {
//             name: argv.name,
//             age: argv.age,
//             eduction:argv.education
//         }
//         const jsonData = JSON.stringify(person);

//         fs.writeFileSync('../playground/1-json.json', jsonData)
//     }
// })

// if(yargs.parse()){
//     console.log(chalk.green.inverse.bold('Successfully Done'))
// }else{
//     console.log(chalk.red.inverse.bold('Error Occoured'))
// }





/**
 * NOTE APP WITH YARGS
 * Command line app
 * add, delete, get and getSingle function handeler to get the desired result  
 */

yargs.command({
    command:'add',
    describe: 'addNote',
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command:'delete',
    describe:'delete note with title',
    handler: function(argv){
        notes.deleteNotes(argv.title);
    }
})
yargs.command({
    command:'get',
    describe:'get all note',
    handler: function(){
        notes.getNotes();
    }
})

yargs.command({
    command:'getSingle',
    describe:'get all note',
    handler: function(argv){
        notes.getSingleNotes(argv.title);
    }
})
yargs.parse()