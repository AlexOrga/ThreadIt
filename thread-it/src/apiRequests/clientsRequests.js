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

export default {getAllClients};