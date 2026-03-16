"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    website: "",
    industry: "",
  });

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateEmail = async () => {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setEmail(data.email);
    setLoading(false);
  };

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      fontFamily: "Arial",
      backgroundColor: "#0f172a",
      color: "white"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        LeadForge AI
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="company" placeholder="Company" onChange={handleChange} />
        <input name="website" placeholder="Website" onChange={handleChange} />
        <input name="industry" placeholder="Industry" onChange={handleChange} />

        <button
          onClick={generateEmail}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          {loading ? "Generating..." : "Generate Email"}
        </button>
      </div>

      {email && (
        <pre style={{
          marginTop: "30px",
          whiteSpace: "pre-wrap",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "600px"
        }}>
          {email}
        </pre>
      )}
    </main>
  );
}