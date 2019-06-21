function update2(){
  clearInterval(interval)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    frames++
    board.draw()
    board.drawComands()
    player1.forEach(player=>{
      if(player===ingSis)player.drawPlayer1()
      else if(player===ingCiv)player.drawPlayer1()
      else if(player===medico)player.drawPlayer1()
      else if(player===administradora)player.drawPlayer1()
      else if(player===ingQui)player.drawPlayer1()
      else if(player===contadora)player.drawPlayer1()
      else if(player===artista)player.drawPlayer1()
      else if(player===abogado)player.drawPlayer1()
    })
    player1.forEach(player=>{
      if(player===ingSis)player.drawStats1()
      else if(player===ingCiv)player.drawStats1()
      else if(player===medico)player.drawStats1()
      else if(player===administradora)player.drawStats1()
      else if(player===ingQui)player.drawStats1()
      else if(player===contadora)player.drawStats1()
      else if(player===artista)player.drawStats1()
      else if(player===abogado)player.drawStats1()
    })
    player1.forEach(player=>{
      if(player===ingSis)player.drawPowers1()
      else if(player===ingCiv)player.drawPowers1()
      else if(player===medico)player.drawPowers1()
      else if(player===administradora)player.drawPowers1()
      // else if(player===ingQui)player.drawPowers1()
      // else if(player===contadora)player.drawPowers1()
      // else if(player===artista)player.drawPowers1()
      else if(player===abogado)player.drawPowers1()
    })
    
    player2.forEach(player=>{
      if(player===ingSis)player.drawPlayer2()
      else if(player===ingCiv)player.drawPlayer2()
      else if(player===medico)player.drawPlayer2()
      else if(player===administradora)player.drawPlayer2()
      else if(player===ingQui)player.drawPlayer2()
      else if(player===contadora)player.drawPlayer2()
      else if(player===artista)player.drawPlayer2()
      else if(player===abogado)player.drawPlayer2()
     
    })
    player2.forEach(player=>{
      if(player===ingSis)player.drawStats2()
      else if(player===ingCiv)player.drawStats2()
      else if(player===medico)player.drawStats2()
      else if(player===administradora)player.drawStats2()
      else if(player===ingQui)player.drawStats2()
      else if(player===contadora)player.drawStats2()
      else if(player===artista)player.drawStats2()
      else if(player===abogado)player.drawStats2()
    })
    player2.forEach(player=>{
      if(player===ingSis)player.drawPowers2()
      else if(player===ingCiv)player.drawPowers2()
      else if(player===medico)player.drawPowers2()
      else if(player===administradora)player.drawPowers2()
      else if(player===ingQui)player.drawPowers2()
      // else if(player===contadora)player.drawPowers2()
      // else if(player===artista)player.drawPowers2()
      else if(player===abogado)player.drawPowers2()
    })
    checkHP1()
    checkHP2()
  }

function select(){
  
  setInterval(update2, 100000/40)
}

function checkHP2(){
  if(ingSis.hp <= 0 && ingQui.hp <= 0 && ingCiv.hp <= 0)
  gameOver()
  
}
function checkHP2(){
  if(ingSis.hp <= 0 && ingQui.hp <= 0 && ingCiv.hp <= 0)
  gameOver1()
  
}
function checkHP1(){
  if(abogado.hp <= 0 && medico.hp <= 0 && administradora.hp <= 0)
  gameOver2()
  
}

function gameOver1(){
  clearInterval(interval)
  interval
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  board.draw()
  ctx.fillStyle="white";
  ctx.font = "bold 46px sans-serif";
  ctx.fillText(`Felicidades Jugador 1 eres el ganador`,40,150);
  player1.forEach(player=>{
    if(player===ingSis)player.drawWin1()
    //else if(player===ingCiv)player.drawWin1()
    else if(player===medico)player.drawWin1()
    else if(player===administradora)player.drawWin1()
    // else if(player===ingQui)player.drawPowers1()
    // else if(player===contadora)player.drawPowers1()
    // else if(player===artista)player.drawPowers1()
    else if(player===abogado)player.drawWin1()
  })
}
function gameOver2(){
  clearInterval(interval)
  interval
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  board.draw()
  ctx.fillStyle="white";
  ctx.font = "bold 46px sans-serif";
  ctx.fillText(`Felicidades Jugador 2 eres el ganador`,40,150);
}

// if(salud){
//   gameOver()
// }
// function gameOver(){
//   ctx.fillText(s)
// }
  