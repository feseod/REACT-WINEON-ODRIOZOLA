import { useEffect, useState } from "react"
import ItemList from "../itemList/ItemList"
import getProducts from "../../mock/Promise"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const[mensaje, setMensaje] = useState(false)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  console.log(products);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    getProducts
        .then((res) => {
            if (category) {
                setProducts(
                    res.filter((product) => product.category === category)
                );
            } else {
                setProducts(res);
            } 
        })
        .catch((err) => setMensaje("Ha ocurrido un error", err))
        .finally(()=> setLoading(false))
}, [category]);

  return (
    <div> 
        {mensaje && <p>{mensaje}</p>}
        {products.length !== 0 ? (
                <ItemList products={products} />
            ) : (
                <h1>{loading}</h1>
            )}            
    </div>
  );
}

export default ItemListContainer;