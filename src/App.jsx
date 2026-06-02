import logo from "./logo.png";

export default function App() {
  return (
    <div style={styles.container}>
      <img src={logo} alt="ALC Logo" style={styles.logo} />

      <h1 style={styles.title}>ALC Calendar is LIVE ✅</h1>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },
};
