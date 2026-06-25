import { useState } from "react";

const WA_NUMBER = "919137778557";

const faqs = [
  { q: "How long does Aadhaar correction take?", a: "Requests are submitted via UIDAI and typically reflect within 5–7 working days after verification." },
  { q: "Can I get a PAN card on the same day?", a: "We submit PAN applications the same day. Physical card dispatched in 7–15 working days; instant e-PAN available within 48 hours." },
  { q: "What is the cost of GST registration?", a: "Government registration is free. We charge a nominal service fee — WhatsApp us for the current rate." },
  { q: "Do I need an appointment?", a: "No appointment needed — walk in Mon–Sat 10am–7pm, Sun 10am–2pm. WhatsApp ahead for urgent work." },
  { q: "Is my personal data safe?", a: "Yes. We are police-verified and handle all documents with strict confidentiality. Your data is never shared." },
  { q: "Do you handle ITR and GST returns?", a: "Yes — we file income tax returns and GST returns for individuals and small businesses. WhatsApp us for a quick quote." },
  { q: "What payment methods do you accept?", a: "Cash, UPI (GPay, PhonePe, Paytm) and bank transfer." },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" style={{ padding: "64px 24px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ color: "#e65c00", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 8 }}>QUICK ANSWERS</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.7rem,3.8vw,2.4rem)", color: "#0f172a" }}>Common Questions</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ borderRadius: 12, border: `1px solid ${active === i ? "#fed7aa" : "#e2e8f0"}`, overflow: "hidden", transition: "border-color 0.2s" }}>
              <button onClick={() => setActive(active === i ? null : i)}
                style={{ width: "100%", padding: "16px 20px", background: active === i ? "#fff7ed" : "#fff", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left", transition: "background 0.2s" }}>
                <span style={{ fontWeight: 600, fontSize: 14, color: "#0f172a", paddingRight: 12 }}>{item.q}</span>
                <span style={{ fontSize: 18, color: "#e65c00", transition: "transform 0.3s", transform: active === i ? "rotate(45deg)" : "none", lineHeight: 1, flexShrink: 0 }}>+</span>
              </button>
              {active === i && (
                <div style={{ padding: "0 20px 16px", background: "#fff7ed" }}>
                  <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <a href={`https://wa.me/${WA_NUMBER}?text=Hello, I have a question about your services`} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "11px 22px", borderRadius: 10, fontWeight: 600, fontSize: 14, transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}>
            Still have a question? Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
