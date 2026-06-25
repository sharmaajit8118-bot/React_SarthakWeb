const WA_NUMBER = "919137778557";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#0f172a", color: "rgba(255,255,255,0.65)", padding: "48px 24px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#e65c00,#f9a825)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Serif Display',serif", color: "#fff", fontWeight: 700, fontSize: 15 }}>S</div>
              <span style={{ color: "#fff", fontFamily: "'DM Serif Display',serif", fontSize: 17 }}>Sarthak Agency</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 240, marginBottom: 14 }}>
              Trusted government document service centre in Kandivali East, Mumbai since 2013.
            </p>
            {/* Contact in footer */}
            <div style={{ fontSize: 13, lineHeight: 2 }}>
              <div>📍 Shop No. 5, Near Kandivali East Station</div>
              <a href="tel:+919137778557" style={{ display: "block", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#f9a825"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                📞 +91 91377 78557
              </a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#25D366"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                💬 WhatsApp Us
              </a>
              <a href="mailto:sarthakagency@gmail.com"
                style={{ display: "block", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#f9a825"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                📧 sarthakagency@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 }}>Quick Links</div>
            {[["#services","Services"], ["#faq","FAQ"], ["#enquiry","Free Consultation"], ["#contact","Find Us"]].map(([href, label]) => (
              <a key={href} href={href} style={{ display: "block", fontSize: 13, padding: "5px 0", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#f9a825"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                {label}
              </a>
            ))}
          </div>

          {/* Hours + map link */}
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 14, letterSpacing: 0.5 }}>Working Hours</div>
            {[["All Days", "10 am – 10 pm"]].map(([day, time]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.07)", fontSize: 13 }}>
                <span>{day}</span>
                <span style={{ color: "#f9a825", fontWeight: 600 }}>{time}</span>
              </div>
            ))}
            <a href="https://maps.google.com/?q=Kandivali+East+Mumbai" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, background: "rgba(255,255,255,0.08)", color: "#fff", padding: "8px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, border: "1px solid rgba(255,255,255,0.15)", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.14)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
              📍 Open in Google Maps
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: 12 }}>
          <span>© {year} Sarthak Agency · CSC Certified · IRDAI Authorised · MSME Registered</span>
          <span>Made with ❤️ in Kandivali, Mumbai</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
