import { useState } from "react";

function App() {
  return (
    <div style={styles.container}>
      
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="ALC Logo"
        style={styles.logo}
      />

      {/* TITLE */}
      <h1 style={styles.title}>
        ALC Calendar is LIVE ✅
      </h1>

      {/* SIMPLE CARD (test UI) */}
      <div style={styles.card}>
        <h2>Welcome 👋</h2>
        <p>System is running correctly</p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    fontFamily: "Arial",
  },

  logo: {
    width: "180px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
  },

  card: {
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
};

export default App;
