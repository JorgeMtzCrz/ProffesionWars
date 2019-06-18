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
  }
  // move(){
  //   this.x--
  //   if(this.x < -canvas.width) this.x = 0
  // }
  draw(){
  
    
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    // this.move()
  }
}

class CharacterIni{
  constructor(){
    this.x = 150
    this.y = 50
    this.width = 500
    this.height = 250
    this.img = new Image()
    this.img.src = './img/banner.png'
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
    
    // ctx.drawImage(this.img, this.x - 300, this.y, this.width, this.height)
    this.move()
  }
}
class SelectPlayer{
  constructor(){
    this.x = 200
    this.y = 230
    this.width = 140
    this.height = 200
    this.img = new Image()
    this.img.src = './img/select.png'
  }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    
  }
}

class IngSistemas{
  constructor(){
    this.x = 200
    this.y = 230
    this.width = 140
    this.height = 200
    this.img = new Image()
    this.img.src = './img/personajeini.png'
    this.name = name
    this.powers = [
          {name: 'Codigo Compilado', damage: 30, sp: 40},
          {name: 'Fuerza del cafe', hp: 10, sp: 30},
          {name: 'Aventar la computadora', damage: 50, sp: 70},
          {name: 'Presentar proyecto', defense: 30, sp: 20}
          ]
    this.hp = 200
    this.sp = 120
    this.defense = 50
    this.isDead = () =>{
      if(this.hp<=0){
        return `Los puntos de vida de ${this.name} se han agotado y se retiró de la batalla`}
        {return `${this.name} resistió el ataque, sus estadisticas son HP:${this.hp}, SP:${this.sp}, DEF:${this.defense}`
      }
    }
  this.attack = (personaje,b) =>{
      if(b < 1){
      this.hp += this.powers[1].hp 
      this.sp -= this.powers[1].sp
      return `${this.name} usó ${this.powers[1].name} su hp es ${this.hp} y su sp restante es ${this.sp}`
      }
      else if(b <2){
        if(this.defense <= 50){
          personaje.hp -= (this.powers[0].damage)*2
          this.sp -= this.powers[0].sp
          return `${this.name} usó ${this.powers[0].name} causó ${this.powers[0].damage*2} de daño y su sp restante es ${this.sp}`
        }
        personaje.hp -= this.powers[0].damage
        this.sp -= this.powers[0].sp
        return `${this.name} usó ${this.powers[0].name} su sp restante es ${this.sp}`
        }
      else if(b <3){
        if(this.defense <= 30){
          personaje.hp -= (this.powers[2].damage)*2
          this.sp -= this.powers[2].sp
          return `${this.name} usó ${this.powers[2].name} causó ${this.powers[2].damage*2} de daño y su sp restante es ${this.sp}`
        }
        personaje.hp -= this.powers[2].damage
        this.sp -= this.powers[2].sp
        return `${this.name} usó ${this.powers[2].name} su sp restante es ${this.sp}`
        }
      else if(b <4){
        personaje.defense -= this.powers[3].defense
        this.sp -= this.powers[3].sp
        return `${this.name} usó ${this.powers[3].name} aburrió a su oponente y redujo su defensa ${this.powers[3].defense} puntos, su sp restante es ${this.sp}`
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
    ctx.font = "bold 22px sans-serif";
    ctx.fillText("Ingeniero en Sistemas",50,50);
  }
}


  class IngCivil{
    constructor(name){
      this.name = name
      this.powers = [
            {name: 'Lanzar ladrillo', damage: 60, sp: 45},
            {name: 'Pone una barda', defense: 30, sp: 30},
            {name: 'Bolsas de cemento', damage: 50, sp: 70},
            {name: 'El último esfuerzo', damage: 30, sp: 10}
            ]
      this.hp = 150
      this.sp = 100
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
    }}

