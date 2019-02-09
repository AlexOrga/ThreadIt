import React, {Component} from 'react';
import ordersRequests from '../../apiRequests/ordersRequests';

class Orders extends Component {
  state={
    orders: []
  }

  componentDidMount(){
    ordersRequests.getAllOrders()
      .then((orders) => {
        this.setState({orders});
      })
      .catch((err) => {
        console.error(err, "Unable to retrieve all orders");
      });
  }

  makeCards = (order) => {
    return(
    <div className="card">
        <h5 className="card-header">{order.purchase_order}</h5>
      <div className="card-body">
        <h5 className="card-title">{order.shipping_address}</h5>
        <p className="card-text">{order.date_will_ship}</p>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
    );
  }

  render(){
    const orders = this.state.orders;
    return(
      <div>
        {orders.map(order => this.makeCards(order))}
      </div>
    )
  }
}

export default Orders;