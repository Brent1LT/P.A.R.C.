import React from 'react';

class ListingForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
      lat: 0,
      lng: 0,
      description: '',
      price: 15,
      image: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.geocodeRequest = this.geocodeRequest.bind(this);
  }


geocodeRequest(address) {
    return fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAPjYkDq0-iiCd6W5-qCw46J-r0EW39L1U`,
        {
            method: "post",
        }
    )
        .then(res => res.json())
        .then(response => {
            return response.results[0].geometry.location;
        });
}

handleSubmit(e) {
    e.preventDefault();

    let address = `${this.state.street} ${this.state.city}, ${this.state.state}`;
    this.geocodeRequest(address).then(response => {
        if (response === undefined) {

        } else {
            this.setState({
                lat: response.lat,
                lng: response.lng
            }, () => {
                const formData = new FormData();
                formData.append('street', this.state.street);
                formData.append('state', this.state.state);
                formData.append('city', this.state.city);
                formData.append('zip', this.state.zip);
                formData.append('lat', this.state.lat);
                formData.append('lng', this.state.lng);
                formData.append('description', this.state.description);
                formData.append('price', this.state.price);
                formData.append('image', this.state.image);

                this.props.createPhotoListing(formData)
                  .then(payload => {
                    let listing = payload.listing;
                    this.props.history.push(`/listings/${listing._id}`);
                  });
            });
        }
    });
}

handleFile(e){
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];
    if(file){
      fileReader.readAsDataURL(file);
    }

    fileReader.onloadend = () =>{
      this.setState({image: file, imageUrl: fileReader.result});
    };
}

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  // renderErrors() {
  //   // return null;
  //   if (this.props.errors.length > 0) {
  //     return (
  //       <ul id="errors">
  //         {this.props.errors.map((error, i) => (
  //           <li key={`error-${i}`}>
  //             {error}
  //           </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // };

  render() {
    return (
      <div className='corner-design'>
        <div className='background-gif'>
          <div className='entire-listing-form'>
            <h1 className='main-title-new'>Make your very own listing! </h1>
            <h2 className='main-description-new'>You're one step away from earning yourself some extra cash! Please fill
                out the form below so we can get you settled in!
            </h2>
            <form className='listing-form' onSubmit={(e) => this.handleSubmit(e)}>
                <h3 className='listing-form-title'>Parking Location</h3>
                <div className='flexing-text-box'>
                  <input id='new-text-box' type="text" value={this.state.street} placeholder='Street...' onChange={this.update('street')}/>
                  <input id='new-text-box' type="text" value={this.state.city} placeholder='City...' onChange={this.update('city')} />
                </div>
                <div className='flexing-text-box'>
                  <input id='new-text-box' type="text" value={this.state.state} placeholder='State...' onChange={this.update('state')} />
                  <input id='new-text-box' type="text" value={this.state.zip} placeholder='Zip Code...' onChange={this.update('zip')} />
                </div>
                <textarea id='new-description'  value={this.state.description} placeholder='Description...' onChange={this.update('description')}></textarea>

                <div className='flexing-text-box'>
                  <input id='new-text-box' type="text" value={this.state.price} />
                  <div className='attribute-titles'>Photo: <input id='picture-upload' type="file" onChange={this.handleFile.bind(this)} /></div>
                </div>
                <div>
                  <img className='photo-preview' src={this.state.imageUrl} />
                </div>
                <input className='new-submit' type="submit"/>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default ListingForm;
