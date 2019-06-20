  window.onload = function() {
   board.draw()
   personajeini.draw()
 
   document.getElementById("start-button").onclick = function() {
    
    startGame();
   };


   
  function update(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frames++
    board.draw()
    board.drawButtonI()
    board.drawCharacters()
    selectP.draw()
    ingSis.draw()
    ingCiv.draw()
    medico.draw()
    administradora.draw()
    ingQui.draw()
    contadora.draw()
    artista.draw()
    abogado.draw()
    
  }


  
    


   function startGame() {
     if (interval) return
     interval = setInterval(update, 1000/60)

   }

 };