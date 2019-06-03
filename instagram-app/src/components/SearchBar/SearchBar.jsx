import React, { Component } from 'react'
import { FaSearch, FaRegCompass, FaRegHeart, FaRegUser, FaInstagram} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import PropTypes from 'prop-types'
import './SearchBar.scss'


export default class Searchbar extends Component {
    render() {
        return (
            <nav
                className="navbar navbar-expand-md navbar-light bg-white sticky-top d-flex justify-content-md-between"
            >
                <IconContext.Provider value={{}}>
                    <a
                        href="/index.html"
                    >
                        <FaInstagram /> | Instagram
                    </a>
                    <section className="search">
                        <FaSearch/>
                        <input type="text" placeholder="Search" onChange={this.props.searchEdit} value={this.props.searchValue}/>
                    </section>
                    <section className="icons">
                        <FaRegCompass/>
                        <FaRegHeart/>
                        <FaRegUser/>
                    </section>
                </IconContext.Provider>
            </nav>
        )
    }
}

Searchbar.propTypes={
    searchEdit:PropTypes.func,
    searchValue:PropTypes.string
}