const badges = [
  "CSC Certified", "MSME Registered", "Gumasta Licensed", "IRDAI Authorised",
  "Police Verified", "Religare Partner", "IIBF Certified", "MS-CIT Centre",
];

export default function TrustBadges() {
  return (
    <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", padding: "20px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", alignItems: "center" }}>
        <span style={{ color: "#64748b", fontSize: 13, fontWeight: 600, marginRight: 8 }}>CERTIFIED & AUTHORISED:</span>
        {badges.map(b => (
          <span key={b} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 600, color: "#0f172a", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <span style={{ color: "#e65c00" }}>✓</span> {b}
          </span>
        ))}
      </div>
    </section>
  );
}
