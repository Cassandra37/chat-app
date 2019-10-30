import React from 'react';
import './chat.css';

function Contact(props){
    return(
        <div className="Contact">
                <img className="avatar" src={props.avatar}></img>
                    <div className="status">
                        <p className="name">{props.name}</p> 
                        <i className={props.offline}></i>
                        <i className={props.online}></i>
                        <i className="status-text">{props.status}</i>
                    </div>
        </div>   
    );
}
export default Contact;

