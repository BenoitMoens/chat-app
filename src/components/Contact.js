import React from 'react';
import './Contact.css';

const Contact = ({contacts}) => {
    return (
        contacts.map(contact => 
        <div className="Contact">
            <img className="avatar" src={contact.avatar} alt={contact.name} />
            <div>
                <h4 className="name">{contact.name}</h4>
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

export default Contact;