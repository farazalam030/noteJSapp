const fs = require('fs')
const chalk = require('chalk')

console.log('notes.js')

const getNotes = function () {
    return "Your notes..."
}


const addNote = function (title, body) {

    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title

    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(notes)
    }
    else {
        console.log('Note Title Taken!!')
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToSave = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToSave.length) {
        console.log(chalk.green.inverse("Notes removed"))
        saveNotes(notesToSave)
    }
    else {
        console.log(chalk.inverse.red("nOtes not in list to remove"))
        saveNotes(notes)

    }
}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const databuffer = fs.readFileSync("notes.json")
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}



module.exports = { getNotes: getNotes, addNote: addNote, removeNote: removeNote }