
const productos = [
    {id:'01', name:'Rutini Malbec', description:"Este vino es muy rico",  price:75, img:require('../images/Vino.jpg'), stock:5, },
    {id:'02', name:'Rutini Cabernet', description:"Este vino es muy rico", price:70, img:require('../images/Vino.jpg'),stock:15},
    {id:'03', name:'Los Haroldos State', description:"Este vino es muy rico", price:100, img:require('../images/Vino.jpg'),stock:7},
    {id:'04', name:'Finca Las Moras', description:"Este vino es muy rico", price:75, img:require('../images/Vino.jpg'),stock:3},
    {id:'05', name:'Terraza de los Andes', description:"Este vino es muy rico", price:90, img:require('../images/Vino.jpg'),stock:10},
    {id:'06', name:'Comte Valmont', description:"Este vino es muy rico", price:50, img:require('../images/Vino.jpg'),stock:4},
    {id:'07', name:'Vino Toro', description:"Este vino es muy rico", price:50, img:require('../images/Vino.jpg'),stock:4},
    {id:'08', name:'Vino Uvita', description:"Este vino es muy rico", price:50, img:require('../images/Vino.jpg'),stock:4},
  ]

  export const data = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal, no hay vinos')
      }

    },3000)

  })