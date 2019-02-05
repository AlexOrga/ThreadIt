import React, {Component} from 'react';
import FreightRequests from '../../apiRequests/freightCarrierRequests';
import ClientRequests from '../../apiRequests/clientsRequests';
import EmployeeRequests from '../../apiRequests/employeesRequests';

class NewOrder extends Component{
  state = {
    newOrder:{
      purchase_order_number: "",
      quote_number: "",
      salesman_id: 0,
      client_id: 0,
      client_id_of_purchaser: 0,
      shipping_address: "",
      freight_carrier_id: 0,
      fob: "",
      date_created: "",
      date_will_ship: "",
      date_shipped: "",
      tracking_number: "",
      status_number: 0,
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

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
        newOrder: {
            ...prevState.newOrder,
            [name]: value
        }
    }));
}

  setCheckboxes (input) {
    return(
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id={input.id}/>
        <label className="form-check-label" htmlFor="exampleCheck1">{input.name}</label>
      </div>
    );
  }

  render(){
    const salesmen = this.state.salesmen;
    const clients = this.state.clients;
    const freightCarriers = this.state.freight_carriers;
    const newOrder = this.state.newOrder;
    return(
      <div>
        <h1>New Order</h1>
        <form>
        <div className="form-group">
            <label htmlFor="inputSalesman">Salesman:</label>
            <div>
              {salesmen.map(this.setCheckboxes)}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputClient">Client:</label>
            <div>
              {clients.map(this.setCheckboxes)}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPurchaseOrder">Purchase Order Number:</label>
            <input
              type="text"
              name="purchase_order_number"
              value={newOrder.purchase_order_number}
              onChange={this.handleChange}
              className="form-control"
              id="inputShippingAddress"
              placeholder="Enter Shipping Address"/>
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
            <label htmlFor="inputFreightCarrier">Freight Carrier:</label>
            <div>
              {freightCarriers.map(this.setCheckboxes)}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputFOB">FOB:</label>
            <input
              type="text"
              name="fob"
              value={newOrder.fob}
              className="form-control"
              id="inputFOB"
              placeholder="Enter FOB"/>
          </div>
          <div>
            <label for="start">Date Created:</label>

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
            <label for="willShip">Date Will Ship:</label>

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
            <label for="shipped">Date Shipped:</label>

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
          <div id="productContainer">
          <h3>Products</h3>
            <div className="form-group">
              <label htmlFor="product1">Product 1:</label> <br/>
              <label htmlFor="quantity1">Quantity:</label>
              <input
                type="text"
                name="total_quantity"
                value={newOrder.quantity}
                onChange={this.handleProductChange}
                className="form-control"
                id="quantity1"
                placeholder="Quantity"/>
              <label htmlFor="description1">Description:</label>
              <input
                type="text"
                className="form-control"
                id="description1"
                placeholder="Description"/>
              <label htmlFor="priceper1">Price Per Item:</label>
              <input
                type="text"
                className="form-control"
                id="priceper1"
                placeholder="Price Per Item"/>
              <label htmlFor="costper1">Cost Per Item:</label>
              <input
                type="text"
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
          <button type="submit" className="btn btn-primary">Submit Quote</button>
          <button type="submit" className="btn btn-primary">Cancel Quote</button>
        </form>
      </div>
    );
  }
}

export default NewOrder;