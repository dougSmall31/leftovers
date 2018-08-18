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
        <div className="cart_container">
          {this.props.myOrders.map(order => (
            <div>
              <h2>{order.title}</h2>
              <div id="cart_row">
                <img src={order.image} />
                <div className="cart_list">
                  <p>
                    <strong>Category: </strong>
                    {order.category}
                  </p>
                  <p>
                    <strong>Servings: </strong>1{/* {order.servings} */}
                  </p>
                  <p>
                    <strong>Price: </strong>${order.cost_per}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div id="flex_row">
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
