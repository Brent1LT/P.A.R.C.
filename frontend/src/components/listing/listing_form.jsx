import React from 'react'

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
    }

    render(){
        <div>
            <form>
                <div></div>
            </form>
        </div>
    }
}