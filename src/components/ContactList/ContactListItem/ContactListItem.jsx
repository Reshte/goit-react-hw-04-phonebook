// import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
     return (  
<Item key={id}>
           <p>{name} : {number}</p>
<Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
</Item>)  
}