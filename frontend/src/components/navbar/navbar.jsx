import React from 'react'
import {Link} from 'react-router-dom'
import SearchContainer from './search_container'

class Navbar extends React.Component{
    constructor(props){
        super(props)

        this.handleEvent = this.handleEvent.bind(this);
        this.logout = this.logout.bind(this);
    }


    handleEvent(e) {
        e.preventDefault();
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){


        if (this.props.id === null) {
            return (
                <>
                    <header className='main-header'>
                        <div>
                            <Link to='/' ><img src='' alt="" /></Link>
                            {/* just having it so if someone clicks logo it redirects */}
                            <div className='search-bar'>
                                <SearchContainer />
                            </div>
                        </div>
                        <div >
                            <header>
                                <div>
                                    <a href=''
                                        onClick={e => {
                                            this.handleEvent(e);
                                            this.props.openModal("signup")
                                        }}><p>Sign up</p>
                                    </a>
                                    <a href=''
                                        onClick={e => {
                                            this.handleEvent(e);
                                            this.props.openModal("login")
                                        }}><p>Log in</p>
                                    </a>
                                </div>
                            </header>
                        </div >
                    </header >
                    <div className='gray-bar'></div>
                    {/* the above gray bar is just a divider */}
                </>
            )
        }
    }
}