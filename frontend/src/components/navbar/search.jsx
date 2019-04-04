import React from 'react';


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchField: '',
            empty: ''
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // this.props.fetchListings();     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    }

    handleSubmit(e){
        //e stands for the event that is being triggered
        e.preventDefault();
        this.props.newSearch(this.state.searchField);
        //dispatch action passed by mapdispatchtoprops
        this.props.history.push('/listings');
        //sending the search to the /listings index page
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        className='main-search-bar'
                        type='text'
                        value={this.state.searchField}
                        placeholder='Search...'
                        onChange={this.update('searchField')}/>
                </form>
            </div>
        )
    }
}

export default Search