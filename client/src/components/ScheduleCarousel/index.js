import React from "react";
import EventPreviewCard from "./EventPreviewCard";
import "./style.css";

function ScheduleCarousel({ events }) {
  return (
    <div className="carousel-container">
      <button
        aria-label="Left Carousel Button"
        className="carousel-button left-button"
        disabled
      >
        {"<"}
      </button>
      <div className="carousel-list-container">
        <ul className="carousel-list">
          {events.map((event, index) => (
            <EventPreviewCard key={index} event={event} />
          ))}
        </ul>
      </div>
      <button
        aria-label="Right Carousel Button"
        className="carousel-button right-button"
      >
        {">"}
      </button>
    </div>
  );
}

export default ScheduleCarousel;
