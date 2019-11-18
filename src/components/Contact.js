import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='Contact'>
            <img className='avatar' src={props.avatar} alt={props.name} />
            <div className='status'>
                <p className='name'>{props.name}</p>
                <p className='status-text'><span className={props.online ? 'status-online' : 'status-offline'}></span>{props.online ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    );
}

export default Contact;