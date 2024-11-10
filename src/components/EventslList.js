    // EventsList.js
    import React, { useEffect, useState } from 'react';
    import './EventsList.css';

    const EventsList = () => {
    const [events, setEvents] = useState([]);

    // Fetch events from the server (from events.json)
    useEffect(() => {
        const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/events');
            const data = await response.json();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
        };

        fetchEvents();
    }, []);

    // Handle Join Event
    const handleJoinEvent = (eventId) => {
        // Logic for joining event
        // Could send a request to backend to track who joined the event
        alert(`You joined event with ID: ${eventId}`);
    };

    return (
        <div className="events-list">
        <h2>Hosted Events</h2>
        <div className="event-cards">
            {events.map((event, index) => (
            <div key={index} className="event-card">
                <h3>{event.hobby}</h3>
                <p><strong>Distance:</strong> {event.distance} km</p>
                <p><strong>Max Attendees:</strong> {event.maxAttendees}</p>
                <button className="join-btn" onClick={() => handleJoinEvent(event._id)}>Join Event</button>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default EventsList;
