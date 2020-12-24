const validator = require('validator')
const chalk = require('chalk')

const yargs = require('yargs')
const notes = require('./notes.js')

// const { demandOption, string, require } = require('yargs')


// console.log(getNotes())

// console.log(validator.isURL('farazlive.in'))

// console.log(chalk.greenBright("Success"))
// console.log(chalk.bold.inverse.yellowBright("Success"))

// console.log(chalk.bold.cyanBright("Success"))


// console.log(chalk.bold.blueBright(process.argv[2]))
//customising  yargs version
yargs.version("1.2.3")

// add , remove , read, list
// create add command
yargs.command({
    command: 'add',
    describe: "add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },

        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }

    },

    handler: function (argv) {
        // console.log("\n\nTitle: " + argv.title + "\nBody:  " + argv.body+"\n\n") 
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: "Remove a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log("Removed")
        notes.removeNote(argv.title)
    }
}
)

// yargs.command({
//     command:"read",
//     describe:"Reading note",
//     handler:function(){
//         console.log("Read it!!")
//     }
// })

// yargs.command({
//     command:"list",
//     describe:"listing note",

//     handler:function(){
//         console.log("listing nodes !")
//     }
// })




// console.log(yargs.argv)
yargs.parse()
// const command  = process.argv[2]

// console.log(process.argv)
// if (command === 'add'){
//     console.log("Addition")
// }
// else if (command === 'remove')
// {
//     console.log("remove commmand")
// }


//  const add  = require('./utils.js')
// // const name ="faraz"

// const sum = add(2,1)
// console.log(sum )



