import React from 'react'
import { create } from 'domain';

class ListingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            address={street: '', city: '', state: '', zip: ''},
            lat: 0,
            lng: 0,
            description: '',
            price: 15
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let createdListing = Object.assign({}, this.state);
        this.props.createListing(createdListing);
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    updateAddress(field){
        return e => this.setState({
            address: {[field]: e.currentTarget.value}
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
                <input type="text" value={this.state.address.street} onChange={this.updateAddress('street')}/>
                <div>City: </div>
                <input type="text" value={this.state.address.city} onChange={this.updateAddress('city')} />
                <div>State: </div>
                <input type="text" value={this.state.address.state} onChange={this.updateAddress('state')} />
                <div>Zip: </div>
                <input type="text" value={this.state.address.zip} onChange={this.updateAddress('zip')} />
                <div>Description: </div>
                <input type="text" value={this.state.description} onChange={this.update('description')}/>
                <div>Price: </div>
                <input type="text" value={this.state.price} />
            </form>
        </div>
    }
}

export default ListingForm 