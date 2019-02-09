import constants from '../constants';
import axios from 'axios';

const getAllClients = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.config.databaseURL}/clients`)
      .then((data) => {
        let clients = [];
        data.data.forEach(client => {
          clients.push(client);
          resolve(clients);
        })
      })
      .catch((err) => {
        reject(err);
      })
  })
}

const getSingleClient = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.config.databaseURL}/clients/${id}`)
      .then((data) => {
        resolve(data.data[0]);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

const addClient = (client) => {
  return new Promise((resolve, reject) => {
    axios.post(`${constants.config.databaseURL}/clients`, client)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

const updateClient = (id, client) => {
  return new Promise((resolve, reject) => {
    axios.put(`${constants.config.databaseURL}/clients/${id}`, client)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

const deleteClient = (id) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${constants.config.databaseURL}/clients/${id}`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export default {
  getAllClients,
  getSingleClient,
  addClient,
  updateClient,
  deleteClient
};