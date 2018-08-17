import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

//have servings update state on Cart and order update db

class Cart extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <div>Cart</div>
        <div className="cart_container">
          {this.props.myOrders.map(order => (
            <div>
              <p>
                Title:
                {order.title}
              </p>
              <p>
                Category:
                {order.category}
              </p>
              <p>
                Servings:
                {order.servings}
              </p>
              <p>
                Price:
                {order.price}
              </p>
            </div>
          ))}
          <Link to="/">
            <Button variant="extendedFab">Submit Order</Button>
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
  null
)(Cart);
