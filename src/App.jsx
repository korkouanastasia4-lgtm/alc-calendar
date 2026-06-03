import { useState } from "react";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={styles.container}>
      
      <img src="/logo.png" alt="ALC Logo" style={styles.logo} />

      <h1 style={styles.title}>
        ALC Calendar is LIVE ✅
      </h1>

      <div style={styles.card}>
        {!user ? (
          <Login onLogin={(userData) => setUser(userData)} />
        ) : (
          <>
            <h2>Welcome 👋</h2>
            <p>System is running correctly</p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial",
  },
  logo: {
    width: "180px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  card: {
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    width: "300px",
    background: "white",
  },
};
