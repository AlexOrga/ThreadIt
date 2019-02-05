import constants from '../constants';
import axios from 'axios';

const getAllSalesmen = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.config.databaseURL}/employees`)
      .then((data) => {
        let salesmen = [];
        data.data.forEach(employee => {
          if (employee.job_title_id === 3){
            salesmen.push(employee);
          }
        })
        resolve(salesmen);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

export default {getAllSalesmen};