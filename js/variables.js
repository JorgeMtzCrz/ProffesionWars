const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let interval
let frames = 0
let player1 =[]


const board = new Board()
const personajeini = new CharacterIni()
const selectP = new SelectPlayer()
const ingSis = new IngSistemas()