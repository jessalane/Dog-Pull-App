// EventPreviewCard.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function EventPreviewCard({ event }) {
  return (
    <li className="event-preview-card">
      <div className="info-container">
        <div className="date-region">
          <span className="date">{event.date}</span>
          <span className="region">Region {event.region}</span>
        </div>
        <div className="location">
          <span className="country">{event.country}</span>
          <span className="state">{event.state}</span>
          <span className="town">{event.town}</span>
        </div>
        <div className="type-status">
          <span className="type">{event.type}</span>
          <span className="status">{event.status}</span>
        </div>
        <div className="novice-practice">
          <span className="novice">
            {event.noviceAllowed ? "Novice Allowed" : ""}
          </span>
          <span className="practice">
            {event.practiceAllowed ? "Practice Allowed" : ""}
          </span>
        </div>
        <div className="more-info">
          <NavLink
            to={`/events/${event.id}`}
            aria-label={`More info for ${event.town} ${event.type} Event`}
            className="info-link"
          >
            More Info
          </NavLink>
        </div>
        <span className="hover-highlight"></span>
      </div>
    </li>
  );
}

export default EventPreviewCard;
