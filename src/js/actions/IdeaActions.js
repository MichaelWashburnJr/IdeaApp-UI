import dispatcher from '../utils/dispatcher';
import {without, defer} from 'lodash';
import {fromJS} from 'immutable';

let API_URL = "http://localhost:3000/api/v1/";

const uri = function (endpoint) {
  return `${API_URL}${endpoint}`
}

export default {
  fetchIdeas() {
    fetch(uri("ideas"))
    .then((response) => response.json())
    .then(function (res) {
      dispatcher.dispatch('IDEAS_FETCHED', {
        ideas: res.results,
        numPages: parseInt(res.numPages,10),
        total: parseInt(res.total,10)
      });
    });
  }
};
