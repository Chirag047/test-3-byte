    // EventForm.js
    import React, { useState } from 'react';
    import './Eventform.css';

    const EventForm = ({ onClose }) => {
    const [distance, setDistance] = useState(25);
    const [hobby, setHobby] = useState('');
    const [maxParticipants, setMaxParticipants] = useState(10);

    const hobbies = [
        'House Parties', 'Sports Events', 'Clubs', 'Workshops', 'Concerts',
        'Networking', 'Gaming', 'Outdoor Adventures', 'Volunteering', 'Book Clubs'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { distance, hobby, maxParticipants };

        try {
        await fetch('http://localhost:5000/api/events', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        alert('Event created successfully!');
        onClose();
        } catch (error) {
        console.error('Error:', error);
        }
    };

    return (
        <div className="event-form-overlay" onClick={onClose}>
        <div className="event-form-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create an Event</h2>
            <form onSubmit={handleSubmit}>
            <label>Distance (0-50 km)</label>
            <input
                type="range"
                min="0"
                max="50"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
            />
            <span>{distance} km</span>

            <label>Event Type</label>
            <select value={hobby} onChange={(e) => setHobby(e.target.value)} required>
                <option value="" disabled>Select an event type</option>
                {hobbies.map((hobby, index) => (
                <option key={index} value={hobby}>{hobby}</option>
                ))}
            </select>

            <label>Max Participants (up to 20)</label>
            <input
                type="number"
                min="1"
                max="20"
                value={maxParticipants}
                onChange={(e) => setMaxParticipants(e.target.value)}
                required
            />

            <button type="submit" className="submit-btn">Host Event</button>
            <button className="close-btn" onClick={onClose}>Close</button>
            </form>
        </div>
        </div>
    );
    };

    export default EventForm;
