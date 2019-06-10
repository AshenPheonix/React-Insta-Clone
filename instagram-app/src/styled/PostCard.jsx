import styled from 'styled-components'
import * as v from './vars'
import {FaRegHeart as Heart, FaRegComment as Comment} from 'react-icons/fa'

export const PostContainer=styled.section`
    display:flex;
    flex-direction:column;
    padding:.25rem;
    ${v.center}
    border:solid 1px black;
    margin-bottom:3rem;
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

export const PostImage=styled.img`
    max-width:100%;
    height:auto;
    ${v.center}
`

export const PostClosure=styled.section`
    display:flex;
    flex-direction:column;
`

export const LikeButton=styled(Heart)`
    margin:0 10px;
`
export const CommentButton=styled(Comment)`
    margin:0 10px;
`
export const LikeNumber=styled.p`
    text-align: left;
    font-weight: bold;
    padding-left:10px;
`