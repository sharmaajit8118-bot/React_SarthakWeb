import { useState } from "react";

const WA_NUMBER = "918655788969";

const services = [
  { icon: "🪪", name: "Aadhaar Services", desc: "New, correction, update, download & address change", docs: ["Original Aadhaar card", "Proof of address (electricity bill / passport / bank passbook)", "Mobile number (for OTP)"] },
  { icon: "💳", name: "PAN Card", desc: "New PAN, correction, lost PAN, minor-to-major conversion", docs: ["Aadhaar card (mandatory)", "Passport-size photograph (2 copies)", "Date of birth proof"] },
  { icon: "📘", name: "Passport", desc: "Fresh, renewal, Tatkal & police verification support", docs: ["Aadhaar card", "PAN card", "Birth certificate or school leaving certificate", "Proof of address", "Passport-size photos (2 copies)"] },
  { icon: "📋", name: "GST Registration", desc: "New GST, amendments, returns filing & cancellation", docs: ["PAN of business / proprietor", "Aadhaar of proprietor", "Bank statement or cancelled cheque", "Business address proof"] },
  { icon: "🏭", name: "Udyam / MSME", desc: "MSME/Udyam certificate for micro, small & medium enterprises", docs: ["Aadhaar of proprietor", "PAN of business entity", "Bank account details", "Business address proof"] },
  { icon: "🗳️", name: "Voter ID", desc: "New card, corrections, address update & duplicate", docs: ["Aadhaar card", "Age proof (birth certificate / marksheet)", "Proof of residence", "Passport-size photos (2 copies)"] },
  { icon: "🚗", name: "Driving Licence", desc: "Learner licence, permanent DL, renewal & duplicate", docs: ["Aadhaar card", "PAN card", "Passport-size photos (2 copies)", "Medical certificate (Form 1-A)"] },
  { icon: "🏠", name: "Ration Card", desc: "New card, member addition/deletion & category change", docs: ["Aadhaar of all family members", "Proof of address", "Income certificate", "Photos of head of family"] },
  { icon: "📜", name: "Income / Domicile / Caste Certificate", desc: "All government certificates processed quickly", docs: ["Aadhaar card", "Proof of residence", "Self-declaration affidavit", "Income proof (salary slip / bank statement)"] },
  { icon: "🏢", name: "Shop Act (Gumasta)", desc: "New licence & renewal for shop establishments", docs: ["Aadhaar of proprietor", "PAN of proprietor", "Business address proof", "Nature of business details"] },
  { icon: "🏥", name: "Health Insurance", desc: "Mediclaim, family floater & top-up plans", docs: ["Aadhaar card", "PAN card", "Recent passport-size photo", "Bank details (for premium)", "Existing policy (for portability)"] },
  { icon: "🚘", name: "Vehicle Insurance", desc: "Two-wheeler, four-wheeler & commercial vehicle", docs: ["Aadhaar card", "PAN card", "Vehicle RC", "Existing policy (for renewal)"] },
  { icon: "💼", name: "Life Insurance", desc: "Term, endowment & ULIP — comparison & purchase support", docs: ["Aadhaar card", "PAN card", "Recent passport-size photo", "Income proof"] },
  { icon: "📊", name: "ITR Filing", desc: "Income Tax Returns for individuals & small businesses", docs: ["PAN card", "Aadhaar card", "Form 16 (salaried) or business income details", "Bank statements", "Investment proofs (80C, 80D etc.)"] },
  { icon: "🏗️", name: "Property Card / 7·12", desc: "Extract, mutation entry & search report", docs: ["Property details", "Aadhaar card", "Previous property documents"] },
  { icon: "👨‍👩‍👧", name: "Birth / Death / Marriage Certificate", desc: "New & duplicate certificates", docs: ["Aadhaar card", "Hospital / institution records", "Witness details (for marriage certificate)"] },
  { icon: "🎓", name: "Scholarships", desc: "EBC, OBC, SC/ST application & renewal", docs: ["Aadhaar card", "Caste certificate", "Income certificate", "Marksheets", "Bank passbook"] },
  { icon: "📦", name: "Courier, Notary & More", desc: "Document courier, notary, attestation, photocopying & recharge", docs: ["Bring originals for attestation / notary work"] },
];

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="services" style={{ padding: "64px 24px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ color: "#e65c00", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 8 }}>WHAT WE OFFER</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.7rem,3.8vw,2.4rem)", color: "#0f172a", marginBottom: 10 }}>22+ Services Under One Roof</h2>
          <p style={{ color: "#64748b", fontSize: 15 }}>Tap any service to see required documents, then enquire instantly.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {services.map((s, i) => (
            <div key={s.name}
              style={{ background: "#fff", borderRadius: 14, border: `1px solid ${expanded === i ? "#fed7aa" : "#e2e8f0"}`, overflow: "hidden", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: expanded === i ? "0 8px 24px rgba(0,0,0,0.08)" : "none" }}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{ width: "100%", padding: "20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", display: "block" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 4 }}>{s.name}</div>
                <div style={{ color: "#64748b", fontSize: 13, lineHeight: 1.5 }}>{s.desc}</div>
                <div style={{ marginTop: 10, color: "#e65c00", fontSize: 12, fontWeight: 600 }}>
                  {expanded === i ? "▲ Hide docs" : "▼ Documents needed"}
                </div>
              </button>

              {expanded === i && (
                <div style={{ padding: "0 20px 20px" }}>
                  <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: 12, marginBottom: 14 }}>
                    {s.docs.map(d => (
                      <div key={d} style={{ display: "flex", gap: 8, alignItems: "flex-start", color: "#475569", fontSize: 13, lineHeight: 1.5, marginBottom: 6 }}>
                        <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0 }}>✓</span>
                        {d}
                      </div>
                    ))}
                  </div>
                  <a href={`https://wa.me/${WA_NUMBER}?text=Hello, I need help with ${s.name}`} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "#25D366", color: "#fff", padding: "10px 16px", borderRadius: 8, fontWeight: 600, fontSize: 13, transition: "opacity 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
                    onMouseLeave={e => e.currentTarget.style.opacity = 1}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Enquire on WhatsApp
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
