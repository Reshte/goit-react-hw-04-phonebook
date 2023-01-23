import React, { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import ContactForm from 'components/ContactForm/ContactForm'
import {FilterForm} from './FilterForm/FilterForm'
import { Wrapper, Title, TitleContacts } from './App.styled'
import PropTypes from 'prop-types';


const shortid = require('shortid');
const LS_KEY = 'contact_info';


export class App extends Component {
  state = {
  contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  static propTypes = {
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
  
  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
        try {
      const contacts = JSON.parse(localStorage.getItem(LS_KEY));
      this.setState({contacts})
    
  } catch(error) {
    this.setState({ contacts: [] });
  }
    }
  
  }
  
  componentDidUpdate(_, prevState) {
      if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY,JSON.stringify(this.state.contacts))
    }
       }
  
  
  handelFormSbmit = ({ name, number }) => {
    const isNameInContacts = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase().trim())
     if(isNameInContacts){
    alert(`${name} is already in contacts`)
   } else {this.setState(prevState => ({
     contacts: [...prevState.contacts, { id: shortid.generate(), name, number } ],
    }))}
   }
 
  filterContact = (e) => {
    console.log(e)
        this.setState({filter: e.currentTarget.value})
      }
   
  deleteContact = id => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
     }
  
  render() {
    const { contacts, filter } = this.state
    const filterNormalise = filter.toLowerCase().trim()
    const filterElemens = contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalise))
         
    return (
        <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.handelFormSbmit} />
        <TitleContacts>Contacts</TitleContacts>      
        <FilterForm value={filter} onChange={this.filterContact } />
        <ContactList contactsList={filterElemens} onDeleteContact={this.deleteContact} />
        </Wrapper>
  )    
  }
}
