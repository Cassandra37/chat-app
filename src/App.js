import React from 'react';
import Contact from './components/Contact.js';


function App() {
  return (
    <div className="App">
          <Contact avatar="https://randomuser.me/api/portraits/women/17.jpg" 
          name="Anita Sutton" status="Online" online="status-online" />

      <div>
          <Contact avatar="https://randomuser.me/api/portraits/men/88.jpg"
          name="Jim George" status="Offline" offline="status-offline"/>
      </div>

      <div>
          <Contact avatar="https://randomuser.me/api/portraits/women/76.jpg"
          name="Charlotte Ryan" status="Online" online="status-online"/>
      </div>

    </div>

    
  );
}

export default App;
