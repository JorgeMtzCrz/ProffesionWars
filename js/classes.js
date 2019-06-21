class Board{
  constructor (){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height= canvas.height
    this.img= new Image()
    this.img.src = './img/fondoinicio2.png'
    this.img.onload = () =>{
      this.draw()
    }
    this.img2= new Image()
    this.img2.src = './img/buttonini.png'
    this.x2 = 690
    this.y2 = 430
    this.width2 = 150
    this.height2= 50
  }
  // move(){
  //   this.x--
  //   if(this.x < -canvas.width) this.x = 0
  // }
  draw(){
    
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    
    
    // this.move()
  }
  drawCharacters() {
    
    player1.forEach((character, index) => {
      
        ctx.fillText(character.name, 720, 120 + (index * 20))
    })
    player2.forEach((character, index) => {
      
      ctx.fillText(character.name, 720, 320 + (index * 20))
    })
  }
  drawButtonI(){
    if(player1.length == 3 && player2.length == 3){
      ctx.fillText('Presiona Enter para continuar', this.x2, this.y2)
  

    }
  }
  drawComands(){
    ctx.fillText(`Q:`, 10 , 190 )
    ctx.fillText(`W:`, 10 , 210 )
    ctx.fillText(`E:`, 10 , 230 )
    ctx.fillText(`R:`, 10 , 250 )
    ctx.fillText(`A:`, 135 , 190 )
    ctx.fillText(`S:`, 135 , 210 )
    ctx.fillText(`D:`, 135 , 230 )
    ctx.fillText(`F:`, 135 , 250 )
    ctx.fillText(`Z:`, 260 , 190 )
    ctx.fillText(`X:`, 260 , 210 )
    ctx.fillText(`C:`, 260 , 230 )
    ctx.fillText(`V:`, 260 , 250 )
    ctx.fillText(`T:`, 475 , 190 )
    ctx.fillText(`Y:`, 475 , 210 )
    ctx.fillText(`U:`, 475 , 230 )
    ctx.fillText(`I:`, 475 , 250 )
    ctx.fillText(`H:`, 625 , 190 )
    ctx.fillText(`J:`, 625 , 210 )
    ctx.fillText(`K:`, 625 , 230 )
    ctx.fillText(`L:`, 625 , 250 )
    ctx.fillText(`B:`, 765 , 190 )
    ctx.fillText(`N:`, 765 , 210 )
    ctx.fillText(`M:`, 765 , 230 )
    ctx.fillText(` ,:`, 765 , 250 )

  }
}

class CharacterIni{
  constructor(){
    this.x = 150
    this.y = -10
    this.x2 = 350
    this.y2 = 250
    this.width = 600
    this.height = 450
    this.width2 = 200
    this.height2 = 250
    this.img = new Image()
    this.img2 = new Image()
    this.img.src = './img/banner.png'
    this.img2.src = './img/personajeini.png'
    this.img.onload = () =>{
      this.draw()
    }
  }
  move(){
     this.x += this.dx
     if(this.x<450) this.x +=this.dx
    }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img2, this.x2, this.y2, this.width2, this.height2)
    // ctx.drawImage(this.img, this.x - 300, this.y, this.width, this.height)
  }
}
class SelectPlayer{
  constructor(){
    this.x = 150
    this.y = 20
    this.width = 500
    this.height = 100
    this.img = new Image()
    this.img.src = ''
  }
    draw(){
      
      ctx.fillStyle="white"
      ctx.font = "bold 40px sans-serif";
      ctx.fillText("Selecciona tus personajes",150,50);
      ctx.font = "bold 15px sans-serif";
      ctx.fillText("Equipo Jugador 1",720,100);
      ctx.fillText("Equipo Jugador 2",720,300);
    //   ctx.font = "bold 12px sans-serif";
    // ctx.fillText(`${player1.name}`,720,120)
  }
}

