// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import './components/CircleButton.css';
import CircleButton from './components/CircleButton';
import Modal from './components/Modal';
import EventForm from './components/Eventform';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  // Fetch events data from the server
  useEffect(() => {
    fetch('http://localhost:5000/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  // Handle joining an event
  const handleJoinEvent = async (eventId) => {
    const eventToJoin = events.find(event => event._id === eventId);
    
    if (eventToJoin && eventToJoin.maxAttendees > eventToJoin.participants) {
      eventToJoin.participants += 1;

      // Update event data on the server
      await fetch(`http://localhost:5000/api/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ participants: eventToJoin.participants })
      });

      // Update the events list to reflect the new participant count
      setEvents(events.map(event =>
        event._id === eventId ? { ...event, participants: eventToJoin.participants } : event
      ));
    } else {
      alert("Event is full or invalid.");
    }
  };

  return (
    <div className="container">
      <header className="navbar">
        <a href="#" className="socialive-text">Socia<span>live</span></a>
        <div className="nav-links">
          <a href="#" className="nav-link">Our App</a>
          <a href="#" className="nav-link">How it Works</a>
          <a href="#" className="nav-link">Events</a>
          <button className="animated-btn" onClick={openForm}>Host an Event</button>
        </div>
      </header>

      <main>
        <h1 className="title">The Coolest <span>App</span> in Town</h1>
        <p className="subtitle">events.parties.nearby</p>
      </main>

      <div className="App">
        <CircleButton onClick={openForm} />
        {isModalOpen && <Modal onClose={closeModal} />}
        {isFormOpen && <EventForm onClose={closeForm} />}
        
        {/* Events Page */}
        <div className="events-page">
          <h1>Hosted Events</h1>
          <br></br>
          <div className="event-list">
            {events.map((event) => (
              <div key={event._id} className="event-card">
                <h3>{event.hobby}</h3>
                <p>Distance: {event.distance} km</p>
                <p>Max Participants: {event.maxAttendees}</p>
                <p>Participants: {event.participants}</p>
                <button 
                  className="join-btn" 
                  onClick={() => handleJoinEvent(event._id)}
                >
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
