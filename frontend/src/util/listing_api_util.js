import axios from 'axios';


export const createListing = listing => {
    axios.post('/api/listings/new', listing );
}

export const fetchListing = id => {
    axios.get(`/api/listings/${id}`);
}

export const fetchAllListings = () => {
    axios.get('/api/listings/');
}

export const deleteListing = (id) => {
    axios.delete(`/api/listings/delete/${id}`)
}
