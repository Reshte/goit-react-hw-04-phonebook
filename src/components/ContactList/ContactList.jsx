import PropTypes from 'prop-types';
import {ContactListItem} from './ContactListItem/ContactListItem'
import { List } from './ContactList.styled'


export const ContactList = ({ contactsList, onDeleteContact }) => {
           return ( 
            <List>
                   {contactsList.map(({ id, name, number }) => (
                       <ContactListItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>))}
        </List> )
}

ContactList.proptype ={
    contactsList:PropTypes.array,
    onDeleteContact:PropTypes.func,
}