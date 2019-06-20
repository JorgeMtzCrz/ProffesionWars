class Medico{
  constructor(name){
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
        personaje.forEach(function(e) {
          return e 

        // += this.powers[0].hp
        //this.sp -= this.powers[0].sp
        //return `${this.name} usó ${this.powers[0].name} causando $//{this.powers[0].hp} puntos de daños, su sp restante es $//{this.sp}`
        })
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
const medico = new Medico('Jorge')
const civil = new IngCivil('Alex')
let personaje=[medico,civil]

   
console.log(personaje[0].noMana)


//console.log(ing1.hp)


