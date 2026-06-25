const reasons = [
  { icon: "⚡", title: "Same-Day Processing", desc: "Most documents processed on the same day you apply." },
  { icon: "🎯", title: "Zero Errors", desc: "Every form is double-checked before submission." },
  { icon: "💬", title: "WhatsApp Support", desc: "Get updates any time — even Sundays & holidays." },
  { icon: "🔐", title: "Data Privacy", desc: "Your documents are never shared with any third party." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. You know the cost before you pay." },
  { icon: "🏆", title: "Government Authorised", desc: "CSC, IRDAI & MSME authorised centre." },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "64px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Stats row — compact, replaces the old Stats section */}
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(24px,5vw,64px)", flexWrap: "wrap", marginBottom: 56, padding: "28px 32px", background: "linear-gradient(135deg,#0f172a,#1e3a5f)", borderRadius: 16 }}>
          {[["5000+", "Happy Clients"], ["10+", "Years Experience"], ["22+", "Services"], ["Same Day", "Processing"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.5rem,3vw,2rem)", color: "#f9a825", lineHeight: 1 }}>{num}</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 5 }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: "#e65c00", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 8 }}>WHY SARTHAK AGENCY</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.7rem,3.8vw,2.4rem)", color: "#0f172a" }}>6 Reasons Thousands Trust Us</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 20 }}>
          {reasons.map(r => (
            <div key={r.title} style={{ display: "flex", gap: 14, padding: "18px", borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0", alignItems: "flex-start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#fff7ed,#fef3c7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{r.icon}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{r.title}</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
