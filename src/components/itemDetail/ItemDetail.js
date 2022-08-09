import ItemCount from "../itemCount/ItemCount";
import {useNavigate} from "react-router-dom";
import { useState } from "react";



const ItemDetail = ({ item }) => {
    
const navigate = useNavigate();
const [count, setCount] = useState(0)
console.log({item});

  const handleAdd = (quantityToAdd) => {
    console.log('handle add: ', quantityToAdd);
    setCount(quantityToAdd)
    console.log(count);
    navigate('/cart')
}

    return (
        <div>
            <img src={`${item.image}`} alt={`${item.image}`}></img>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            
            <h3>${item.price}</h3>

            <ItemCount stock={5} initial={1} onAdd={handleAdd} />
        </div>
    );
};
export default ItemDetail;
