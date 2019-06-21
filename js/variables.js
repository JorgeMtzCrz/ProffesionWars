const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let interval
let frames = 0
const player1 =[]
const player2 = []
let battle 


const board = new Board()
const personajeini = new CharacterIni()
const selectP = new SelectPlayer()
const ingSis = new IngSistemas('Ingeniero en Sistemas')
const ingCiv = new IngCivil('Ingeniero Civil')
const medico = new Medico('Médico del IMSS')
const administradora = new Administradora('Administradora del SAT')
const ingQui = new IngQuimica('Ingeniera Química')
const contadora = new Contadora('Contadora de la SHCP')
const artista = new Artista('Artista Vegano')
const abogado = new Abogado('Abogangster Petfriendly')