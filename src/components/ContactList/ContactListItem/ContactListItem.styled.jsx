import styled from '@emotion/styled'


export const Item = styled.li`
display:flex;
gap:10px;
align-items: center;
justify-content: space-between;
`
export const Button = styled.button`
display: inline-block;
height: 20px;
cursor:pointer;
border-radius: 5px;
border: solid 1px #777777; 
transition: all .3s linear;

&:hover {
  background-color: #00bfff;
  color:white;
}`