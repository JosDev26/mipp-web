import "../../styles/admin.css"

import { useEffect, useState } from "react";

export default function WelcomeSection() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("userName") || "");
      setLastName(localStorage.getItem("userLastName") || "");
    }
  }, []);

  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <p className="greeting">Bienvenido/a,</p>
        <h2 className="user-name">{name} {lastName}</h2>
      </div>
      <p className="question">¿Qué deseas hacer hoy?</p>
    </section>
  );
}

