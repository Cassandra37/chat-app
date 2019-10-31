import React from 'react';
import './chat.css';


function Contact(props){
    return(
        <div className="Contact">
                <img className="avatar" src={props.avatar}/>
                <div>
                    <div className="name">
                        <p className="name">{props.name}</p>    
                    </div>
                    
                    <div className="status">
                        {props.online ?  <i className="status-online"></i> :  <i className="status-offline"></i> }
                        {props.offline ? true : false}
                        <i className="status-text">{props.status}</i>
                    </div>
                </div>
        </div>   
    );
}
export default Contact;

