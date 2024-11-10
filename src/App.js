import React, { useState } from 'react';
import './App.css'; // Main styles
import './components/CircleButton.css'; // Circle button styles
import CircleButton from './components/CircleButton';
import Modal from './components/Modal'; // Assuming you have Modal.js for the modal

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      {/* Navbar Section */}
      <header className="navbar">
        <a href="#" className="socialive-text">Socia<span>live</span></a>
        <div className="nav-links">
          <a href="#" className="nav-link">Our App</a>
          <a href="#" className="nav-link">How it Works</a>
          <a href="#" className="nav-link">Events</a>
          <button className="animated-btn"><span>Host an Event</span></button>
        </div>
      </header>

      {/* Main Title and Subtitle */}
      <main>
        <h1 className="title">The Coolest <span>App</span> in Town</h1>
        <p className="subtitle">events.parties.nearby</p>
      </main>

      {/* CircleButton Component */}
      <div className="App">
        <CircleButton onClick={openModal} />
        {isModalOpen && <Modal onClose={closeModal} />}
      </div>
    </div>
  );
}

export default App;
