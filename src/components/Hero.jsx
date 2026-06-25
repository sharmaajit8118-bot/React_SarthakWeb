const WA_NUMBER = "918655788969";

export default function Hero() {
  return (
    <section style={{
      background: "radial-gradient(ellipse at 60% 40%, #1e3a5f 0%, #0f172a 60%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "72px 24px 56px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "10%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(230,92,0,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 720, position: "relative" }}>
        <div style={{ display: "inline-block", background: "rgba(230,92,0,0.15)", color: "#f9a825", padding: "6px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, letterSpacing: 1, marginBottom: 22, border: "1px solid rgba(249,168,37,0.3)" }}>
          📍 Kandivali East, Mumbai · Since 2013
        </div>

        <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(2rem,5.5vw,3.6rem)", color: "#ffffff", lineHeight: 1.15, marginBottom: 16 }}>
          Government Services —{" "}
          <span style={{ background: "linear-gradient(135deg,#e65c00,#f9a825)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Done Right & Fast
          </span>
        </h1>

        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.95rem,2.2vw,1.1rem)", lineHeight: 1.7, marginBottom: 32, maxWidth: 540, margin: "0 auto 32px" }}>
          Aadhaar, PAN, Passport, GST, Udyam, Insurance & more — handled by experts in one visit. 5000+ happy clients, same-day processing.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={`https://wa.me/${WA_NUMBER}?text=Hello, I need help with government services`} target="_blank" rel="noopener noreferrer"
            style={{ background: "#25D366", color: "#fff", padding: "13px 26px", borderRadius: 10, fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(37,211,102,0.3)", transition: "transform 0.2s,box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.3)"; }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
          <a href="tel:+918655788969"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff", padding: "13px 26px", borderRadius: 10, fontWeight: 600, fontSize: 15, border: "1px solid rgba(255,255,255,0.2)", transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
            📞 Call Now
          </a>
          <a href="#enquiry"
            style={{ background: "linear-gradient(135deg,#e65c00,#f9a825)", color: "#fff", padding: "13px 26px", borderRadius: 10, fontWeight: 700, fontSize: 15, transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}>
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
