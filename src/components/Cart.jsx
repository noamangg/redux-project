import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../rtc/slices/cart-slice";
Button;
function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  },0);
  console.log(totalPrice);
  return (
    <Container className="py-5 my-5">
      <Button className="primary" onClick={() => {
        dispatch(clearCart());
      }}>Clear Card</Button>
      <p>Total Price: {totalPrice.toFixed(2)} $</p>
      <table className="table py-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Img</th>
            <th scope="col">Price</th>
            <th scope="col">Items</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <th scope="row">{prod.id}</th>
              <td>{prod.title}</td>
              <td>
                <img
                  src={prod.image}
                  style={{ width: "50px" }}
                  alt="product image"
                />
              </td>
              <td>{prod.price}</td>
              <td>{prod.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFromCart(prod));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  );
}

export default Cart;
