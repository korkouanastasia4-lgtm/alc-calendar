import { useState } from "react";
import "./App.css";
import logo from "/logo.png";

export default function App() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");

  const addEvent = () => {
    if (!title) return;

    const newEvent = {
      id: Date.now(),
      title,
    };

    setEvents([...events, newEvent]);
    setTitle("");
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <img src={logo} alt="ALC Logo" style={{ width: 120 }} />

      <h1>ALC Calendar is LIVE ✅</h1>

      {/* ADD EVENT */}
      <div style={{ marginTop: 30 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add event..."
          style={{ padding: 10, width: 200 }}
        />

        <button onClick={addEvent} style={{ marginLeft: 10, padding: 10 }}>
          Add
        </button>
      </div>

      {/* EVENTS LIST */}
      <div style={{ marginTop: 30 }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              margin: 10,
              padding: 10,
              border: "1px solid #ddd",
              borderRadius: 8,
              width: 200,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
