const reviews = [
  { name: "Ramesh Sharma", service: "Passport Renewal", stars: 5, text: "Got my passport renewed in just 3 days. Sarthak Agency handled everything including police verification follow-up." },
  { name: "Priya Mehta", service: "GST Registration", stars: 5, text: "GST registration done in one day. Very professional, explained every step — no hidden charges at all." },
  { name: "Mohammed Rafi", service: "Aadhaar Update", stars: 5, text: "I had tried twice at the post office and failed. These guys did it correctly in one visit." },
  { name: "Sunita Patil", service: "Health Insurance", stars: 5, text: "Helped me choose the best plan for my family and handled all the paperwork. Very patient with my questions." },
  { name: "Vinod Joshi", service: "PAN Card", stars: 5, text: "Fast service, polite staff. PAN card delivered within 10 days after they submitted the application." },
  { name: "Kavita Nair", service: "Udyam Registration", stars: 5, text: "Got my MSME certificate without any trouble. Very knowledgeable and helpful team." },
];

const Stars = ({ count }) => <span style={{ color: "#f9a825", fontSize: 14 }}>{"★".repeat(count)}</span>;

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: "64px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: "#e65c00", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 8 }}>WHAT CLIENTS SAY</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.7rem,3.8vw,2.4rem)", color: "#0f172a", marginBottom: 8 }}>Real Reviews</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Stars count={5} />
            <span style={{ color: "#475569", fontSize: 14 }}>5.0 · 200+ Google reviews</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {reviews.map(r => (
            <div key={r.name}
              style={{ background: "#f8fafc", borderRadius: 14, padding: 20, border: "1px solid #e2e8f0", transition: "all 0.25s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.07)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <Stars count={r.stars} />
              <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.65, margin: "10px 0 14px" }}>"{r.text}"</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#0f172a" }}>{r.name}</div>
                <span style={{ background: "#fff7ed", color: "#c2410c", padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{r.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
