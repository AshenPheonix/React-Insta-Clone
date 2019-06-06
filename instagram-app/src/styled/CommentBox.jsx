import styled from 'styled-components'
import * as v from './vars'

export const CommentWrap=styled.section`
    display:flex;
    flex-wrap:wrap;
    ${v.center}
`

export const CommentText=styled.section`
    text-align:left;
`
export const CommentUser=styled.span`
    font-weight:bold;
`