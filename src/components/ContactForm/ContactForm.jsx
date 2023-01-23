// import { Component } from "react";
import {Form, Label, Input, Button} from './ContactForm.styled'
import PropTypes from 'prop-types';
import { useState } from "react";

export function ContactForm ({onSubmit}){
  const[name, setName] =useState('')
  const[number, setNumber] =useState('')

   const handelInputChange = (e) => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value)
        break;
      
       case 'number':
        setNumber(e.currentTarget.value)
        break;
    
      default:
        console.log("Бедося у тебя с руками")
    }}
    
    const  handlerAddContact = (e) => {
    e.preventDefault()
         onSubmit({name,number});
         reset()
    }
    
   const reset = () => {
     setName('')
     setNumber('')
    }
    
    return (<Form onSubmit={handlerAddContact}>
          <Label htmlFor="" > Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handelInputChange}
              required />
          </Label>      
          <Label htmlFor=""> number
            <Input
             type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handelInputChange}
                />
          </Label>
          <Button type="submit">Add contact</Button>       
          </Form>)

}

ContactForm.proptype = {
  name: PropTypes.string,
  number: PropTypes.string,

  handelInputChange: PropTypes.func,
  handlerAddContact: PropTypes.func,
  reset:PropTypes.func,  
}