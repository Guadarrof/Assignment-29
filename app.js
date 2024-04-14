const { log } = require('node:console');
const fs = require ('node:fs');

const readFile = ()=>{
    const file=  fs.readFileSync('./history.txt')
    const data = file.toString()
    const rows= data.split('\n')
    const words=data.split(/\s+/)
    const matrix = rows.map(row=> row.split(' '))
    console.log(`Texto completo: ${data}`)
    console.log(`Filas: ${matrix.length}`)
    console.log(`Palabras: ${words.length}`)
    console.log(`Caracteres: ${data.length}`)
}

readFile()
