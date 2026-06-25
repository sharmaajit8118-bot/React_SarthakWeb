import { useState } from "react";

const servicesDocs = [
  {
    service: "Aadhaar Update/Correction",
    docs: ["Original Aadhaar card", "Proof of address (electricity bill/passport/bank passbook)", "Proof of identity (PAN/passport/voter ID)", "Mobile number (for OTP)"],
  },
  {
    service: "PAN Card (New)",
    docs: ["Aadhaar card (mandatory)", "Passport-size photograph (2 copies)", "Proof of address", "Date of birth proof (birth certificate/10th marksheet)"],
  },
  {
    service: "Passport (Fresh)",
    docs: ["Aadhaar card", "PAN card", "Birth certificate or school leaving certificate", "Proof of address (utility bill/bank statement)", "Passport-size photographs (2 copies)"],
  },
  {
    service: "GST Registration",
    docs: ["PAN of business/proprietor", "Aadhaar of proprietor/partners/directors", "Bank account statement or cancelled cheque", "Proof of business address (electricity bill/rent agreement)", "Passport-size photograph of proprietor"],
  },
  {
    service: "Udyam Registration (MSME)",
    docs: ["Aadhaar of proprietor/authorized signatory", "PAN of business entity", "Bank account details", "Business address proof"],
  },
  {
    service: "Voter ID (New)",
    docs: ["Aadhaar card", "Proof of age (birth certificate/10th marksheet)", "Proof of residence", "Passport-size photograph (2 copies)"],
  },
  {
    service: "Driving Licence",
    docs: ["Aadhaar card", "PAN card", "Passport-size photographs (2 copies)", "Medical certificate (Form 1-A)", "Existing learner's licence (for permanent DL)"],
  },
  {
    service: "Ration Card (New)",
    docs: ["Aadhaar of all family members", "Proof of address", "Income certificate", "Gas connection details (if any)", "Passport-size photographs of head of family"],
  },
  {
    service: "Income/Domicile Certificate",
    docs: ["Aadhaar card", "Proof of residence (utility bill/rent agreement)", "Self-declaration affidavit", "Income proof (salary slip / bank statement)"],
  },
  {
    service: "Shop Act Licence (Gumasta)",
    docs: ["Aadhaar of proprietor", "PAN of proprietor", "Business address proof", "Passport-size photograph", "Nature of business details"],
  },
  {
    service: "Health/Life Insurance",
    docs: ["Aadhaar card", "PAN card", "Recent passport-size photograph", "Bank account details (for premium payment)", "Existing policy details (for portability)"],
  },
  {
    service: "ITR Filing",
    docs: ["PAN card", "Aadhaar card", "Form 16 (for salaried) or business income details", "Bank account statements", "Investment proofs (80C, 80D etc.)", "Previous year ITR (if applicable)"],
  },
];

export default function DocumentsRequired() {
  const [active, setActive] = useState(null);

  return (
    <section id="docs" style={{ padding: "80px 24px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ color: "#e65c00", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 10 }}>DOCUMENTS REQUIRED</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#0f172a", marginBottom: 14 }}>What to Bring for Your Service</h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>Click on any service to see the required documents.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {servicesDocs.map((item, i) => (
            <div key={item.service} style={{ background: "#fff", borderRadius: 12, border: `1px solid ${active === i ? "#fed7aa" : "#e2e8f0"}`, overflow: "hidden", transition: "border-color 0.2s" }}>
              <button onClick={() => setActive(active === i ? null : i)}
                style={{ width: "100%", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "left" }}>
                <span style={{ fontWeight: 600, fontSize: 15, color: "#0f172a" }}>{item.service}</span>
                <span style={{ fontSize: 20, color: "#e65c00", transition: "transform 0.3s", transform: active === i ? "rotate(45deg)" : "none", lineHeight: 1 }}>+</span>
              </button>
              {active === i && (
                <div style={{ padding: "0 20px 20px" }}>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {item.docs.map(d => (
                      <li key={d} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#475569", fontSize: 14 }}>
                        <span style={{ color: "#22c55e", fontWeight: 700, marginTop: 1 }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
