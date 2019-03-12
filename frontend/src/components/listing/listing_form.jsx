import React from 'react'
import {geocodeRequest} from '../../actions/selectors'


class ListingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            street: '', 
            city: '', 
            state: '', 
            zip: '',
            lat: 0,
            lng: 0,
            description: '',
            price: 15
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let address = `${this.state.street} ${this.state.city} ${this.state.state}`
        let coordinates = geocodeRequest(address)
        this.setState({
            lat: coordinates.lat,
            lng: coordinates.lng
        })
        let createdListing = Object.assign({}, this.state);
        this.props.createListing(createdListing);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }


    // renderErrors() {
    //     // return null;
    //     if (this.props.errors.length > 0) {
    //         return (
    //             <ul id="errors">
    //                 {this.props.errors.map((error, i) => (
    //                     <li key={`error-${i}`}>
    //                         {error}
    //                     </li>
    //                 ))}
    //             </ul>
    //         );
    //     }
    // }

    render(){
        <div className='entire-listing-form'>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Address</h3>
                <div>Street: </div>
                <input type="text" value={this.state.street} onChange={this.update('street')}/>
                <div>City: </div>
                <input type="text" value={this.state.city} onChange={this.update('city')} />
                <div>State: </div>
                <input type="text" value={this.state.state} onChange={this.update('state')} />
                <div>Zip: </div>
                <input type="text" value={this.state.zip} onChange={this.update('zip')} />
                <div>Description: </div>
                <input type="text" value={this.state.description} onChange={this.update('description')}/>
                <div>Price: </div>
                <input type="text" value={this.state.price} />
            </form>
        </div>
    }
}

export default ListingForm 