import { useState } from "react";
import Login from "./Login";
import { supabase } from "./lib/supabase";
import logo from "/logo.png";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <img src={logo} alt="logo" style={{ width: 120 }} />

      <h1>ALC Calendar is LIVE ✅</h1>

      <p>Logged in as: {user.email}</p>

      <button
        onClick={async () => {
          await supabase.auth.signOut();
          setUser(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}
