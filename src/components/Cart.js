import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { submitOrder } from "../ducks/reducer";

//have servings update state on Cart and order update db

class Cart extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div className="Cart">
        <h1>My Order</h1>
        <div className="cart_flex">
          {this.props.myOrders.map(order => (
            <div className="cart_container">
              <h2>{order.title}</h2>
              <div id="cart_row">
                <img src={order.image} />
                <div className="cart_list">
                  <p style={{ marginTop: "30px" }}>
                    <strong>Category: </strong>
                    {order.category}
                  </p>
                  <p>
                    <strong>Servings: </strong>1{/* {order.servings} */}
                  </p>
                  <p style={{ marginBottom: "30px" }}>
                    <strong>Price: </strong>${order.cost_per}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart_buttons">
          <Link to="/">
            <Button variant="extendedFab">Keep Shopping</Button>
          </Link>
          <Link to="/">
            <Button
              variant="extendedFab"
              onClick={() => {
                this.props.submitOrder();
              }}
            >
              Submit Order
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myOrders: state.myOrders
});

export default connect(
  mapStateToProps,
  { submitOrder }
)(Cart);
