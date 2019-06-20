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
      // else if(player===administradora)player.drawPowers1()
      // else if(player===ingQui)player.drawPowers1()
      // else if(player===contadora)player.drawPowers1()
      // else if(player===artista)player.drawPowers1()
      // else if(player===abogado)player.drawPowers1()
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
    clearInterval(interval)
  }

function select(){
 
  setInterval(update2, 100000/50)
}
  