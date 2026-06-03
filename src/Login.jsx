import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");

  const handleAuth = async () => {
    if (mode === "login") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) return alert(error.message);

      onLogin(data.user);
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) return alert(error.message);

      alert("Account created! Now login.");
      setMode("login");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h2>{mode === "login" ? "Login" : "Register"}</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: 10 }}
      />

      <button onClick={handleAuth} style={{ padding: 10 }}>
        {mode === "login" ? "Login" : "Register"}
      </button>

      <p
        style={{ cursor: "pointer", marginTop: 20 }}
        onClick={() => setMode(mode === "login" ? "register" : "login")}
      >
        Switch mode
      </p>
    </div>
  );
}
