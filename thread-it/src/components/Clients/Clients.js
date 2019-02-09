import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ClientsRequests from '../../apiRequests/clientsRequests';

class Clients extends Component{
  state={
    client:{
      name: "",
      address: "",
      telephone_number: "",
      fax_number: "",
      cod: false,
      comments: "none",
    },
    clients: [],
    isEditing: false
  }

  componentDidMount(){
    ClientsRequests.getAllClients()
      .then((clients) => {
        this.setState({clients});
      })
      .catch((err) => {
        console.error("error loading clients", err);
      })
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

  deleteClient(id){
    ClientsRequests.deleteClient(id);
  }

  makeCards = (client) => {
    if(this.state.isEditing === false){
      return(
      <div className="card">
          <h5 className="card-header">{client.name}</h5>
        <div className="card-body">
          <h5 className="card-title">{client.address}</h5>
          <p className="card-text">{client.telephone_number}</p>
          <button onClick={e => this.setState({isEditing: true})}>Edit</button>
          <Link to="/newClient" props={client}><button>Edit</button></Link>
          <button onClick={e => this.deleteClient(client.id)}>Delete</button>
        </div>
      </div>
      );
    } else {
      return(
        <div className="card">
          <input
            type="text"
            name="name"
            value={this.state.client.name}
            placeholder={client.name}
            onChange={this.handleChange}
            className="card-header"
          />
        <div className="card-body">
          <input
            type="text"
            name="address"
            className="card-title"
            value={client.address}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="telephone_number"
            className="card-text"
            value={client.telephone_number}
            onChange={this.handleChange}
          />
          <button onClick={e => this.setState({isEditing: false})}>Edit</button>
          <button onClick={e => this.deleteClient(client.id)}>Delete</button>
        </div>
      </div>
      );
    }
  }

  render(){
    const clients = this.state.clients;
    const buildClients = clients.map(this.makeCards);
    return(
      <div>
        <h1>Clients</h1>
        {buildClients}
      </div>
    );
  }
}

export default Clients;