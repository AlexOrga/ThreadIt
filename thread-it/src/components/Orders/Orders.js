import React, {Component} from 'react';
import ordersRequests from '../../apiRequests/ordersRequests';

class Orders extends Component {
  state={
    orders: []
  }

  componentDidMount(){
    ordersRequests.getAllOrders()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err, "Unable to retrieve all orders");
      });
  }

  render(){
    return(
      <div>
        <h1>Orders</h1>
      </div>
    )
  }
}

export default Orders;