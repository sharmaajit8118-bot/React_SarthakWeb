import { useState } from "react";

const WA_NUMBER = "918655788969";

const services = [
  "Aadhaar Services", "PAN Card", "Passport Services", "GST Registration",
  "Udyam/MSME Registration", "Voter ID", "Driving Licence", "Ration Card",
  "Income/Domicile/Caste Certificate", "Shop Act Licence (Gumasta)",
  "Health Insurance", "Vehicle Insurance", "Life Insurance", "Travel Insurance",
  "Jan Dhan Account", "PM Kisan Yojana", "ITR Filing", "Property Card (7/12)",
  "Birth/Death/Marriage Certificate", "Scholarship Services",
  "Courier & Notary", "Other",
];

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    const msg = `Hello Sarthak Agency!%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}${form.message ? `%0AMessage: ${form.message}` : ""}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  };

  const field = { width: "100%", padding: "11px 13px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 14, fontFamily: "'DM Sans',sans-serif", outline: "none", transition: "border-color 0.2s", background: "#fff", boxSizing: "border-box" };

  return (
    <section id="enquiry" style={{ padding: "64px 24px", background: "linear-gradient(135deg,#0f172a,#1e3a5f)" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ color: "#f9a825", fontWeight: 700, fontSize: 13, letterSpacing: 1.5, marginBottom: 8 }}>FREE CONSULTATION</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.7rem,3.8vw,2.2rem)", color: "#fff", marginBottom: 8 }}>Get Help Today</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>We'll reply on WhatsApp within minutes.</p>
        </div>

        {sent ? (
          <div style={{ textAlign: "center", background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: 36, border: "1px solid rgba(255,255,255,0.12)" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>✅</div>
            <h3 style={{ color: "#fff", fontFamily: "'DM Serif Display',serif", fontSize: "1.4rem", marginBottom: 8 }}>Enquiry sent!</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Your WhatsApp will open to confirm. We'll be in touch shortly.</p>
            <button onClick={() => { setSent(false); setForm({ name: "", phone: "", service: "", message: "" }); }}
              style={{ marginTop: 20, background: "#e65c00", color: "#fff", border: "none", padding: "9px 22px", borderRadius: 8, cursor: "pointer", fontWeight: 600, fontSize: 14 }}>
              Submit Another
            </button>
          </div>
        ) : (
          <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 14, padding: "28px 28px", border: "1px solid rgba(255,255,255,0.12)" }}>
            {[
              { key: "name", label: "Full Name *", placeholder: "Your name", type: "text" },
              { key: "phone", label: "Mobile Number *", placeholder: "10-digit number", type: "tel" },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 600, marginBottom: 5 }}>{label}</label>
                <input style={{ ...field, borderColor: errors[key] ? "#ef4444" : "#e2e8f0" }}
                  type={type} placeholder={placeholder} value={form[key]}
                  onChange={e => setForm(f => ({ ...f, [key]: key === "phone" ? e.target.value.replace(/\D/g, "") : e.target.value }))}
                  maxLength={key === "phone" ? 10 : undefined}
                  onFocus={e => e.target.style.borderColor = "#e65c00"}
                  onBlur={e => e.target.style.borderColor = errors[key] ? "#ef4444" : "#e2e8f0"} />
                {errors[key] && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors[key]}</div>}
              </div>
            ))}

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 600, marginBottom: 5 }}>Service Required *</label>
              <select style={{ ...field, borderColor: errors.service ? "#ef4444" : "#e2e8f0", color: form.service ? "#0f172a" : "#94a3b8" }}
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "#e65c00"}
                onBlur={e => e.target.style.borderColor = errors.service ? "#ef4444" : "#e2e8f0"}>
                <option value="">Select a service...</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <div style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.service}</div>}
            </div>

            <div style={{ marginBottom: 22 }}>
              <label style={{ display: "block", color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 600, marginBottom: 5 }}>Message (Optional)</label>
              <textarea style={{ ...field, resize: "vertical", minHeight: 70 }}
                placeholder="Any specific details..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "#e65c00"}
                onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
            </div>

            <button onClick={handleSubmit}
              style={{ width: "100%", background: "#25D366", color: "#fff", border: "none", padding: "13px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "opacity 0.2s", fontFamily: "'DM Sans',sans-serif" }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Send Enquiry on WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
