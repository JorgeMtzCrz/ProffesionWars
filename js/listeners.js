//player1
addEventListener('keydown', event =>{

  if(event.keyCode === 49 && interval && player1.length < 3 && !player1.includes(ingSis) ){
    player1.push(ingSis)
   }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 50 && interval && player1.length < 3 && !player1.includes(ingCiv) ){
    player1.push(ingCiv)
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 51 && interval && player1.length < 3 && !player1.includes(medico) ){
    player1.push(medico)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 52 && interval && player1.length < 3 && !player1.includes(administradora) ){
    player1.push(administradora)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 53 && interval && player1.length < 3 && !player1.includes(ingQui)){
    player1.push(ingQui)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 54 && interval && player1.length < 3 && !player1.includes(contadora) ){
    player1.push(contadora)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 55 && interval && player1.length < 3 && !player1.includes(artista) ){
    player1.push(artista)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 56 && interval && player1.length < 3 && !player1.includes(abogado) ){
    player1.push(abogado)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})


//player2
addEventListener('keydown', event =>{

  if(event.keyCode === 65 && interval && player2.length < 3 && !player2.includes(ingSis) ){
    player2.push(ingSis)
   }  
})

addEventListener('keydown', event =>{
  if(event.keyCode === 83 && interval && player2.length < 3 && !player2.includes(ingCiv) ){
    player2.push(ingCiv)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  } 
})

addEventListener('keydown', event =>{
  if(event.keyCode === 68 && interval && player2.length < 3 && !player2.includes(medico) ){
    player2.push(medico)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 70 && interval && player2.length < 3 && !player2.includes(administradora) ){
    player2.push(administradora)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 71 && interval && player2.length < 3 && !player2.includes(ingQui)){
    player2.push(ingQui)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 72 && interval && player2.length < 3 && !player2.includes(contadora) ){
    player2.push(contadora)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 74 && interval && player2.length < 3 && !player2.includes(artista) ){
    player2.push(artista)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 75 && interval && player2.length < 3 && !player2.includes(abogado) ){
    player2.push(abogado)
  }else{
    return 'No puedes seleccionar dos veces el mismo personaje'
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 8 && interval  ){
    player1.pop()
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 80 && interval ){
    player2.pop()
  }
})
//Batalla
addEventListener('keydown', event =>{
  if(event.keyCode === 13  ){
    select()
  }
})

//ataque
addEventListener('keydown', event =>{
  if(event.keyCode === 81){
    player1[0].noManaP1(player2, 0)
  }
})

addEventListener('keydown', event =>{
  if(event.keyCode === 65){

    player1[1].attack(player1, 0)
    ctx.beginPath()
    ctx.fillStyle="white";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText(`Médico del IMSS usó Paracetamol y restauró 60 puntos de vida a sus compañeros`,50,50);
    ctx.closePath()
  }
})
addEventListener('keydown', event =>{
  if(event.keyCode === 83){

    player1[1].attack(player1, 1)
    ctx.beginPath()
    ctx.fillStyle="white";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText(`Médico del IMSS usó Atropina y restauró 50 puntos de fuerza a sus compañeros`,50,50);
    ctx.closePath()
  }
})
addEventListener('keydown', event =>{
  if(event.keyCode === 68){

    player1[1].attack(player2[1], 2)
    ctx.beginPath()
    ctx.fillStyle="white";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText(`Médico Sermoneó a Ingeniera Química y redujo su defensa en 40 puntos`,50,50);
    ctx.closePath()
  }
})