import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import getProducts from "../../mock/Promise"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const[mensaje, setMensaje] = useState(false)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState([]);
    console.log(item);
    const { id } = useParams();
    console.log(id);
  
    useEffect(() => {
      getProducts
          .then((res) => {
              if (id) {
                  setItem(
                      res.filter((item) => item.id === parseInt(id))[0]
                  );
              } else {
                  setItem(res);
              } 
          })
          .catch((err) => setMensaje("Ha ocurrido un error", err))
          .finally(()=> setLoading(false))
  }, [id]);


    return (
            <div>
                {mensaje && <p>{mensaje}</p>}
                {item.length !== 0 ? (
                    <ItemDetail item={item} />
                ) : (
                    <h1>{loading}</h1>
                )}
            </div>
        
    );
};
export default ItemDetailContainer;