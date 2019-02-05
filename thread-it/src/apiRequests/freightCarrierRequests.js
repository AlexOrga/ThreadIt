import axios from 'axios';
import constants from '../constants';

const getAllFreightCarriers = () => {
  return new Promise((resolve,reject) => {
    axios.get(`${constants.config.databaseURL}/freightcarriers`)
      .then((data) => {
        let carriers = []
        data.data.forEach(carrier => {
          carriers.push(carrier);
        });
        resolve(carriers);
      })
      .catch((err) => {
        reject(err);
      });
  })
};

export default {getAllFreightCarriers};