                       /*   EXO 1 :   LE TAXI */


/*class Man{
    constructor (name, sm, taxi, song){
    this.name = name 
    this.sm = sm 
    this.taxi = taxi 
    this.song = song
}

looseSm (){
    return this.song == "Annisa"
   
}

changeTaxi(){
    return this.sm - 1
}

stayInTaxi (){
    return this.song != "Anissa"
}

feuRouge(){
    return this.song
}




}

let man = new Man ("John", 10, 30,  [ "Anissa", "JsSong", "SchoolSong", "SunSong", "LastSong"])*/


let person = {
    name: "John",
    sm : 10,
}

const musics =["Anissa", "Rien qu'une fois", "A nos actes manqués", "Mon pays"]

let trajet = {
    changes: 0,
    radio: musics[0],
    redlights: 30,
}

var min=0; 
var max=5;  
var random = Math.floor(Math.random() * (max - min)) + min; 
/*alert(random);*/



function takeTaxi(person, trajet){
    while(trajet.redlights > 0){

        let redLeft = trajet.redlights -1
        timeLeft = redLeft
       
     if (musics[random] != musics[0]){
        console.log(person.name + " n'a pas entendu Anissa à la radio, il lui reste "+ timeLeft)
     } else {

        let damages = person.sm - 1
        actualSm = damages 
         let again = changes +1
        carChange = again

        console.log(person.name + " a entendu Anissa à la radio" + damages + " il lui reste " + actualSm + " sm et " + timeleft)
       }
       if (actualSm == 0){   
            console.log(person.name + "est arrivé à" + actualSm + ", il a donc explosé")
        }
       
    }
 }
      
        function Dying(person, trajet){
        if (trajet.redlights == 0){
            
            console.log(person.name + " est arrivé chez lui et il aura fallu " + carChange + " pour y arriver")
        }
        
       }
    


         /* LE TUEUR EN SERIE */

         
          
         let tueur = {
         name: "Jason",
          pv: 100,
          pd: 0, 
          attack: 9,
        }
        
        
     
  getAttack (Survivor){
            return person.attack
           }
            
         
        
     const caracter=[ "nerd", "passionated", "piplette", "crazy","peureux",  ]
     const Snames=["Pedro", "Megamind","Sicka", "Ladybug","Cruella"]


         class Survivor {
            constructor(Sname, caracter,pv) {
              this.Sname = Sname
              this.caracter = caracter
              this.pv = pv
              
            }
            getCaract () {
                return this.caracter
              }
            
            getName() {
                return this.Sname
             }
          
          
          }
           
         
          
          let survivor1 = new Survivor(
            Snames[Math.floor(Math.random()*Snames.length)],
            caracter[Math.floor(Math.random()*caracter.length)], 100
          )
          let survivor2 = new Survivor(
            Snames[Math.floor(Math.random()*Snames.length)],
            caracter[Math.floor(Math.random()*caracter.length)],100
          )
          let survivor3 = new Survivor(
            Snames[Math.floor(Math.random()*Snames.length)],
            caracter[Math.floor(Math.random()*caracter.length)],100
          )
          let survivor4 = new Survivor(
            Snames[Math.floor(Math.random()*Snames.length)],
            caracter[Math.floor(Math.random()*caracter.length)],100
          )
          let survivor5 = new Survivor(
            Snames[Math.floor(Math.random()*Snames.length)],
            caracter[Math.floor(Math.random()*caracter.length)],100
          )
            console.log(survivor1.getCaract())
            console.log(survivor1.getName())

            console.log(survivor2.getCaract())
            console.log(survivor2.getName())

            console.log(survivor3.getCaract())
            console.log(survivor3.getName())

            console.log(survivor4.getCaract())
            console.log(survivor4.getName())

            console.log(survivor5.getCaract())
            console.log(survivor5.getName())

         while(tueur.pv > 0 || Survivor > 0) {
            tueur.getAttack(Survivor)
          
            if(tueur.pv == 0) {
              console.log(Survivor.Sname + ' est mort')
              break
            }else {
                let damages = tueur.pv - 10
                actualPv = damages 
                console.log(tueur.name + " a subit 10 points de dégats, il lui reste " + actualPm + " de pv ")
            
        }
            }
          
            /*.....SUIIIITTTTE*/
          


RENDU ALGO































