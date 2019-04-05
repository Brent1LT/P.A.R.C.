import React from 'react';
import { Redirect } from 'react-router-dom';


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchField: '',
            empty: '',
            redirect: false,

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        //e stands for the event that is being triggered
        e.preventDefault();
        this.props.newSearch(this.state.searchField);
        //dispatch action passed by mapdispatchtoprops
        this.setState({ redirect: true });
        //sending the search to the /listings index page
    }

    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){
      let location = window.location.href.split('/').includes('listings');

        if (this.state.redirect && !location) {
          return (<Redirect to="/listings"/>)
        }

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