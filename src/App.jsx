import { useState } from "react";
import Login from "./Login";
import { supabase } from "./lib/supabase";
import logo from "/logo.png";

export default function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  const addEvent = async () => {
    if (!title) return;

    const { data, error } = await supabase.from("events").insert([
      {
        title,
        user_id: user.id,
      },
    ]);

    if (error) return alert(error.message);

    setEvents([...events, data[0]]);
    setTitle("");
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <img src={logo} style={{ width: 120 }} />

      <h1>ALC Calendar is LIVE ✅</h1>

      <p>Logged in: {user.email}</p>

      <button
        onClick={async () => {
          await supabase.auth.signOut();
          setUser(null);
        }}
      >
        Logout
      </button>

      {/* ADD EVENT */}
      <div style={{ marginTop: 30 }}>
        <input
          placeholder="New event..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: 10 }}
        />

        <button onClick={addEvent} style={{ padding: 10, marginLeft: 10 }}>
          Add
        </button>
      </div>

      {/* EVENTS */}
      <div style={{ marginTop: 30 }}>
        {events.map((e) => (
          <div
            key={e.id}
            style={{
              border: "1px solid #ddd",
              padding: 10,
              margin: 10,
              borderRadius: 8,
              width: 200,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {e.title}
          </div>
        ))}
      </div>
    </div>
  );
}
