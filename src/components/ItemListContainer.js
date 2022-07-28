import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { data } from "../mock/Promise"


const ItemListContainer = () => {
  const [listaProductos, setListaProductos]= useState([])
  const[mensaje, setMensaje] = useState(false)
  const [loading, setLoading] = useState(true)

  console.log('me monte')

  useEffect(()=>{
    console.log('soy el useEffect')
    data
    .then((res)=> setListaProductos(res))
    .catch(()=> setMensaje('hubo un error, intente mas tarde'))
    .finally(()=> setLoading(false))
  }, [])

  return (
    <div> 
        {mensaje && <p>{mensaje}</p>}
        { loading ? <p>Cargando...</p>  : <ItemList listaProductos={listaProductos}/>}            
    </div>
  );
}

export default ItemListContainer;