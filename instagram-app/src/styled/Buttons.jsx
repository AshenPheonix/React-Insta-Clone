import react,{Component} from 'react'
import styled from 'styled-components'

export const ButtonMain = styled.button`
    padding: 1rem;
    margin:1rem;
    border: 1px ${props=>props.bcolor||'transparent'} solid;

    color:${props=>props.color || 'black'}
    background-color:${props=>props.bgcolor||'white'}
`