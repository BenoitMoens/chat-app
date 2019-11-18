import React from 'react';
import './ContactList.css';

const ContactList = ({contacts}) => {
    return (
        contacts.map(contact => 
        <div className="Contact">
            <img className="avatar" src={contact.picture.thumbnail} alt={contact.name} />
            <div>
                <h4 className="name">{contact.name.first} {contact.name.last}</h4>
                {contact.status ?
                <div className="status">
                    <span className="status-online"></span>
                    <span className="status-text">online</span>
                </div> :
                <div className="status">
                    <span className="status-offline"></span>
                    <span className="status-text">offline</span>
                </div>}
            </div>
        </div>
        )
    )
}

export default ContactList;