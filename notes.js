const fs = require('fs')
const chalk = require('chalk')

console.log('notes.js')

const getNotes = () => {
    return "Your notes..."
}


const addNote = (title, body) => {

    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    // console.log(duplicateNote)
    // console.log(title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title

    debugger

    // })
    // if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('New Node Added'))
    }
    else {
        console.log(chalk.inverse.red('Note Title Taken!!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToSave = notes.filter((note) => note.title !== title)

    if (notes.length > notesToSave.length) {
        console.log(chalk.green.inverse("Notes removed"))
        saveNotes(notesToSave)
    }
    else {
        console.log(chalk.inverse.red("nOtes not in list to remove"))
        saveNotes(notes)

    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync("notes.json")
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
const listNodes = () => {

    const notes = loadNotes()
    console.log(chalk.inverse('your notes'))
    notes.forEach((note) => {
        console.log(note.title)

    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.cyan.inverse(note.title) + " \n" + chalk.bold.green.inverse(note.body))
    }
    else {
        console.log(chalk.red.inverse.italic.body("No NOte Found"))
    }

}


module.exports = { getNotes: getNotes, addNote: addNote, removeNote: removeNote, listNodes: listNodes, readNote: readNote }