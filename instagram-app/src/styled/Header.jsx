import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa'
import * as vars from './vars'

export const Header = styled.nav`
    display:flex;
    justify-content:space-between;
    position:sticky !important;
    top:0 !important;
    background-color:white;
    ${vars.tablet}{
        border-bottom:black solid 1px;
    }
`

export const Logo=styled.a`
    text-decoration:none;
    color:black;
`

export const SearchBar=styled.section`
    ${vars.tablet}{
        display:flex;
        justify-content:space-between;
    }
`

export const SearchInput=styled.input`
    height:32px;
    border-left:none;
    box-shadow: none;
    border-radius: 0 10px 10px 0;
    border:2px inset lightgray;
    border-left:none;
`

export const SearchWrapper=styled.section`
    display: flex;
    justify-content: center;
    margin-bottom:.5rem;
`

export const SearchLogo=styled(FaSearch)`
    padding:4px;
    border-right:none;
    border-radius: 10px 0 0 10px;
    border:2px inset lightgray;
    border-right:none;
`