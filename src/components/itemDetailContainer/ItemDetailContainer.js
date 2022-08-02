import { useState, useEffect } from "react";
import {getItem} from "../../mock/Promise";
import ItemDetail from "../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        getItem
            .then((res) => setItem(res))
            .catch((err) => alert("Ha ocurrido un error", err));
     }, []);

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