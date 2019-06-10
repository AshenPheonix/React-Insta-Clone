import React, { Component } from 'react'
import { FaRegCompass, FaRegHeart, FaRegUser, FaInstagram} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import PropTypes from 'prop-types'
import './SearchBar.scss'
import {ButtonMain as Button} from '../../styled/Buttons'
import {Logo, Header, SearchBar, SearchInput,SearchWrapper, SearchLogo} from '../../styled/Header'


export default class Searchbar extends Component {
    render() {
        return (
            <Header
                className="navbar navbar-expand-md navbar-light d-md-flex justify-content-md-between"
            >
                <IconContext.Provider value={{size:'32px'}}>
                    <Logo
                        href="/index.html"
                        className="navbar-brand"
                    >
                        <FaInstagram /> | Instagram
                    </Logo>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <SearchBar className="collapse navbar-collapse" id="navbarSupportedContent">
                        <SearchWrapper className="offset-md-3">
                            <SearchLogo />
                            <SearchInput type="text" placeholder="Search" onChange={this.props.searchEdit} value={this.props.searchValue}/>
                        </SearchWrapper>
                        <section className="split">
                            <section className="icons">
                                <FaRegCompass/>
                                <FaRegHeart/>
                                <FaRegUser/>
                                <Button onClick={this.props.logout}
                                    bcolor="gray"
                                    bgcolor="lemonchiffon"
                                >Logout</Button>
                            </section>
                        </section>
                    </SearchBar>
                </IconContext.Provider>
            </Header>
        )
    }
}

Searchbar.propTypes={
    searchEdit:PropTypes.func,
    searchValue:PropTypes.string
}