import { useState, useEffect } from "react";
/* import {getItem} from "../../mock/Promise"; */
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    
    const getOneProduct = (id) => {
        fetch("../JSON/Data.json")
            .then((response) => response.json())
            .then((data) =>
                setItem(data.filter((item) => item.id === parseInt(id))[0]) /* parsear porque los params son strings, id es numerico */
            );
    };      

    useEffect(() => {
        getOneProduct(id);
    }, [id]);
   

    return (
        <div>
            {item.length !== 0 ? (
                <ItemDetail item={item} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};
export default ItemDetailContainer;