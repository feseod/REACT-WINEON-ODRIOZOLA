
/* entrega Promises */
import miImagen from "../images/Vino.jpg"



const data = [
    {id: 1, name:'Rutini Malbec', category: "tinto", description:"Este vino es muy rico",  price:"75", image:{miImagen}, stock:"5"},
    {id: 2, name:'Rutini Cabernet', category: "tinto", description:"Este vino es muy rico", price:"70", image:{miImagen}, stock:"15"},
    {id: 3, name:'Los Haroldos State', category: "blanco", description:"Este vino es muy rico", price:"100", image:{miImagen}, stock:"7"},
    {id: 4, name:'Finca Las Moras', category: "blanco", description:"Este vino es muy rico", price:"75", image:{miImagen}, stock:"3"},
    {id: 5, name:'Terraza de los Andes', category: "blanco", description:"Este vino es muy rico", price:"90", image:{miImagen}, stock:"10"},
    {id: 6, name:'Comte Valmont', category: "tinto", description:"Este vino es muy rico", price:"50", image:{miImagen}, stock:"4"},
    {id: 7, name:'Vino Toro', category: "tinto", description:"Este vino es muy rico", price:"50", image:{miImagen}, stock:"4"},
    {id: 8, name:'Vino Uvita', category: "blanco", description:"Este vino es muy rico", price:"50", image:{miImagen}, stock:"4"},
  ]
  
  
  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  

      export default getProducts;