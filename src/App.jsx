function App() {
  return (
    <div>

      {/* HEADER */}
      <header style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "15px"
      }}>
        <img src="/logo.png" style={{ width: "80px" }} />
        <h2>ALC Calendar</h2>
      </header>

      {/* STATUS */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>ALC Calendar is LIVE ✅</h1>
        <p>System is running correctly</p>
      </div>

    </div>
  )
}

export default App
