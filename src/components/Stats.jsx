const stats = [
  { number: "5000+", label: "Happy Clients" },
  { number: "10+",   label: "Years in Business" },
  { number: "22+",   label: "Services Offered" },
  { number: "8",     label: "Certifications" },
  { number: "Same Day", label: "Processing" },
];

export default function Stats() {
  return (
    <section style={{ background: "linear-gradient(135deg,#0f172a,#1e3a5f)", padding: "60px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "2.4rem", color: "#f9a825", lineHeight: 1 }}>{s.number}</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginTop: 6, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
