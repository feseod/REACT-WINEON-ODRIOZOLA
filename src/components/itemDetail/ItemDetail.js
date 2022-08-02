import ItemCount from "../itemCount/ItemCount";
const ItemDetail = ({ item }) => {
    
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img src={`${item.img}`} alt={`${item.img}`}></img>
            <x3>{item.price}</x3>

            <ItemCount stock={5} initial={1} />
        </div>
    );
};
export default ItemDetail;
