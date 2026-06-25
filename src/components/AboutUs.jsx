export default function AboutUs() {
  return (
    <section id="about" style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <div style={{ color: "#e65c00", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 12 }}>WHO WE ARE</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#0f172a", marginBottom: 20, lineHeight: 1.2 }}>
            Kandivali's Most Trusted Document Service Centre
          </h2>
          <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Sarthak Agency has been serving residents and businesses in Kandivali East, Mumbai for over a decade. We handle all government documentation and registration services — so you don't have to navigate the complex system alone.
          </p>
          <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
            From Aadhaar corrections and PAN applications to GST registration and insurance — our experienced team ensures your work is done accurately, quickly, and with zero hassle.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["10+ Years Experience", "5000+ Happy Clients", "22+ Services"].map(t => (
              <span key={t} style={{ background: "#fff7ed", color: "#c2410c", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600, border: "1px solid #fed7aa" }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { icon: "🏛️", title: "Government Expertise", desc: "Deep knowledge of all govt. processes and portals" },
            { icon: "⚡", title: "Fast Turnaround", desc: "Same-day processing for most documents" },
            { icon: "🔒", title: "100% Secure", desc: "Your data is handled with complete confidentiality" },
            { icon: "💬", title: "Always Reachable", desc: "WhatsApp support 7 days a week" },
          ].map(c => (
            <div key={c.title} style={{ background: "#f8fafc", borderRadius: 12, padding: 20, border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 6 }}>{c.title}</div>
              <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
