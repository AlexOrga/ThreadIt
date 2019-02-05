import axios from 'axios';
import constants from '../constants';

const getQuoteInfo = () => {
  return new Promise((resolve,reject) => {
    axios.get(`${constants.config.databaseURL}/quoteInfo`)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  })
}

export default getQuoteInfo;