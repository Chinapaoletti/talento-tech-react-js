import Item from "../Item/Item";
import styles from "./ItemList.module.css";

function ItemList({ productos, variant = "home" }) {
  return (
    <div
      className={`
        ${styles.grid}
        ${styles[variant]}
      `}
    >
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default ItemList;
