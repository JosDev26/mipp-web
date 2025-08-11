"use client"

import Header from "../../../components/components/Header"
import Welcome from "../../../components/components/Welcome"
import ActionCards from "../../../components/components/ActionCards"
import "../../../styles/admin.css"


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (isLoggedIn !== "true") {
        router.replace("/");
      } else {
        setChecking(false);
      }
    }
  }, [router]);

  if (checking) return null; // O un loader

  return (
    <div className="app-container">
      <div className="geometric-background">
        <div className="diagonal-left"></div>
        <div className="diagonal-right"></div>
      </div>
      <div className="content-wrapper">
        <Header />
        <main className="main-content">
          <Welcome />
          <ActionCards />
        </main>
      </div>
    </div>
  );
}
