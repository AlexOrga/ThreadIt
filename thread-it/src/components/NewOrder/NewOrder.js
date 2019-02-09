import React, {Component} from 'react';
import FreightRequests from '../../apiRequests/freightCarrierRequests';
import ClientRequests from '../../apiRequests/clientsRequests';
import EmployeeRequests from '../../apiRequests/employeesRequests';
import OrdersRequests from '../../apiRequests/ordersRequests';

class NewOrder extends Component{
  state = {
    newOrder:{
      purchase_order_number: "",
      quote_number: "",
      salesman_id: 0,
      client_id: 0,
      client_id_of_purchaser: 1,
      billing_address: "",
      shipping_address: "",
      freight_carrier_id: 0,
      fob: "",
      date_created: "",
      date_will_ship: "",
      date_shipped: "",
      tracking_number: "",
      status_number: 1,
      is_paid: false,
      payment_type: "",
      is_cancelled: false,
      is_on_hold: false,
      comments: "",
    },
    product: {
      description: "",
    },
    clients: [],
    salesmen: [],
    freight_carriers: []
  }

  componentDidMount () {
    FreightRequests.getAllFreightCarriers()
      .then((freight_carriers) => {
        ClientRequests.getAllClients()
          .then((clients) => {
            EmployeeRequests.getAllSalesmen()
            .then((salesmen) => {
              this.setState({clients, freight_carriers, salesmen});
            })
          })
      })
      .catch((err) => {
        console.error("Error retrieving freight carriers in New Quote", err);
      })
  }

