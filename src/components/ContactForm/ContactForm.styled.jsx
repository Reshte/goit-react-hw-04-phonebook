import styled from '@emotion/styled'

export const Form = styled.form`
display:flex;
flex-direction: column;
align-items: flex-start;
gap:10px;
border: 1px solid black;
border-radius: 5px;
padding: 20px;   
`

export const Label = styled.label`
display:flex;
flex-direction: column;
gap:5px;`

export const Input = styled.input`
outline-color:#00bfff;`

export const Button = styled.button`
font-size: 15px;
display:block;
height: 15px;
flex-basis:20%;
cursor:pointer;
border-radius: 5px;
padding: 3px 5px; 
border: solid 1px #777777; 
transition: all .3s linear;

&:hover {
  background-color: #00bfff;
  color:white;
}
 `