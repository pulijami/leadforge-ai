export default function Landing() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "64px", marginBottom: "20px" }}>
        LeadForge AI
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "650px",
          marginBottom: "40px",
          color: "#cbd5e1",
          lineHeight: "1.6",
        }}
      >
        Instantly generate high-converting personalized cold emails using AI.
        Save time, improve outreach, and scale your business.
      </p>

      <a
        href="/app"
        style={{
          padding: "16px 32px",
          backgroundColor: "#3b82f6",
          color: "white",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Launch App
      </a>

      <div style={{ marginTop: "60px", color: "#94a3b8", fontSize: "14px" }}>
        Built with Next.js • Powered by AI
      </div>
    </main>
  );
}