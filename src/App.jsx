import React from 'react';
import Navbar from './components/Navbar.jsx';
import FirstShow from './components/FirstShow.jsx';

const App = () => {
  return (
    <div className='w-full'>
      <Navbar />
      {/* Rest of your app */}
      <FirstShow></FirstShow>
    </div>

  );
};

export default App;