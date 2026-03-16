"use client";

import { useState } from "react";

export default function Home() {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [result, setResult] = useState("");

  async function generateEmail() {

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        company,
        website,
        industry
      })
    });

    const data = await response.json();
    setResult(data.email);
  }

  return (
    <main style={{maxWidth:600, margin:"40px auto", fontFamily:"Arial"}}>

      <h1>LeadForge AI</h1>

      <input
        placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
        style={{display:"block", marginBottom:10, width:"100%"}}
      />

      <input
        placeholder="Company"
        onChange={(e)=>setCompany(e.target.value)}
        style={{display:"block", marginBottom:10, width:"100%"}}
      />

      <input
        placeholder="Website"
        onChange={(e)=>setWebsite(e.target.value)}
        style={{display:"block", marginBottom:10, width:"100%"}}
      />

      <input
        placeholder="Industry"
        onChange={(e)=>setIndustry(e.target.value)}
        style={{display:"block", marginBottom:20, width:"100%"}}
      />

      <button onClick={generateEmail}>
        Generate Email
      </button>

      <pre style={{marginTop:30, whiteSpace:"pre-wrap"}}>
        {result}
      </pre>

    </main>
  );
}