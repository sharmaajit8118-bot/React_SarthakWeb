const WA_NUMBER = "918655788969";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ color: "#e65c00", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 10 }}>FIND US</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#0f172a" }}>Visit Us in Kandivali East</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>
          <div>
            {[
              { icon: "📍", label: "Address", value: "Room No. 5, Mahatma Gandhi Welfare Soc, Balaji Estate Rd, opp. Mahindra Yellow Gate, Hanuman Nagar, Akurli Road, Kandivali East, Mumbai – 400101" },
              { icon: "📞", label: "Phone", value: "+91 8655788969", href: "tel:+918655788969" },
              { icon: "💬", label: "WhatsApp", value: "Chat with us now", href: `https://wa.me/${WA_NUMBER}` },
              { icon: "📧", label: "Email", value: "sarthakagency21@gmail.com", href: "mailto:sarthakagency@gmail.com" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "#fff7ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "#0f172a", fontWeight: 500, fontSize: 15, transition: "color 0.2s" }}
                        onMouseEnter={e => e.target.style.color = "#e65c00"}
                        onMouseLeave={e => e.target.style.color = "#0f172a"}>
                        {item.value}
                      </a>
                    : <span style={{ color: "#0f172a", fontWeight: 500, fontSize: 15 }}>{item.value}</span>
                  }
                </div>
              </div>
            ))}

            <div style={{ marginTop: 8, background: "#f8fafc", borderRadius: 12, padding: 20, border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 10 }}>🕐 Working Hours</div>
              {[["Monday – Saturday", "10:00 AM – 7:00 PM"], ["Sunday", "10:00 AM – 2:00 PM"]].map(([day, time]) => (
                <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #e2e8f0", fontSize: 14 }}>
                  <span style={{ color: "#475569" }}>{day}</span>
                  <span style={{ fontWeight: 600, color: "#0f172a" }}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", height: 380 }}>
            <iframe
              title="Sarthak Agency Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4123456789!2d72.8567!3d19.2043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzE1LjUiTiA3MsKwNTEnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
