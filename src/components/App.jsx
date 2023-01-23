import React, { useState, useEffect } from "react";
import { ContactList } from "./ContactList/ContactList";
import {ContactForm} from 'components/ContactForm/ContactForm'
import {FilterForm} from './FilterForm/FilterForm'
import { Wrapper, Title, TitleContacts } from './App.styled'
import PropTypes from 'prop-types';


const shortid = require('shortid');
const LS_KEY = 'contact_info';

export function App() {
  const [contacts, setContacts] = useState(() => { return JSON.parse(localStorage.getItem(LS_KEY)) ?? [] })
  const [filter, setFilter] = useState('')

  useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts])
  
  const handelFormSbmit = ( {name, number} ) => {
     const isNameInContacts = contacts.find(contact => contact.name.toLowerCase() ===  name.toLowerCase().trim() )
     if(isNameInContacts){
    alert(`${name} is already in contacts`)
     } else {
       setContacts(state => {      
         return ([...contacts, { id: shortid.generate(), name, number }])
       })
     }
  }
  
  const filterContact = (e) => {
       setFilter(e.currentTarget.value)
  }
  
  const deleteContact = id => {
    setContacts(state => (contacts.filter(contact => contact.id !== id)))
  }
  
  const filterNormalise = filter.toLowerCase().trim()
  const filterElemens = contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalise))
  
  return (
        <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={handelFormSbmit} />
        <TitleContacts>Contacts</TitleContacts>      
        <FilterForm value={filter} onChange={filterContact } />
        <ContactList contactsList={filterElemens} onDeleteContact={deleteContact} />
        </Wrapper>
  )    
}

App.propTypes = {
      contacts: PropTypes.arrayOf(
                PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
                number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  handelFormSbmit: PropTypes.func,
  deleteContact: PropTypes.func,
  filterContact: PropTypes.func,
    };


