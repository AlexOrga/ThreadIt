import React, {Component} from 'react';
import clientsRequests from '../../apiRequests/clientsRequests';

class NewClient extends Component{
  state = {
    client:{
      name: "",
      address: "",
      telephone_number: "",
      fax_number: "",
      cod: false,
      comments: "none"
    },
    editClientId: 0
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState(prevState => ({
        client: {
            ...prevState.client,
            [name]: value
        }
    }));
  }

  handleEditIdChange = e => {
    const clientId = e.target.value * 1;
    this.setState({editClientId: clientId});
  }

  saveClient(client){
    clientsRequests.addClient(client);
  }

  editClient(id){
    clientsRequests.getSingleClient(id)
      .then((client) => {
        console.log(client);
        this.setState({client});
      })
      .catch((err) => {
        console.error("Error getting client", err);
      });
  }

  saveEdits(id, client){
    clientsRequests.updateClient(id, client);
  }

  render(){
    let editClientId = this.state.editClientId;
    let client = this.state.client;
    return(
      <div>

        <h1>New Client</h1>
        <button onClick={e => this.editClient(editClientId)}>Edit An Existing Client</button>
        <button onClick={e => this.saveEdits(editClientId, client)}>Save Edits</button>
        <div>
        <input
            type="number"
            name="editClientId"
            value={this.state.editClientId}
            onChange={this.handleEditIdChange}
            className="card-header"
            placeholder="Client Id To Edit"
          />
        </div>


        <div className="card">
          <input
            type="text"
            name="name"
            value={this.state.client.name}
            onChange={this.handleChange}
            className="card-header"
            placeholder="name"
          />
          <div className="card-body">
            <input
              type="text"
              name="address"
              className="card-title"
              value={this.state.client.address}
              onChange={this.handleChange}
              placeholder="address"
            /> <br/>
            <input
              type="text"
              name="telephone_number"
              className="card-text"
              value={this.state.client.telephone_number}
              onChange={this.handleChange}
              placeholder="telephone number"
            /> <br/>
            <input
              type="text"
              name="fax_number"
              className="card-text"
              value={this.state.client.fax_number}
              onChange={this.handleChange}
              placeholder="fax number"
            /> <br/>
            <input
              type="text"
              name="comments"
              className="card-text"
              value={this.state.client.comments}
              onChange={this.handleChange}
              placeholder="comments"
            /> <br/>
            <button onClick={e => this.saveClient(this.state.client)}>Save New Client</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewClient;