import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtc/slices/products-slice";
import { addToCart } from "../rtc/slices/cart-slice";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  useEffect(() => {
    dispatch(fetchProducts());

  }, [])
  return (
    <Container>
      <Row>
        {products.map((product) => (
                  <Col key={product.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img style= {{height: '300px'}} variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <Card.Text>
                        {product.price}$
                      </Card.Text>
                      <Button variant="primary" onClick={() => {dispatch(addToCart(product))}}>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
          ))}

      </Row>
    </Container>
  );
}

export default Products;