  handleCheckbox = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
        newOrder: {
            ...prevState.newOrder,
            [name]: value
        }
    }));
  }

  handleChange = e => {
    let { name, value } = e.target;
    if(e.target.type === "number"){
      value = value * 1;
    }
    this.setState(prevState => ({
        newOrder: {
            ...prevState.newOrder,
            [name]: value
        }
    }));
}

  handleProductChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
        product: {
            ...prevState.product,
            [name]: value
        }
    }));
  }

  displayInfo = (input) => {
    return(
      <div>
        <h4>Name: {input.name}</h4>
        <h5>Id: {input.id}</h5>
      </div>
    );
  }

  submitOrder = (input) => {
    OrdersRequests.addAnOrder(input);
  };

  render(){
    const salesmen = this.state.salesmen;
    const clients = this.state.clients;
    const freightCarriers = this.state.freight_carriers;
    const newOrder = this.state.newOrder;
    const product = this.state.product;
    return(
      <div>
        <h1>New Order</h1>
        <form>
        <div className="form-group">
            <label htmlFor="inputSalesman">Salesman:</label>
            <div>
              {salesmen.map(this.displayInfo)}
            </div>
            <label htmlFor="description1">Enter Salesman Id:</label>
            <input
              type="number"
              name="salesman_id"
              value={newOrder.salesman_id}
              onChange={this.handleChange}
              className="form-control"
              id="salesman_id1"
              placeholder="Salesman Id"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputClient">Client:</label>
            <div>
              {clients.map(this.displayInfo)}
            </div>
            <label htmlFor="description1">Enter Client Id:</label>
            <input
              type="number"
              name="client_id"
              value={newOrder.client_id}
              onChange={this.handleChange}
              className="form-control"
              id="client_id1"
              placeholder="Client Id"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputShippingAddress">Shipping Address:</label>
            <input
              type="text"
              name="shipping_address"
              value={newOrder.shipping_address}
              onChange={this.handleChange}
              className="form-control"
              id="inputShippingAddress"
              placeholder="Enter Shipping Address"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputBillingAddress">Billing Address:</label>
            <input
              type="text"
              name="billing_address"
              value={newOrder.billing_address}
              onChange={this.handleChange}
              className="form-control"
              id="inputBillingAddress"
              placeholder="Enter Billing Address"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFreightCarrier">Freight Carrier:</label>
            <div>
              {freightCarriers.map(this.displayInfo)}
            </div>
            <label htmlFor="description1">Enter Freight Carrier Id:</label>
            <input
              type="number"
              name="freight_carrier_id"
              value={newOrder.freight_carrier_id}
              onChange={this.handleChange}
              className="form-control"
              id="freight_carrier_id1"
              placeholder="Freight Carrier Id"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFOB">FOB:</label>
            <input
              type="text"
              name="fob"
              value={newOrder.fob}
              onChange={this.handleChange}
              className="form-control"
              id="inputFOB"
              placeholder="Enter Prepaid or Collect"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFOB">PO Number:</label>
            <input
              type="text"
              name="purchase_order_number"
              value={newOrder.purchase_order_number}
              onChange={this.handleChange}
              className="form-control"
              id="inputPurchaseOrderNumber"
              placeholder="Enter Prepaid or Collect"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFOB">Payment Type:</label>
            <input
              type="text"
              name="payment_type"
              value={newOrder.payment_type}
              onChange={this.handleChange}
              className="form-control"
              id="payment_type1"
              placeholder="Enter Credit Card or Net 30"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFOB">FOB:</label>
            <input
              type="text"
              name="fob"
              value={newOrder.fob}
              onChange={this.handleChange}
              className="form-control"
              id="inputFOB"
              placeholder="Enter Prepaid or Collect"/>
          </div>

          <div id="productContainer">
          <h3>Products</h3>
            <div className="form-group">
              <label htmlFor="product1">Product 1:</label> <br/>
              <label htmlFor="quantity1">Quantity:</label>
              <input
                type="text"
                name="quantity"
                value={product.quantity}
                onChange={this.handleProductChange}
                className="form-control"
                id="quantity1"
                placeholder="Quantity"/>
              <label htmlFor="description1">Description:</label>
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={this.handleProductChange}
                className="form-control"
                id="description1"
                placeholder="Description"/>
              <label htmlFor="priceper1">Price Per Item:</label>
              <input
                type="text"
                name="price_per_item"
                value={product.price_per_item}
                onChange={this.handleProductChange}
                className="form-control"
                id="priceper1"
                placeholder="Price Per Item"/>
              <label htmlFor="costper1">Cost Per Item:</label>
              <input
                type="text"
                name="cost_per_item"
                value={product.cost_per_item}
                onChange={this.handleProductChange}
                className="form-control"
                id="costper1"
                placeholder="Cost Per Item"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputCost">Total Cost:</label>
            <input
              type="text"
              name="total_cost"
              value={newOrder.total_cost}
              onChange={this.handleChange}
              className="form-control"
              id="inputCost"
              placeholder="Enter Cost"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice">Total Price:</label>
            <input
              type="text"
              name="total_price"
              value={newOrder.total_price}
              onChange={this.handleChange}
              className="form-control"
              id="inputPrice"
              placeholder="Enter Price"/>
          </div>
          <div>
            <label htmlFor="start">Date Created:</label>

            <input
              type="date"
              id="start"
              name="date_created"
              value={newOrder.date_created}
              onChange={this.handleChange}
              min="2019-01-01"
              max="2019-12-31"
            />
          </div>
          <div>
            <label htmlFor="willShip">Date Will Ship:</label>

            <input
              type="date"
              id="willShip"
              name="date_will_ship"
              value={newOrder.date_will_ship}
              onChange={this.handleChange}
              min="2019-01-01"
              max="2019-12-31"
            />
          </div>
          <div>
            <label htmlFor="shipped">Date Shipped:</label>

            <input
              type="date"
              id="shipped"
              name="date_shipped"
              value={newOrder.date_shipped}
              onChange={this.handleChange}
              min="2019-01-01"
              max="2019-12-31"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputTrackingNumber">Tracking Number:</label>
            <input
              type="text"
              name="tracking_number"
              value={newOrder.tracking_number}
              onChange={this.handleChange}
              className="form-control"
              id="inputTrackingNumber"
              placeholder="Tracking Number"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputComments">Comments:</label>
            <input
              type="text"
              name="comments"
              value={newOrder.comments}
              onChange={this.handleChange}
              className="form-control"
              id="inputComments"
              placeholder="Additional Information"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={e => this.submitOrder(newOrder)}
          >Submit Order</button>
          <button type="submit" className="btn btn-primary">Cancel Order</button>
        </form>
      </div>
    );
  }
}

export default NewOrder;