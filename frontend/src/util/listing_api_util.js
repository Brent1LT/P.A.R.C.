import axios from 'axios';

export const createListing = listing => {
    return axios.post('/api/listings/new', listing );
}

export const fetchListing = id => {
    return axios.get(`/api/listings/${id}`);
}

export const fetchAllListings = () => {
    return axios.get('/api/listings/');
}

export const deleteListing = (id) => {
    return axios.delete(`/api/listings/delete/${id}`)
}

// changing content type header for file upload

// fileUpload(file){
//     const url = 'http://example.com/file-upload';
//     const formData = new FormData();
//     formData.append('file', file)
//     const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     }
//     return post(url, formData, config)
// }
