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
if(battle=true){
  
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
    if(event.keyCode === 83 && battle){
  
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
  addEventListener('keydown', event =>{
    if(event.keyCode === 70){
  
      player1[1].attack(player2[0], 2)
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`El Médico no atendió a Ing. Civil y este perdió 90 puntos de vida`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 81){
  
      player1[0].attack(player2, 0)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Abogangster pidió para las copias y causó 500 de daño a los enemigos`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 87){
  
      
      player1[0].attack(player1, 1)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Abogangster sacó a sus amigos del torito y esto les brindó 30 puntos de fuerza`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 69){
  
      
      player1[0].attack(player2[2], 2)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Abogangster golpeó a Ing. en Sistemas con su maletín reduciendo su salud en 90 puntos`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 82){
  
      
      player1[0].attack(player2[1], 3)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Abogangster le echó el perro a Ing. Química y le causó 50 puntos de daño`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 90){
  
      if(player1[2].hp>0){
        player1[2].attack(player2[0], 0)
      
        ctx.beginPath()
        ctx.fillStyle="white";
        ctx.font = "bold 16px sans-serif";
        ctx.fillText(`Admin. del SAT le dio un carpetazo a Ing. Química y le causó 110 puntos de daño`,50,50);
        ctx.closePath()
      }
      
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 88){
  
      
      player1[2].attack(player2, 1)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Admin. del SAT checó los impuestos y por miedo sus enemigos perdieron 50 puntos de defensa`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 67){
  
      
      player1[2].attack(player1[2], 2)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Admin. del SAT se comió su garnacha e incremento 20 puntos a su hp`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 86){
  
      
      player1[2].attack(player2, 3)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Admin. del SAT recaudó impuestos y les quitó 70 puntos de vida a sus oponentes`,50,50);
      ctx.closePath()
    }
  })

  addEventListener('keydown', event =>{
    if(event.keyCode === 66){
  
      
      player2[0].attack(player1[0], 0)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ingeniero Civil le dio un tabicazo a Abogangster causándole 120 puntos de daño`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 78){
  
      
      player2[0].attack(player2, 1)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ingeniero Civil hizo una barda para defender a sus amigos y subió sus puntos de defensa 40 puntos`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 77){
  
      
      player2[0].attack(player1, 2)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ingeniero Civil lanzó bolsas de cemento y causó 50 puntos de daño a sus oponentes`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 188){
  
      
      player2[0].attack(player1[1], 3)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ingeniero Civil hizo un último esfuerzo y dañó a Medico del IMSS con 80 puntos`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 72){
  
      
      player2[1].attack(player1[1], 0)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ing. Química lanzó acido a Médico del IMSS y le causó 120 puntos de daño`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 74){
  
      
      player2[1].attack(player2, 1)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ing. Química le dió Metanfetamina a sus compañeros y les dió 80 puntos de fuerza`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 75){
  
      
      player2[1].attack(player1[2], 2)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ing. Química combinó elementos y se los arrojó a Admin. del SAT causándole 100 puntos de daño`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 76){
  
      
      player2[1].attack(player1[0], 3)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ing. Química le hizo una cubaby al Abogangster y redujo su salud en 80 puntos`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 84){ 
      player2[2].attack(player1[0], 0)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Su código le compiló al de Sistemas y le causó 80 de daño a Abogangster`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 89){
  
      
      player2[2].attack(player2[2], 1)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ing. en Sistemas se echó un cafecito y recuperó 30 puntos de salud`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 85){
  
      
      player2[2].attack(player1[2], 2)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ing. en Sistemas le aventó su PC a la Admin. del SAT causando 90 puntos de daño`,50,50);
      ctx.closePath()
    }
  })
  addEventListener('keydown', event =>{
    if(event.keyCode === 73){
  
      
      player2[2].attack(player1, 3)
      
      ctx.beginPath()
      ctx.fillStyle="white";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(`Ing. en Sistemas aburrió a su enemigo con su proyecto y les restó 50 puntos de defensa`,50,50);
      ctx.closePath()
    }
  })

}
