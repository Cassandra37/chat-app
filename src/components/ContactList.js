import React from 'react';
import Contact from './Contact';

    const contact = [
        
        {
            avatar: "https://randomuser.me/api/portraits/women/34.jpg",
            name: "Daisy Graves",
            status: "Online",
            online: true,
        },

        {
            avatar: "https://randomuser.me/api/portraits/men/50.jpg",
            name: "Warren Moore",
            status: "Online",
            online: true,
        },

        {
            avatar: "https://randomuser.me/api/portraits/men/23.jpg",
            name: "Clarence Franklin",
            status: "Offline",
            offline: false,
        },

        {
            avatar: "https://randomuser.me/api/portraits/women/51.jpg",
            name: "Carmen Gutierrez",
            status: "Offline",
            offline: false,
        },

        {
            avatar: "https://randomuser.me/api/portraits/women/55.jpg",
            name: "Tracy Bailey",
            status: "Offline",
            offline: false,
        }
    ]



const ContactList = () => (
    <div>
        {contact.map(item=> (
            <Contact 
            avatar={item.avatar}
            name={item.name}
            status ={item.status}
            online = {item.online}
            offline = {item.offline}
            />
        ))}
    </div>
)





export default ContactList;