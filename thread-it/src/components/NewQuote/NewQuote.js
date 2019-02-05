import React, {Component} from 'react';

class NewQuote extends Component{
  state = {
    newQuote:{
      salesman_id: 0,
      client_id: 0,
      client_id_of_purchaser: 0,
      shipping_address: "",
      freight_carrier_id: 0,
      fob: "",
      date_created: "",
      delivery_time_in_days: 0,
      total_cost: 0,
      total_price: 0,
      comments: "",
    },
    clients: [],
    salesmen: [],
    freight_carriers: []
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <h1>New Quote</h1>
        <form>
          <div className="form-group">
            <label htmlFor="inputSalesman">Salesman:</label>
            <input type="text" className="form-control" id="inputSalesman" placeholder="Enter Salesman"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputClient">Client:</label>
            <input type="text" className="form-control" id="inputClient" placeholder="Client's Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPurchaser">Purchaser:</label>
            <input type="text" className="form-control" id="inputPurchaser" placeholder="Enter Purchaser's Name"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputShippingAddress">Shipping Address:</label>
            <input type="text" className="form-control" id="inputShippingAddress" placeholder="Enter Shipping Address"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFreightCarrier">Freight Carrier:</label>
            <input type="text" className="form-control" id="inputFreightCarrier" placeholder="Enter Freight Carrier"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputFOB">FOB:</label>
            <input type="text" className="form-control" id="inputFOB" placeholder="Enter FOB"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputDelivery">Estimated Delivery Time:</label>
            <input type="text" className="form-control" id="inputDelivery" placeholder="Enter Estimated Delivery Time"/>
          </div>
          <div id="productContainer">
          <h3>Products</h3>
            <div className="form-group">
              <label htmlFor="product1">Product 1:</label> <br/>
              <label htmlFor="quantity1">Quantity:</label>
              <input type="text" className="form-control" id="quantity1" placeholder="Quantity"/>
              <label htmlFor="description1">Description:</label>
              <input type="text" className="form-control" id="description1" placeholder="Description"/>
              <label htmlFor="priceper1">Price Per Item:</label>
              <input type="text" className="form-control" id="priceper1" placeholder="Price Per Item"/>
              <label htmlFor="costper1">Cost Per Item:</label>
              <input type="text" className="form-control" id="costper1" placeholder="Cost Per Item"/>
            </div>
            <div className="form-group">
            <label htmlFor="product2">Product 2:</label> <br/>
              <label htmlFor="quantity2">Quantity:</label>
              <input type="text" className="form-control" id="quantity2" placeholder="Quantity"/>
              <label htmlFor="description2">Description:</label>
              <input type="text" className="form-control" id="description2" placeholder="Description"/>
              <label htmlFor="priceper2">Price Per Item:</label>
              <input type="text" className="form-control" id="priceper2" placeholder="Price Per Item"/>
              <label htmlFor="costper2">Cost Per Item:</label>
              <input type="text" className="form-control" id="costper2" placeholder="Cost Per Item"/>
            </div>
            <div className="form-group">
            <label htmlFor="product3">Product 3:</label> <br/>
              <label htmlFor="quantity3">Quantity:</label>
              <input type="text" className="form-control" id="quantity3" placeholder="Quantity"/>
              <label htmlFor="description3">Description:</label>
              <input type="text" className="form-control" id="description3" placeholder="Description"/>
              <label htmlFor="priceper3">Price Per Item:</label>
              <input type="text" className="form-control" id="priceper3" placeholder="Price Per Item"/>
              <label htmlFor="costper3">Cost Per Item:</label>
              <input type="text" className="form-control" id="costper3" placeholder="Cost Per Item"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputCost">Total Cost:</label>
            <input type="text" className="form-control" id="inputCost" placeholder="Enter Cost"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice">Total Price:</label>
            <input type="text" className="form-control" id="inputPrice" placeholder="Enter Price"/>
          </div>
          <div className="form-group">
            <label htmlFor="inputComments">Comments:</label>
            <input type="text" className="form-control" id="inputComments" placeholder="Additional Information"/>
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

export default NewQuote;