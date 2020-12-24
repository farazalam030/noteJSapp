
const fs = require('fs')
// const book = {

//     title:'Indian',
//     author:'Iqra'
// }

// const bookJson = JSON.stringify(book)
// console.log(bookJson)


// const parseData = JSON.parse(bookJson)
// console.log(parseData.author)

// fs.writeFileSync('1-json.json',bookJsoconst dn)


// const dataBuffer =  fs.readFileSync("1-json.json") 
// const dataJson =  dataBuffer.toString()
// data=JSON.parse(dataJson)


// console.log(data.title)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const userr = JSON.parse(dataJson)


userr.name = "FARAZ"
userr.age = 30


const userrJson = JSON.stringify(userr)

fs.writeFileSync("1-json.json",userrJson)