class IngSistemas{
  constructor(name){
    this.x = 130
    this.y = 120
    this.x2 = 30
    this.y2 = 320
    this.x3 = 760
    this.y3 = 320
    this.width = 100
    this.height = 150
    this.img = new Image()
    this.img.src = './img/personajeini.png'
    this.img2 = new Image()
    this.img2.src = './img/personajeini-rigth.png'
    this.name = name
    this.powers = [
          {name: 'Codigo Compilado', damage: 80, sp: 40},
          {name: 'Fuerza del cafe', hp: 30, sp: 30},
          {name: 'Aventar la computadora', damage: 90, sp: 70},
          {name: 'Presentar proyecto', defense: 50, sp: 20}
          ]
    this.hp = 250
    this.sp = 750
    this.defense = 50
    this.isDead = () =>{
      if(this.hp<=0){
        return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
        {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, STR:${this.sp}, DEF:${this.defense}`
      }
    }
  this.attack = (personaje,b) =>{
      if(b <1){
        if(personaje.hp>0){
          if(personaje.defense <= 50){
            personaje.hp -= (this.powers[0].damage)*2
            this.sp -= this.powers[0].sp
            return `${this.name} usó ${this.powers[0].name} causó ${this.powers[0].damage*2} de daño y su STR restante es ${this.sp}`
          }
          personaje.hp -= this.powers[0].damage
          this.sp -= this.powers[0].sp
          return `${this.name} usó ${this.powers[0].name} su sp restante es ${this.sp}`
        }
        
        }
      else if(b < 2){
          if(personaje.hp>0){
          personaje.hp += this.powers[1].hp 
          this.sp -= this.powers[1].sp
          return `${this.name} usó ${this.powers[1].name} incrementó su HP en ${this.powers[1].hp} su STR restante es ${this.sp}`
          }
          
          }
      else if(b <3){
        if(personaje.hp>0){
          if(personaje.defense <= 30){
            personaje.hp -= (this.powers[2].damage)*2
            this.sp -= this.powers[2].sp
            return `${this.name} usó ${this.powers[2].name} causó ${this.powers[2].damage*2} de daño y su STR restante es ${this.sp}`
          }
          personaje.hp -= this.powers[2].damage
          this.sp -= this.powers[2].sp
          return `${this.name} usó ${this.powers[2].name} causó ${this.powers[2].damage} de daño y su STR restante es ${this.sp}`
          }
        }
      else if(b <4){
          personaje.forEach(e=>{
            e.defense -= this.powers[3].defense
          })      
          this.sp -= this.powers[3].sp
          return `${this.name} usó ${this.powers[3].name} aburrió a su oponente y redujo su defensa ${this.powers[3].defense} puntos, su STR restante es ${this.sp}`
        }
  }
  this.noMana = (personaje, b) =>{
      if(this.sp<=0){
        return `Mana insuficiente para atacar`
      }
      else{
        return this.attack(personaje, b)
      }
    }
    
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("Ingeniero en Sistemas",100,100);
  }
  drawPlayer1(){
    let position = player1.indexOf(ingSis)
    ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("Ing. en Sistemas",this.x2 + position*120,300); 
  }
  drawPlayer2(){
    let position = player2.indexOf(ingSis)
    ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("Ing. en Sistemas",this.x3 + position * -120,300); 
  }
  drawStats1(){
    player1.forEach((character) => {
      let position = player1.indexOf(ingSis)
    if(character===ingSis)
    ctx.fillText(`HP:${ingSis.hp}`, 50 + (position * 120), 120 )
    ctx.fillText(`STR:${ingSis.sp}`, 50 + (position * 120), 140 )
    ctx.fillText(`DEF:${ingSis.defense}`, 50 + (position * 120), 160 )
    })
  }
  drawStats2(){
    player2.forEach((character) => {
      let position = player2.indexOf(ingSis)
    if(character===ingSis)
    ctx.fillText(`HP:${ingSis.hp}`, 790 + (position * -130), 120 )
    ctx.fillText(`STR:${ingSis.sp}`, 790 + (position * -130), 140 )
    ctx.fillText(`DEF:${ingSis.defense}`, 790 + (position * -130), 160 )
    })
  }
  drawPowers1(){
    player1.forEach((character) => {
      let position = player1.indexOf(ingSis)
    if(character===ingSis)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText(` Código Compilado`, 30 +(position*120), 190 )
    ctx.fillText(` Fuerza del Café`, 30 +(position*120) , 210 )
    ctx.fillText(` Aventar PC`,30 +(position*120), 230 )
    ctx.fillText(` Presentar proyecto`, 30+(position*120), 250 ) 
    })
  }
  drawPowers2(){
    player2.forEach((character) => {
      let position = player2.indexOf(ingSis)
    if(character===ingSis)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText(` Código Compilado`, 770 +(position*-140), 190 )
    ctx.fillText(` Fuerza del Café`, 770 +(position*-140) , 210 )
    ctx.fillText(` Aventar PC`,770 +(position*-140), 230 )
    ctx.fillText(` Presentar proyecto`, 770+(position*-140), 250 ) 
    })
  }
}


class IngCivil{
    constructor(name){
      this.x = 275
      this.y = 120
      this.x2 = 30
      this.y2 = 320
      this.x3 = 760
      this.y3 = 320
      this.width = 100
      this.height = 150
      this.img = new Image()
      this.img.src = './img/civil.png'
      this.img2 = new Image()
      this.img2.src = './img/civil-rigth.png'
      this.name = name
      this.powers = [
            {name: 'Lanzar ladrillo', damage: 120, sp: 45},
            {name: 'Pone una barda', defense: 40, sp: 30},
            {name: 'Bolsas de cemento', damage: 50, sp: 70},
            {name: 'El último esfuerzo', damage: 80, sp: 10}
            ]
      this.hp = 350
      this.sp = 800
      this.defense = 120
      this.isDead = () =>{
        if(this.hp<=0){
          return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
          {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, STR:${this.sp}, DEF:${this.defense}`
        }
      }
    this.attack = (personaje,b) =>{
        
        if(b <1){
          if(personaje.hp >0){
          if(this.defense <= 50){
            
            personaje.hp -= (this.powers[0].damage)*2.5
            this.sp -= this.powers[0].sp
            return `${this.name} usó ${this.powers[0].name} causó ${this.powers[0].damage*2.5} de daño y su sp restante es ${this.sp}`}
          
          personaje.hp -= this.powers[0].damage
          this.sp -= this.powers[0].sp
          return `${this.name} usó ${this.powers[0].name} causando ${this.powers[0].damage} puntos de daños, su sp restante es ${this.sp}`
            }
          }
          
        else if(b < 2){
          personaje.forEach(e=>{
            e.defense += this.powers[1].defense
          })
            this.sp -= this.powers[1].sp
            return `${this.name} usó ${this.powers[1].name} su defensa se incrementó ${this.powers[1].defense} puntos`
            }
        else if(b <3){
          if(this.defense <= 30){
            personaje.forEach(e=>{
              if(e.hp>0)
              e.hp -= (this.powers[2].damage)*2
            })
            this.sp -= this.powers[2].sp
            return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage*3} puntos de daño y su sp restante es ${this.sp}`
          }
          personaje.forEach(e=>{
            if(e.hp>0)
            e.hp -= this.powers[2].damage
          })
          this.sp -= this.powers[2].sp
          return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage} puntos de daño su sp restante es ${this.sp}`
          }
        else if(b <4){
          personaje.hp -= this.powers[3].damage
          this.sp -= this.powers[3].sp
          return `${this.name} usó ${this.powers[3].name} y causó un daño de ${this.powers[3].damage} puntos, su sp restante es ${this.sp}`
          }
    }
    this.noMana = (personaje, b) =>{
        if(this.sp<=0){
          return `Mana insuficiente para atacar`
        }
        else{
          return this.attack(personaje, b)
        }
      }
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 14px sans-serif";
      ctx.fillText("Ingeniero Civil",270,100);
    }
    drawPlayer1(){
      let position = player1.indexOf(ingCiv)
      ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Ingeniero Civil",this.x2 + position*120,300); 
    }
    drawPlayer2(){
      let position = player2.indexOf(ingCiv)
      ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Ingeniero Civil",this.x3 + position* -120,300); 
    }
    drawStats1(){
      player1.forEach((character) => {
        let position = player1.indexOf(ingCiv)
      if(character===ingCiv)
      ctx.fillText(`HP:${ingCiv.hp}`, 50 + (position * 120), 120 )
      ctx.fillText(`STR:${ingCiv.sp}`, 50 + (position * 120), 140 )
      ctx.fillText(`DEF:${ingCiv.defense}`, 50 + (position * 120), 160 )
      })
    }
    drawStats2(){
      player2.forEach((character) => {
        let position = player2.indexOf(ingCiv)
      if(character===ingCiv)
      ctx.fillText(`HP:${ingCiv.hp}`, 790 + (position * -130), 120 )
      ctx.fillText(`STR:${ingCiv.sp}`, 790 + (position * -130), 140 )
      ctx.fillText(`DEF:${ingCiv.defense}`, 790 + (position * -130), 160 )
      })
    }
    drawPowers1(){
      player1.forEach((character) => {
        let position = player1.indexOf(ingCiv)
      if(character===ingCiv)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText(` Lanzar Ladrillo`, 30 +(position*120), 190 )
      ctx.fillText(` Pone una barda`, 30 +(position*120) , 210 )
      ctx.fillText(` Bolsas de Cemento`,30 +(position*120), 230 )
      ctx.fillText(` El ultimo esfuerzo`, 30+(position*120), 250 ) 
      })
    }
    drawPowers2(){
      player2.forEach((character) => {
        let position = player2.indexOf(ingCiv)
      if(character===ingCiv)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText(` Lanzar Ladrillo`, 780 +(position*-140), 190 )
      ctx.fillText(` Pone una barda`, 780 +(position*-140) , 210 )
      ctx.fillText(` Bolsas de Cemento`,780 +(position*-140), 230 )
      ctx.fillText(` El ultimo esfuerzo`, 780+(position*-140), 250 ) 
      })
    }
  }

class Medico{
    constructor(name){
      this.x = 400
      this.y = 120
      this.x2 = 30
      this.y2 = 320
      this.x3 = 760
      this.y3 = 320
      this.img2 = new Image()
      this.img2.src = './img/medico-rigth.png'
      this.img3 = new Image()
      this.img3.src = './img/medico-dead-rigth.png'
      this.width = 100
      this.height = 150
      this.img = new Image()
      this.img.src = './img/medico.png'
      this.name = name
      this.powers = [
            {name: 'Paracetamol', hp: 60, sp: 95},
            {name: 'Atropina', spMas: 50, sp: 60},
            {name: 'Te sermonea', defense: 40, sp: 70},
            {name: 'Ahorita lo atiendo joven', damage: 90, sp: 15}
            ]
      this.hp = 250
      this.sp = 1200
      this.defense = 120
      this.isDead = () =>{
        if(this.hp<=0){
          return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
          {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, SP:${this.sp}, DEF:${this.defense}`
        }
      }
    this.attack = (player1,b) =>{
      
        // if(this.sp >=95){
          if(b <1){
            player1.forEach(e=> {
              if(e.hp>0)
              return e.hp += this.powers[0].hp
            })
            this.sp -= this.powers[0].sp            
            } 
            // else{
            // ctx.beginPath()
            // ctx.fillStyle="white";
            // ctx.font = "bold 14px sans-serif";
            // ctx.fillText(`Fuerza Insuficiente para atacar. STR mínimo 95 puntos`,50,50)}
            // ctx.closePath()}

        // if(this.sp>=60){
           if(b < 2){
              player1.forEach(e=> {
                return e.sp += this.powers[1].spMas
              })
              this.sp -= this.powers[1].sp
              // ctx.beginPath()
              // ctx.fillStyle="white";
              // ctx.font = "bold 16px sans-serif";
              // ctx.fillText(`${this.name} usó ${this.powers[1].name} recuperando ${this.powers[1].spMas} puntos de energía a su equipo, su STR restante es ${this.sp}`,50,50);
              // ctx.closePath()
            }
            // }else{
            // ctx.beginPath()
            // ctx.fillStyle="white";
            // ctx.font = "bold 14px sans-serif";
            // ctx.fillText(`Fuerza Insuficiente para atacar. STR mínimo 60 puntos`,50,50)}
            // ctx.closePath()
            // }
            
        if(b <3){
          player1.defense -= this.powers[2].defense
              this.sp -= this.powers[2].sp
              // ctx.beginPath()
              // ctx.fillStyle="white";
              // ctx.font = "bold 16px sans-serif";
              // ctx.fillText(`${this.name} usó ${this.powers[2].name} y bajó ${this.powers[2].defense} puntos de defensa, su STR restante es ${this.sp}`,50,50);
              // ctx.closePath()
          }

        if(b <4){
          player1.hp -= this.powers[3].damage
            this.sp -= this.powers[3].sp
            return `${this.name} usó ${this.powers[3].name} pero no atendió al joven causándole ${this.powers[3].damage} puntos de daño, su STR restante es ${this.sp}`
            }
      }
     }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 14px sans-serif";
      ctx.fillText("Médico del IMSS",385,100);
    }
    drawPlayer1(){
      let position = player1.indexOf(medico)
      if(medico.hp>0){
      ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Médico del IMSS",this.x2 + position*120,300);
      }else{
      ctx.drawImage(this.img3, this.x2 + position*120, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Médico del IMSS",this.x2 + position*120,300);
      }
       
    }
    drawPlayer2(){
      let position = player2.indexOf(medico)
      ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Médico del IMSS",this.x3 + position* -120,300); 
    }
    drawStats1(){
      player1.forEach((character) => {
        let position = player1.indexOf(medico)
      if(character===medico)
      ctx.fillText(`HP:${medico.hp}`, 50 + (position * 120), 120 )
      ctx.fillText(`STR:${medico.sp}`, 50 + (position * 120), 140 )
      ctx.fillText(`DEF:${medico.defense}`, 50 + (position * 120), 160 )
      })
    }
    drawStats2(){
      player2.forEach((character) => {
        let position = player2.indexOf(medico)
      if(character===medico)
      ctx.fillText(`HP:${medico.hp}`, 790 + (position * -130), 120 )
      ctx.fillText(`STR:${medico.sp}`, 790 + (position * -130), 140 )
      ctx.fillText(`DEF:${medico.defense}`, 790 + (position * -130), 160 )
      })
    }
    drawPowers1(){
      player1.forEach((character) => {
        let position = player1.indexOf(medico)
      if(character===medico)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText(` Paracetamol`, 30 +(position*120), 190 )
      ctx.fillText(` Atropina`, 30 +(position*120) , 210 )
      ctx.fillText(` Te Sermonea`,30 +(position*120), 230 )
      ctx.fillText(` Ahorita lo atiendo`, 30+(position*120), 250 )
       
      })

    }
    drawWin1(){
      let position = player1.indexOf(medico)
      if(medico.hp>0){
        ctx.drawImage(this.img2, this.x2 + position + 400, this.y2, this.width, this.height)
        ctx.fillStyle="white"
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("Médico del IMSS",this.x2 + position+400,300);
      }else{
        ctx.drawImage(this.img3, this.x2 + position+400, this.y2, this.width, this.height)
        ctx.fillStyle="white"
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("Médico del IMSS",this.x2 + position+400,300);
      } 
    }
  }

class Administradora{
    constructor(name){
      this.x = 525
      this.y = 120
      this.width = 100
      this.height = 140
      this.x2 = 30
      this.y2 = 320
      this.x3 = 760
      this.y3 = 320
      this.img3 = new Image()
      this.img3.src = './img/administradora-dead-rigth.png'
      this.img2 = new Image()
      this.img2.src = './img/administradora-rigth.png'
      this.img = new Image()
      this.img.src = './img/administradora.png'
      this.name = name
      this.powers = [
            {name: 'Carpetazo', damage: 110, sp: 45},
            {name: 'Checa tus impuestos', defense: 50, sp: 50},
            {name: 'Come una garnacha', hp: 20, sp: 30},
            {name: 'Recaudación', damage: 70, sp: 65}
            ]
      this.hp = 270
      this.sp = 800
      this.defense = 100
      this.isDead = () =>{
        if(this.hp<=0){
          return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
          {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, STR:${this.sp}, DEF:${this.defense}`
        }
      }
    this.attack = (personaje,b) =>{
        if(b < 1){
        personaje.hp -= this.powers[0].damage 
        this.sp -= this.powers[0].sp
        return `${this.name} usó ${this.powers[1].name} su defensa se incrementó ${this.powers[1].defense} puntos`
        }
        else if(b <2){
          personaje.forEach(e=> {
            
            return e.defense -= this.powers[1].defense
          })
          this.sp -= this.powers[1].sp
          return `${this.name} usó ${this.powers[0].name} causando ${this.powers[0].damage} puntos de daños, su sp restante es ${this.sp}`
          }
        else if(b <3){
            personaje.hp += this.powers[2].hp
            this.sp -= this.powers[2].sp
            return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage*3} puntos de daño y su sp restante es ${this.sp}`
          }
        else if(b <4){
          personaje.forEach(e=>{
            return e.hp -= this.powers[3].damage
          })
          this.sp -= this.powers[3].sp
          return `${this.name} usó ${this.powers[3].name} y causó un daño de ${this.powers[3].damage} puntos, su sp restante es ${this.sp}`
          }
    }
    this.noMana = (personaje, b) =>{
        if(this.sp<=0){
          return `Mana insuficiente para atacar`
        }
        else{
          return this.attack(personaje, b)
        }
      }
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 14px sans-serif";
      ctx.fillText("Administradora del SAT",510,100);
    }
    drawPlayer1(){
      let position = player1.indexOf(administradora)
      if(administradora.hp>0){
      ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Admin. del SAT",this.x2 + position*120,300); 
      }else{
      ctx.drawImage(this.img3, this.x2 + position*120, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Admin. del SAT",this.x2 + position*120,300); 
      }
      
    }
    drawPlayer2(){
      let position = player2.indexOf(administradora)
      ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Admin. del SAT",this.x3 + position* -120,300); 
    }
    drawStats1(){
      player1.forEach((character) => {
        let position = player1.indexOf(administradora)
      if(character===administradora)
      ctx.fillText(`HP:${administradora.hp}`, 50 + (position * 120), 120 )
      ctx.fillText(`STR:${administradora.sp}`, 50 + (position * 120), 140 )
      ctx.fillText(`DEF:${administradora.defense}`, 50 + (position * 120), 160 )
      })
    }
    drawStats2(){
      player2.forEach((character) => {
        let position = player2.indexOf(administradora)
      if(character===administradora)
      ctx.fillText(`HP:${administradora.hp}`, 790 + (position * -130), 120 )
      ctx.fillText(`STR:${administradora.sp}`, 790 + (position * -130), 140 )
      ctx.fillText(`DEF:${administradora.defense}`, 790 + (position * -130), 160 )
      })
    }
    drawPowers1(){
      player1.forEach((character) => {
        let position = player1.indexOf(administradora)
      if(character===administradora)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText(` Carpetazo`, 30 +(position*120), 190 )
      ctx.fillText(` Checa tus impuestos`, 30 +(position*120) , 210 )
      ctx.fillText(` Come una garnacha`,30 +(position*120), 230 )
      ctx.fillText(` Recaudación`, 30+(position*120), 250 ) 
      })
    }
    drawWin1(){
      let position = player1.indexOf(administradora)
      if(administradora.hp>0){
        ctx.drawImage(this.img2, this.x2 + position + 550, this.y2, this.width, this.height)
        ctx.fillStyle="white"
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("Admin del SAT",this.x2 + position+550,300);
      }else{
        ctx.drawImage(this.img3, this.x2 + position+550, this.y2, this.width, this.height)
        ctx.fillStyle="white"
        ctx.font = "bold 12px sans-serif";
        ctx.fillText("Admin del SAT",this.x2 + position+550,300);
      } 
    }
}


class IngQuimica{
  constructor(name){
    this.x = 130
    this.y = 320
    this.x2 = 30
    this.y2 = 320
    this.x3 = 760
    this.y3 = 320
    this.img2 = new Image()
    this.img2.src = './img/quimica-rigth.png'
    this.width = 100
    this.height = 140
    this.img = new Image()
    this.img.src = './img/quimica.png'
    this.name = name
    this.powers = [
          {name: 'Ácido', damage: 120, sp: 85},
          {name: 'Metanfetamina', spMas: 80, sp: 80},
          {name: 'Combina elementos', damage: 100, sp: 70},
          {name: 'Te hace una cuba', damage: 80, sp: 65}
          ]
    this.hp = 250
    this.sp = 1500
    this.defense = 120
    this.isDead = () =>{
      if(this.hp<=0){
        return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
        {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, SP:${this.sp}, DEF:${this.defense}`
      }
    }
  this.attack = (personaje,b) =>{
      
      if(b <1){
        if(personaje.hp>0){
          if(this.defense <= 50){
            personaje.hp -= (this.powers[0].damage)*2.5
            this.sp -= this.powers[0].sp
            return `${this.name} usó ${this.powers[0].name} causó ${this.powers[0].damage*2.5} de daño y su sp restante es ${this.sp}`
          }
          personaje.hp -= this.powers[0].damage
          this.sp -= this.powers[0].sp
          return `${this.name} usó ${this.powers[0].name} causando ${this.powers[0].damage} puntos de daños, su sp restante es ${this.sp}`
        }
        
        }
      else if(b < 2){
        personaje.forEach(e=>{
          e.sp += this.powers[1].spMas
          this.sp -= this.powers[1].sp
          return `${this.name} usó ${this.powers[1].name} su defensa se incrementó ${this.powers[1].defense} puntos`
        })
          
      }
      else if(b <3){
        if(personaje.hp>0){
          if(this.defense <= 30){
            personaje.hp -= (this.powers[2].damage)*2
            this.sp -= this.powers[2].sp
            return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage*3} puntos de daño y su sp restante es ${this.sp}`
          }
          personaje.hp -= this.powers[2].damage
          this.sp -= this.powers[2].sp
          return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage} puntos de daño su sp restante es ${this.sp}`
        }
        
        }
      else if(b <4){
        if(personaje.hp>0){
          personaje.hp -= this.powers[3].damage
          this.sp -= this.powers[3].sp
          return `${this.name} usó ${this.powers[3].name} y causó un daño de ${this.powers[3].damage} puntos, su sp restante es ${this.sp}`
        }
        
        }
  }
  this.noMana = (personaje, b) =>{
      if(this.sp<=0){
        return `Mana insuficiente para atacar`
      }
      else{
        return this.attack(personaje, b)
      }
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("Ingeniera Química",100,300);
  }
  drawPlayer1(){
    let position = player1.indexOf(ingQui)
    ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("Ingeniera Química",this.x2 + position*120,300); 
  }
  drawPlayer2(){
    let position = player2.indexOf(ingQui)
    ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("Ingeniera Química",this.x3 + position* -120,300); 
  }
  drawStats1(){
    player1.forEach((character) => {
      let position = player1.indexOf(ingQui)
    if(character===ingQui)
    ctx.fillText(`HP:${ingQui.hp}`, 50 + (position * 120), 120 )
    ctx.fillText(`STR:${ingQui.sp}`, 50 + (position * 120), 140 )
    ctx.fillText(`DEF:${ingQui.defense}`, 50 + (position * 120), 160 )
    })
  }
  drawStats2(){
    player2.forEach((character) => {
      let position = player2.indexOf(ingQui)
    if(character===ingQui)
    ctx.fillText(`HP:${ingQui.hp}`, 790 + (position * -130), 120 )
    ctx.fillText(`STR:${ingQui.sp}`, 790 + (position * -130), 140 )
    ctx.fillText(`DEF:${ingQui.defense}`, 790 + (position * -130), 160 )
    })
  }
  drawPowers2(){
    player2.forEach((character) => {
      let position = player2.indexOf(ingQui)
    if(character===ingQui)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText(` Ácido`, 770 +(position*-130), 190 )
    ctx.fillText(` Metanfetamina`, 770 +(position*-130) , 210 )
    ctx.fillText(` Combina elementos`,770 +(position*-130), 230 )
    ctx.fillText(` Te hace una cuba`, 770+(position*-130), 250 ) 
    })
  }
}

class Contadora{
  constructor(name){
    this.x = 275
    this.y = 320
    this.x2 = 30
    this.y2 = 320
    this.x3 = 760
    this.y3 = 320
    this.img2 = new Image()
    this.img2.src = './img/contadora-rigth.png'
    this.width = 100
    this.height = 140
    this.img = new Image()
    this.img.src = './img/contadora.png'
    this.name = name
    this.powers = [
          {name: 'Paracetamol', hp: 60, sp: 95},
          {name: 'Atropina', spMas: 50, sp: 60},
          {name: 'Te sermonea', defense: 40, sp: 70},
          {name: 'Ahorita lo atiendo joven', damage: 20, sp: 15}
          ]
    this.hp = 250
    this.sp = 250
    this.defense = 120
    this.isDead = () =>{
      if(this.hp<=0){
        return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
        {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, SP:${this.sp}, DEF:${this.defense}`
      }
    }
  this.attack = (personaje,b) =>{
      if(b < 1){
      this.defense += this.powers[1].defense 
      this.sp -= this.powers[1].sp
      return `${this.name} usó ${this.powers[1].name} su defensa se incrementó ${this.powers[1].defense} puntos`
      }
      else if(b <2){
        if(this.defense <= 50){
          personaje.hp -= (this.powers[0].damage)*2.5
          this.sp -= this.powers[0].sp
          return `${this.name} usó ${this.powers[0].name} causó ${this.powers[0].damage*2.5} de daño y su sp restante es ${this.sp}`
        }
        personaje.hp -= this.powers[0].damage
        this.sp -= this.powers[0].sp
        return `${this.name} usó ${this.powers[0].name} causando ${this.powers[0].damage} puntos de daños, su sp restante es ${this.sp}`
        }
      else if(b <3){
        if(this.defense <= 30){
          personaje.hp -= (this.powers[2].damage)*2
          this.sp -= this.powers[2].sp
          return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage*3} puntos de daño y su sp restante es ${this.sp}`
        }
        personaje.hp -= this.powers[2].damage
        this.sp -= this.powers[2].sp
        return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage} puntos de daño su sp restante es ${this.sp}`
        }
      else if(b <4){
        personaje.hp -= this.powers[3].damage
        this.sp -= this.powers[3].sp
        return `${this.name} usó ${this.powers[3].name} y causó un daño de ${this.powers[3].damage} puntos, su sp restante es ${this.sp}`
        }
  }
  this.noMana = (personaje, b) =>{
      if(this.sp<=0){
        return `Mana insuficiente para atacar`
      }
      else{
        return this.attack(personaje, b)
      }
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("Contadora de la SHCP",240,300);
  }
  drawPlayer1(){
    let position = player1.indexOf(contadora)
    ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("C.P. de la SHCP",this.x2 + position*120,300); 
  }
  drawPlayer2(){
    let position = player2.indexOf(contadora)
    ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("C.P. de la SHCP",this.x3 + position* -120,300); 
  }
  drawStats1(){
    player1.forEach((character) => {
      let position = player1.indexOf(contadora)
    if(character===contadora)
    ctx.fillText(`HP:${contadora.hp}`, 50 + (position * 120), 120 )
    ctx.fillText(`STR:${contadora.sp}`, 50 + (position * 120), 140 )
    ctx.fillText(`DEF:${contadora.defense}`, 50 + (position * 120), 160 )
    })
  }
  drawStats2(){
    player2.forEach((character) => {
      let position = player2.indexOf(contadora)
    if(character===contadora)
    ctx.fillText(`HP:${contadora.hp}`, 790 + (position * -130), 120 )
    ctx.fillText(`STR:${contadora.sp}`, 790 + (position * -130), 140 )
    ctx.fillText(`DEF:${contadora.defense}`, 790 + (position * -130), 160 )
    })
  }
  
}

class Artista{
  constructor(name){
    this.x = 400
    this.y = 320
    this.width = 100
    this.height = 140
    this.x2 = 30
    this.y2 = 320
    this.x3 = 760
    this.y3 = 320
    this.img2 = new Image()
    this.img2.src = './img/artista-rigth.png'
    this.img = new Image()
    this.img.src = './img/artista.png'
    this.name = name
    this.powers = [
          {name: 'Paracetamol', hp: 60, sp: 95},
          {name: 'Atropina', spMas: 50, sp: 60},
          {name: 'Te sermonea', defense: 40, sp: 70},
          {name: 'Ahorita lo atiendo joven', damage: 20, sp: 15}
          ]
    this.hp = 250
    this.sp = 250
    this.defense = 120
    this.isDead = () =>{
      if(this.hp<=0){
        return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
        {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, SP:${this.sp}, DEF:${this.defense}`
      }
    }
  this.attack = (personaje,b) =>{
      if(b < 1){
      this.defense += this.powers[1].defense 
      this.sp -= this.powers[1].sp
      return `${this.name} usó ${this.powers[1].name} su defensa se incrementó ${this.powers[1].defense} puntos`
      }
      else if(b <2){
        if(this.defense <= 50){
          personaje.hp -= (this.powers[0].damage)*2.5
          this.sp -= this.powers[0].sp
          return `${this.name} usó ${this.powers[0].name} causó ${this.powers[0].damage*2.5} de daño y su sp restante es ${this.sp}`
        }
        personaje.hp -= this.powers[0].damage
        this.sp -= this.powers[0].sp
        return `${this.name} usó ${this.powers[0].name} causando ${this.powers[0].damage} puntos de daños, su sp restante es ${this.sp}`
        }
      else if(b <3){
        if(this.defense <= 30){
          personaje.hp -= (this.powers[2].damage)*2
          this.sp -= this.powers[2].sp
          return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage*3} puntos de daño y su sp restante es ${this.sp}`
        }
        personaje.hp -= this.powers[2].damage
        this.sp -= this.powers[2].sp
        return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage} puntos de daño su sp restante es ${this.sp}`
        }
      else if(b <4){
        personaje.hp -= this.powers[3].damage
        this.sp -= this.powers[3].sp
        return `${this.name} usó ${this.powers[3].name} y causó un daño de ${this.powers[3].damage} puntos, su sp restante es ${this.sp}`
        }
  }
  this.noMana = (personaje, b) =>{
      if(this.sp<=0){
        return `Mana insuficiente para atacar`
      }
      else{
        return this.attack(personaje, b)
      }
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("Artista Vegano",400,300);
  }
  drawPlayer1(){
    let position = player1.indexOf(artista)
    ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("Artista Vegano",this.x2 + position*120,300); 
  }
  drawPlayer2(){
    let position = player2.indexOf(artista)
    ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("Artista Vegano",this.x3 + position* -120,300); 
  }
  drawStats1(){
    player1.forEach((character) => {
      let position = player1.indexOf(artista)
    if(character===artista)
    ctx.fillText(`HP:${artista.hp}`, 50 + (position * 120), 120 )
    ctx.fillText(`STR:${artista.sp}`, 50 + (position * 120), 140 )
    ctx.fillText(`DEF:${artista.defense}`, 50 + (position * 120), 160 )
    })
  }
  drawStats2(){
    player2.forEach((character) => {
      let position = player2.indexOf(artista)
    if(character===artista)
    ctx.fillText(`HP:${artista.hp}`, 790 + (position * -130), 120 )
    ctx.fillText(`STR:${artista.sp}`, 790 + (position * -130), 140 )
    ctx.fillText(`DEF:${artista.defense}`, 790 + (position * -130), 160 )
    })
  }
}

class Abogado{
  constructor(name){
    this.x = 525
    this.y = 320
    this.width = 100
    this.height = 140
    this.x2 = 30
    this.y2 = 320
    this.x3 = 760
    this.y3 = 320
    this.img2 = new Image()
    this.img2.src = './img/abogado-rigth.png'
    this.img3 = new Image()
    this.img3.src = './img/abogado-dead-rigth.png'
    this.img = new Image()
    this.img.src = './img/abogado.png'
    this.name = name
    this.powers = [
          {name: 'Pide para las copias', damage: 500, sp: 95},
          {name: 'Te saca del torito', spMas: 30, sp: 60},
          {name: 'Golpe de maletín', damage: 90, sp: 70},
          {name: 'Cocker Attack', damage: 50, sp: 25}
          ]
    this.hp = 250
    this.sp = 850
    this.defense = 120
    this.isDead = () =>{
      if(this.hp<=0){
        return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
        {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, SP:${this.sp}, DEF:${this.defense}`
      }
    }
  this.attack = (player1,b) =>{
      if(b < 1){
      player1.forEach(e=> {
          return e.hp -= this.powers[0].damage
        })
      this.sp -= this.powers[0].sp
      
      }
      else if(b <2){
        player1.forEach(e=> {
          return e.sp += this.powers[1].sp
        })
        this.sp -= this.powers[1].sp
        
        }
      else if(b <3){
        if(this.defense <= 30){
          player1.hp -= (this.powers[2].damage)*2
          this.sp -= this.powers[2].sp
          return `${this.name} lanzó ${this.powers[2].name} causando ${this.powers[2].damage*3} puntos de daño y su sp restante es ${this.sp}`
        }player1.hp -= (this.powers[2].damage)
        this.sp -= this.powers[2].sp
        }
      else if(b <4){
        player1.hp -= this.powers[3].damage
        this.sp -= this.powers[3].sp
        return `${this.name} usó ${this.powers[3].name} y causó un daño de ${this.powers[3].damage} puntos, su sp restante es ${this.sp}`
        }
  }
  this.noMana = (personaje, b) =>{
      if(this.sp<=0){
        return `Mana insuficiente para atacar`
      }
      else{
        return this.attack(personaje, b)
      }
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("Abogangster Petfriendly",510,300);
  }
  drawPlayer1(){
    let position = player1.indexOf(abogado)
    if(abogado.hp>0){
      ctx.drawImage(this.img2, this.x2 + position*120, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Abogangster PetF",this.x2 + position*120,300);
    }else{
      ctx.drawImage(this.img3, this.x2 + position*120, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Abogangster PetF",this.x2 + position*120,300);
    } 
  }
  drawPlayer2(){
    let position = player2.indexOf(abogado)
    ctx.drawImage(this.img, this.x3 + position * -120, this.y3, this.width, this.height)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("Abogangster PetF",this.x3 + position* -120,300); 
  }
  drawStats1(){
    player1.forEach((character) => {
      let position = player1.indexOf(abogado)
    if(character===abogado)
    ctx.fillText(`HP:${abogado.hp}`, 50 + (position * 120), 120 )
    ctx.fillText(`STR:${abogado.sp}`, 50 + (position * 120), 140 )
    ctx.fillText(`DEF:${abogado.defense}`, 50 + (position * 120), 160 )
    })
  }
  drawStats2(){
    player2.forEach((character) => {
      let position = player2.indexOf(abogado)
    if(character===abogado)
    ctx.fillText(`HP:${abogado.hp}`, 790 + (position * -130), 120 )
    ctx.fillText(`STR:${abogado.sp}`, 790 + (position * -130), 140 )
    ctx.fillText(`DEF:${abogado.defense}`, 790 + (position * -130), 160 )
    })
  }
  drawPowers1(){
    player1.forEach((character) => {
      let position = player1.indexOf(abogado)
    if(character===abogado)
    ctx.fillStyle="white"
    ctx.font = "bold 12px sans-serif";
    ctx.fillText(` Saca las copias`, 30 +(position*120), 190 )
    ctx.fillText(` Te saca del torito`, 30 +(position*120) , 210 )
    ctx.fillText(` Golpe de Maletín`,30 +(position*120), 230 )
    ctx.fillText(` Cocker Attack`, 30+(position*120), 250 ) 
    })
  }
  drawWin1(){
    let position = player1.indexOf(abogado)
    if(abogado.hp>0){
      ctx.drawImage(this.img2, this.x2 + position + 250, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Abogangster PetF",this.x2 + position+250,300);
    }else{
      ctx.drawImage(this.img3, this.x2 + position+250, this.y2, this.width, this.height)
      ctx.fillStyle="white"
      ctx.font = "bold 12px sans-serif";
      ctx.fillText("Abogangster PetF",this.x2 + position+250,300);
    } 
  }
}