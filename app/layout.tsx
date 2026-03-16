import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "LeadForge AI",
  description: "AI-powered cold email generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 40px",
            backgroundColor: "#0b1220",
            color: "white",
            borderBottom: "1px solid #1e293b",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            LeadForge AI
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/app" style={{ color: "white", textDecoration: "none" }}>
              App
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}