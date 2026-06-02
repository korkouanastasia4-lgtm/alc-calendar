import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // προσωρινά απλό test
    const email = "ALC Calendar is LIVE";
    setUser(email);
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial"
    }}>
      <img src="/logo.png" width="200" />
      <h1>ALC Calendar is LIVE ✅</h1>
    </div>
  );
}
