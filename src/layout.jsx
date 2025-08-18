// DashboardLayout.jsx
import { useState } from "react";
import "./layout.css";
import { Home, Bookmark, Users, MessageSquare, Calendar, Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

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
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
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
            <ul>
              <li><Home size={18} /> Dashboard</li>
              <li>
                <Bookmark size={18} /> Bookmarks 
                <span className="badge">3</span>
              </li>
              <li><Users size={18} /> Team</li>
              <li>
                <MessageSquare size={18} /> Messages 
                <span className="badge gray">2</span>
              </li>
              <li><Calendar size={18} /> Calendar</li>
            </ul>
          </nav>

          <div className="networks">
            <h3>Your Networks</h3>
            <ul>
              <li className="purple">🟣 Front-End Developers</li>
              <li className="yellow">🟡 Back-End Developers</li>
              <li className="green">🟢 UI/UX Designers</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="content-box">{children}</div>
        </main>
      </div>
    </div>
  );
}
