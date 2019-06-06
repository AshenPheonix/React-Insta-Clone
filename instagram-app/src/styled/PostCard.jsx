import styled from 'styled-components'
import * as v from './vars'

export const PostContainer=styled.section`
    display:flex;
    flex-direction:column;
    padding:.25rem;
    ${v.center}
    margin:3rem;
    border:solid 1px black;
    ${v.tablet}{
        max-width: 640px;
        ${v.center}
    }
`

export const UserLogo=styled.img`
    max-width: 30px;
    max-height: 30px;
    border-radius: 100%;
`

export const UserHead=styled.section`
    display:flex;
    align-items:center;
`