import { Component } from "react";
import{Form, Label, Input, Button} from './ContactForm.styled'
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
    state = {
    name: '',
    number: ''
    }

     handelInputChange = (e) => {
     this.setState({ [e.currentTarget.name]:e.currentTarget.value})
    }
    
     handlerAddContact = (e) => {
    e.preventDefault()
         this.props.onSubmit(this.state);
         this.reset()
    }
    
    reset = () => {
        this.setState({name: '',
    number: ''})
    }
    
    render() {
        const { name, number } = this.state
        
        return (<Form onSubmit={this.handlerAddContact}>
          <Label htmlFor="" > Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={this.handelInputChange}
              required />
          </Label>      
          <Label htmlFor=""> Number
            <Input
             type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handelInputChange}
                />
          </Label>
          <Button type="submit">Add contact</Button>       
          </Form>)
        
    }
}

ContactForm.proptype = {
  name: PropTypes.string,
  number: PropTypes.string,

  handelInputChange: PropTypes.func,
  handlerAddContact: PropTypes.func,
  reset:PropTypes.func,  
}