// DashboardLayout.jsx
import { useState } from "react";
import "./DashboardLayout.css";
import {
  Home,
  Bookmark,
  Users,
  MessageSquare,
  Calendar,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false); // sidebar
  const [homeOpen, setHomeOpen] = useState(true); // dropdown for Home
  const [networksOpen, setNetworksOpen] = useState(true); // dropdown for Networks

  return (
    <div className="dashboard">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <div className="logo">Trimzales</div>
          <span className="breadcrumbs">› Bookmarks › Favorites</span>
        </div>

        <div className="navbar-right">
          {/* Mobile menu button */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className="notif-btn">🔔</button>
          <img
            src="https://via.placeholder.com/32"
            alt="profile"
            className="profile-pic"
          />
        </div>
      </header>

      <div className="content">
        {/* Sidebar */}
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
          <nav>
            {/* HOME DROPDOWN */}
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => setHomeOpen(!homeOpen)}
              >
                <span className="dropdown-title">
                  <Home size={18} /> Home
                </span>
                {homeOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>
              {homeOpen && (
                <ul className="dropdown-list">
                  <li><span>📊</span> Dashboard</li>
                  <li>
                    <span>🔖</span> Bookmarks
                    <span className="badge">3</span>
                  </li>
                  <li><span>👥</span> Team</li>
                  <li>
                    <span>💬</span> Messages
                    <span className="badge gray">2</span>
                  </li>
                  <li><span>📅</span> Calendar</li>
                </ul>
              )}
            </div>

            {/* NETWORKS DROPDOWN */}
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => setNetworksOpen(!networksOpen)}
              >
                <span className="dropdown-title">Your Networks</span>
                {networksOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </div>
              {networksOpen && (
                <ul className="dropdown-list">
                  <li className="purple">🟣 Front-End Developers</li>
                  <li className="yellow">🟡 Back-End Developers</li>
                  <li className="green">🟢 UI/UX Designers</li>
                </ul>
              )}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-box">{children}</div>
        </main>
      </div>
    </div>
  );
}
