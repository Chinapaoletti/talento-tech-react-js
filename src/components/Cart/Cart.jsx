
import { useCart } from "../../context/CartContext";

import styles from "./Cart.module.css";

const Cart = () => {
  const { cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h1>El carrito está vacío</h1>
        <p>Agrega productos para continuar la compra.</p>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Carrito de Compras</h1>

      <div className={styles.cartList}>
        {cart.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div>
              <h4>{item.nombre}</h4>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.precio}</p>
            </div>

            <p className={styles.subtotal}>${item.precio * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h3>Total a pagar: ${getCartTotal()}</h3>

        <button className={styles.clearButton} onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
