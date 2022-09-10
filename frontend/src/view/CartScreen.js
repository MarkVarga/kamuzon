import React, { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MessageBox from "../components/MessageBox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CartScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry, the product is out of stock");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: {
        ...item,
        quantity,
      },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/signin?/redirect=/shipping");
  };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Your cart is empty. <Link to="/">Go shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {" "}
              {cartItems.map((i) => (
                <ListGroup.Item key={i._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={i.image}
                        alt={i.name}
                        className="img-fluid rounded img-thumbnail"
                      />{" "}
                      <Link to={`/product/${i.slug}`}>{i.name}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() => updateCartHandler(i, (i.quantity -= 1))}
                        variant="light"
                        disabled={i.quantity === 1}
                      >
                        <i className="fas fa-minus-circle" />
                      </Button>{" "}
                      <span>{i.quantity}</span>{" "}
                      <Button
                        onClick={() => updateCartHandler(i, (i.quantity += 1))}
                        variant="light"
                        disabled={i.quantity === i.countInStock}
                      >
                        <i className="fas fa-plus-circle" />
                      </Button>
                    </Col>
                    <Col md={3}>${i.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(i)}
                        variant="light"
                      >
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal (
                    {cartItems.reduce(
                      (previousValue, currentValue) =>
                        previousValue + currentValue.quantity,
                      0
                    )}{" "}
                    items) : $
                    {cartItems.reduce(
                      (previousValue, currentValue) =>
                        previousValue +
                        currentValue.price * currentValue.quantity,
                      0
                    )}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      onClick={checkoutHandler}
                      type="button"
                      variant="primary"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
