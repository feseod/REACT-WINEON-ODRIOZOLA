
/* entrega Promises */

const data = [
    {id: 1, name:'Rutini Malbec', category: "tinto", description:"Este vino es muy rico",  price:"75", img:"require('../images/Vino.jpg')", stock:"5", },
    {id: 2, name:'Rutini Cabernet', category: "tinto", description:"Este vino es muy rico", price:"70", img:"require('../images/Vino.jpg')", stock:"15"},
    {id: 3, name:'Los Haroldos State', category: "blanco", description:"Este vino es muy rico", price:"100", img:"require('../images/Vino.jpg')", stock:"7"},
    {id: 4, name:'Finca Las Moras', category: "blanco", description:"Este vino es muy rico", price:"75", img:"require('../images/Vino.jpg')", stock:"3"},
    {id: 5, name:'Terraza de los Andes', category: "blanco", description:"Este vino es muy rico", price:"90", img:"require('../images/Vino.jpg')", stock:"10"},
    {id: 6, name:'Comte Valmont', category: "tinto", description:"Este vino es muy rico", price:"50", img:"require('../images/Vino.jpg')", stock:"4"},
    {id: 7, name:'Vino Toro', category: "tinto", description:"Este vino es muy rico", price:"50", img:"require('../images/Vino.jpg')", stock:"4"},
    {id: 8, name:'Vino Uvita', category: "blanco", description:"Este vino es muy rico", price:"50", img:"require('../images/Vino.jpg')", stock:"4"},
  ]
  
  
  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  
  /* const getProducts = new Promise((resolve, reject) => {
    //acciones
    let condition = true
    setTimeout(()=> {
      if(condition){
        resolve(productos)
      }else{
        reject('salio mal, no hay vinos')
      }

    }, 3000)

  }) */

  /* Entrega Detalle de producto */
     /*  const oneItem = {
        id:'01', 
        name:'Rutini Malbec', 
        description:"Este vino es muy rico",  
        price:75, 
        img:require('../images/Vino.jpg'), 
        stock:5
      };
      
      export const getItem = new Promise((resolve) => {
        setTimeout(() => {
          resolve(oneItem);
        }, 2000);
      }); */

      export default getProducts;