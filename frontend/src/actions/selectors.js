//THIS NEEDS TO BE IMPORTED TO LISTING INDEX CONTAINER AND MAP STATE TO PROPS pass in state


export const filterListings = (state) => {
    let result = [];
    let listings = state.entities.listings;
    let search = state.ui.search;
    let listingsArray = Object.values(listings);
    let coordinates = geocodeRequest(search)
    listingsArray.map(listing => {
        if  ((listing.lat <= coordinates.lat + .0055 || listing.lat >= coordinates.lat - .0055) && 
            (listing.lng <= coordinates.lng + .0083 || listing.longitude >= coordinates.lng - .0083)){
                result.push(listing);
        }
    });
    return result;
}

const geocodeRequest = (address) => {
    let coordinates = {};
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?',
    {
        params:{
            address: address,
            key: "will need a key here"
        }
    }).then( (response) => { //response is the object the api returns
        //refer to this if you need help
        //https://developers.google.com/maps/documentation/geocoding/intro
        coordinates = response.data.results[0].geometry.location;
        return coordinates;
        //this is where we get an object with the results inside
        //response.data.results[0].
    })
}

