import constants from '../constants';
import axios from 'axios';

const getAllOrders = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.config.databaseURL}/orders`)
      .then((data) => {
        const orders = [];
        data.data.forEach(order => {
          orders.push(order);
        })
        resolve(orders);
      })
      .catch((err) => {
        reject(err);
      });
  })
};

const addAnOrder = (order) => {
  return new Promise((resolve,reject) => {
    axios.post(`${constants.config.databaseURL}/orders`, {order})
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

export default {
  getAllOrders,
  addAnOrder
};