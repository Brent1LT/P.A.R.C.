import axios from 'axios';

export const createListing = listing => {
  return axios.post('/api/listings/new', listing ).then(res => (res.data));
};
export const fetchListing = id => {
  return axios.get(`/api/listings/${id}`).then(res => (res.data));
};
export const fetchAllListings = () => {
  return axios.get('/api/listings/').then(res => (res.data));
};
export const deleteListing = (id) => {
  return axios.delete(`/api/listings/delete/${id}`).then(res => (res.data));
};
