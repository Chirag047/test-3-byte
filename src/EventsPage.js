import React from 'react';
import './EventsPage.css';

// Import local images
import volleyballImage from './assets/images/volley.jpg';
import housePartyImage from './assets/images/party.avif';
import musicFestivalImage from './assets/images/fest.jpg';

// Sample event data
const events = [
  {
    name: "Volleyball Match",
    description: "Join us for a fun volleyball game. We need 11 players!",
    place: "Central Park, Court 3",
    time: "Saturday, 2 PM",
    members: 11,
    image: volleyballImage // Use the imported image
  },
  {
    name: "House Party",
    description: "A crazy house party with music, drinks, and fun!",
    place: "Tom’s House, 12th Street",
    time: "Friday, 8 PM",
    members: 50,
    image: housePartyImage // Use the imported image
  },
  {
    name: "Music Festival",
    description: "Dance, sing, and vibe with amazing music all day long.",
    place: "Riverside Festival Grounds",
    time: "Sunday, 3 PM",
    members: 500,
    image: musicFestivalImage // Use the imported image
  }
];

const EventsPage = () => {
  return (
    <div className="events-page">
      <h1 className="events-heading">Explore Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-info">
              <h2 className="event-name">{event.name}</h2>
              <p className="event-description">{event.description}</p>
              <div className="event-details">
                <p><strong>Location:</strong> {event.place}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Participants:</strong> {event.members} / 50</p>
              </div>
              <button className="join-button">Join Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
