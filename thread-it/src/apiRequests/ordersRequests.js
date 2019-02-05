import constants from '../constants';
import axios from 'axios';

const getAllOrders = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.config.databaseURL}/orders`)
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      });
  })
};

export default {
  getAllOrders
}