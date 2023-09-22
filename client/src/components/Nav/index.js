import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

/**
 * Nav Component
 * Purpose:
 * - Displays the main navigation bar for the application.
 * - Provides dropdown menus for nested navigation links.
 * - Responsively handles mobile screen sizes.
 */
function Nav() {
  const location = useLocation();

  // Determine if the device supports touch or is a mobile screen size
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 768 || isTouchDevice
  );

  // Control dropdown and mobile menu visibility
  const [isOpen, setIsOpen] = useState(!isMobileScreen);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Update mobile screen state upon window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the dropdown/mobile menu upon clicking outside
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !(
          event.target.closest(".navbar-nav") ||
          event.target.closest(".hamburger")
        )
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  /**
   * Toggle visibility of a specific dropdown.
   *
   * @param {string} dropdownName - Name of the dropdown section (e.g. "Events").
   */
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  /**
   * Determine if a navigation link is active.
   *
   * @param {string[]} paths - Array of paths to compare against the current path.
   * @returns {string|null} "active-link-grid" if active, otherwise null.
   */
  const getActiveLinkClass = (paths) => {
    return paths.includes(location.pathname) ? "active-link-grid" : null;
  };

  return (
    <nav className="navbar-grid" data-open={isOpen}>
      {/* Hamburger Icon */}
      <div className="grid-section">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Brand Logo */}
      <div className="grid-section">
        <NavLink to="/" className="navbar-brand">
          Dog Pull App
        </NavLink>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-nav">
        <li
          className={`grid-section dropdown ${getActiveLinkClass([
            "/UpcomingEvents",
            "/PastEvents",
            "/EventAnalytics",
          ])}`}
        >
          <span
            className="nav-item dropdown-label"
            onClick={(e) => {
              e.stopPropagation();
              if (isMobileScreen) {
                toggleDropdown("Events");
              }
            }}
          >
            Events
            {isMobileScreen && (
              <span
                className={`arrow-icon ${
                  activeDropdown === "Events" ? "up" : "down"
                }`}
              >
                {" "}
                ▼
              </span>
            )}
          </span>
          <ul
            className={`dropdown-menu ${
              isMobileScreen && activeDropdown === "Events" ? "force-show" : ""
            }`}
          >
            <li>
              <NavLink to="/UpcomingEvents" onClick={() => setIsOpen(false)}>
                Upcoming Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/PastEvents" onClick={() => setIsOpen(false)}>
                Past Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/EventAnalytics" onClick={() => setIsOpen(false)}>
                Event Analytics
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`grid-section dropdown ${getActiveLinkClass([
            "/DogRegistration",
            "/DogSearch",
          ])}`}
        >
          <span
            className="nav-item dropdown-label"
            onClick={(e) => {
              e.stopPropagation();
              if (isMobileScreen) {
                toggleDropdown("Dogs");
              }
            }}
          >
            Dogs
            {isMobileScreen && (
              <span
                className={`arrow-icon ${
                  activeDropdown === "Dogs" ? "up" : "down"
                }`}
              >
                {" "}
                ▼
              </span>
            )}
          </span>
          <ul
            className={`dropdown-menu ${
              isMobileScreen && activeDropdown === "Dogs" ? "force-show" : ""
            }`}
          >
            <li>
              <NavLink to="/DogRegistration" onClick={() => setIsOpen(false)}>
                Registration & Profile Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/DogSearch" onClick={() => setIsOpen(false)}>
                Search & View Profiles
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`grid-section dropdown ${getActiveLinkClass([
            "/HandlerRegistration",
            "/CommunityInteraction",
          ])}`}
        >
          <span
            className="nav-item dropdown-label"
            onClick={(e) => {
              e.stopPropagation();
              if (isMobileScreen) {
                toggleDropdown("Handlers");
              }
            }}
          >
            Handlers & Owners
            {isMobileScreen && (
              <span
                className={`arrow-icon ${
                  activeDropdown === "Handlers" ? "up" : "down"
                }`}
              >
                {" "}
                ▼
              </span>
            )}
          </span>
          <ul
            className={`dropdown-menu ${
              isMobileScreen && activeDropdown === "Handlers"
                ? "force-show"
                : ""
            }`}
          >
            <li>
              <NavLink
                to="/HandlerRegistration"
                onClick={() => setIsOpen(false)}
              >
                Registration & Profile Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/CommunityInteraction"
                onClick={() => setIsOpen(false)}
              >
                Community Interaction
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`grid-section dropdown ${getActiveLinkClass([
            "/RulesDocuments",
            "/ApplyOfficial",
          ])}`}
        >
          <span
            className="nav-item dropdown-label"
            onClick={(e) => {
              e.stopPropagation();
              if (isMobileScreen) {
                toggleDropdown("Officials");
              }
            }}
          >
            Officials
            {isMobileScreen && (
              <span
                className={`arrow-icon ${
                  activeDropdown === "Officials" ? "up" : "down"
                }`}
              >
                {" "}
                ▼
              </span>
            )}
          </span>
          <ul
            className={`dropdown-menu ${
              isMobileScreen && activeDropdown === "Officials"
                ? "force-show"
                : ""
            }`}
          >
            <li>
              <NavLink to="/RulesDocuments" onClick={() => setIsOpen(false)}>
                Rules & Documents
              </NavLink>
            </li>
            <li>
              <NavLink to="/ApplyOfficial" onClick={() => setIsOpen(false)}>
                Apply to be an Official
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`grid-section dropdown ${getActiveLinkClass([
            "/CommunityDiscussion",
            "/PhotoVideo",
            "/RanksStats",
          ])}`}
        >
          <span
            className="nav-item dropdown-label"
            onClick={(e) => {
              e.stopPropagation();
              if (isMobileScreen) {
                toggleDropdown("Community");
              }
            }}
          >
            Community
            {isMobileScreen && (
              <span
                className={`arrow-icon ${
                  activeDropdown === "Community" ? "up" : "down"
                }`}
              >
                {" "}
                ▼
              </span>
            )}
          </span>
          <ul
            className={`dropdown-menu ${
              isMobileScreen && activeDropdown === "Community"
                ? "force-show"
                : ""
            }`}
          >
            <li>
              <NavLink
                to="/CommunityDiscussion"
                onClick={() => setIsOpen(false)}
              >
                Discussions & Insights
              </NavLink>
            </li>
            <li>
              <NavLink to="/PhotoVideo" onClick={() => setIsOpen(false)}>
                Photos & Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/RanksStats" onClick={() => setIsOpen(false)}>
                Rankings & Statistics
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`grid-section dropdown ${getActiveLinkClass(["/About"])}`}
        >
          <NavLink
            to="/About"
            className="nav-item full-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li
          className={`grid-section dropdown ${getActiveLinkClass([
            "/Contact",
          ])}`}
        >
          <NavLink
            to="/Contact"
            className="nav-item full-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        <li
          className={`grid-section dropdown ${getActiveLinkClass([
            "/LoginSignup",
          ])}`}
        >
          <NavLink
            to="/LoginSignup"
            className="nav-item full-link"
            onClick={() => setIsOpen(false)}
          >
            Login/Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
