import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Reviews",  href: "#reviews" },
  { label: "FAQ",      href: "#faq" },
  { label: "Contact",  href: "#enquiry" },
];

const WA_NUMBER = "919137778557";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: scrolled ? "rgba(15,23,42,0.95)" : "#0f172a",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    transition: "all 0.3s ease",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <nav style={nav}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#e65c00,#f9a825)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Serif Display',serif", color: "#fff", fontWeight: 700, fontSize: 16 }}>S</div>
          <span style={{ color: "#fff", fontFamily: "'DM Serif Display',serif", fontSize: 18, letterSpacing: 0.3 }}>Sarthak Agency</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#f9a825"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}>
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ background: "#25D366", color: "#fff", padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600, transition: "opacity 0.2s" }}
            onMouseEnter={e => e.target.style.opacity = 0.85}
            onMouseLeave={e => e.target.style.opacity = 1}>
            WhatsApp Us
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }} className="hamburger">
          <div style={{ width: 22, height: 2, background: "#fff", margin: "5px 0", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <div style={{ width: 22, height: 2, background: "#fff", margin: "5px 0", opacity: open ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "#fff", margin: "5px 0", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#0f172a", padding: "16px 24px 24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", color: "rgba(255,255,255,0.8)", padding: "12px 0", fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{ display: "block", marginTop: 16, background: "#25D366", color: "#fff", padding: "12px 18px", borderRadius: 8, textAlign: "center", fontWeight: 600 }}>
            WhatsApp Us
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
