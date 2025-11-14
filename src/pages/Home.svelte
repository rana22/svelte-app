<script lang="ts">
  import SwipeCarousel from '../lib/SwipeCarousel.svelte';

  // Use BASE_URL so images work on GitHub Pages subpaths
  const base = import.meta.env.BASE_URL; // "/" or "/repo-name/"
  const images = [
    { src: `${base}images/apt-1.png`, alt: 'Living room' },
    { src: `${base}images/apt-2.png`, alt: 'Kitchen' },
    { src: `${base}images/apt-3.png`, alt: 'Bedroom' },
    { src: `${base}images/apt-4.png`, alt: 'Bathroom' },
    { src: `${base}images/apt-5.png`, alt: 'Bathroom' },
    { src: `${base}images/apt-6.png`, alt: 'Bathroom' }
  ];
</script>


<div class="page">
  <header class="topbar">
    <div class="brand">180 Talbott St · Rockville</div>
    <div class="chips">
      <span class="chip chip--accent">2 Bed · 1 Bath</span>
      <span class="chip">Quiet neighborhood</span>
      <span class="chip">Near Metro</span>
    </div>
  </header>

  <main class="container">
    <div class="card gallery-wrap">
      <SwipeCarousel {images} />
    </div>

    <div class="card">
      <h1>2-Bedroom / 1-Bath Apartment for Rent – 180 Talbott Street, Rockville, MD</h1>

      <div class="info-bar">
        <span class="badge">Available Dec 1, 2025</span>
        <span class="dot"></span>
        <span class="badge">Tours begin Nov 20, 2025</span>
      </div>

      <p class="lead">
        Spacious and bright 2-bedroom, 1-bathroom apartment located just off Rockville Pike in a quiet and convenient
        neighborhood. Enjoy comfortable living with easy access to shopping, transportation, and parks — all within minutes
        of your door.
      </p>

      <h2>✨ Apartment Features</h2>
      <div class="grid">
        <ul class="list">
          <li>Two parking passes included</li>
          <li>Bright, spacious living area with ample natural light</li>
          <li><strong>Prime location:</strong></li>
          <ul class="list list--indented">
            <li>1–2 minutes to Metrobus</li>
            <li>3–5 minutes to Twinbrook Metro Station (Red Line)</li>
            <li>25–30 minutes to Washington, D.C.</li>
          </ul>
        </ul>
        <ul class="list">
          <li>Shops nearby: ALDI and other grocery options within 3 minutes</li>
          <li>Parks and walking trails nearby — perfect for running or outdoor activities</li>
          <li>Shared washer and dryer in the building (no driving needed)</li>
          <li>Private storage space in the basement</li>
          <li><strong>Tenant pays:</strong> internet, electricity, and gas</li>
        </ul>
      </div>

      <h2>💰 Rent Options (for Qualified Renters)</h2>
      <div class="options">
        <section class="option">
          <h3>Option 1 – Lease Takeover</h3>
          <ul class="list">
            <li><strong>Monthly Rent:</strong> $1,400</li>
            <li><strong>Term:</strong> December 2025 – April 2026 (5 months)</li>
            <li><strong>Renewal:</strong> Option to extend for 1–2 years at an estimated 3–7% increase (~$1,500/month)</li>
          </ul>
        </section>

        <section class="option">
          <h3>Option 2 – New 1–2 Year Lease</h3>
          <ul class="list">
            <li><strong>Monthly Rent:</strong> Starting from $1,500/month</li>
            <li>Standard long-term lease with renewal options available</li>
          </ul>
        </section>
      </div>

      <h2>📝 Application & Screening</h2>
      <ul class="list">
        <li>Credit and background check</li>
        <li>Income verification</li>
        <li>Rental history review</li>
        <li>Only qualified renters will be considered for lease approval.</li>
      </ul>

      <div class="contact card--subtle">
        <div>
          <h3>Contact</h3>
          <p class="muted">Send an email or text to schedule a tour.</p>
          <div class="btn-row">
            <a class="btn" href="mailto:ambar.rana123@gmail.com">Email</a>
            <a class="btn btn--outline" href="sms:+16163508878">Text</a>
          </div>
          <p class="micro">Email: ambar.rana123@gmail.com · Phone: 616-350-8878</p>
        </div>
      </div>
    </div>
  </main>
  <footer class="site-footer" role="contentinfo">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <h4>180 Talbott St · Rockville</h4>
        <p class="muted">2 Bed · 1 Bath · Near Metro</p>
      </div>
	  <div class="footer-contact">
	  	<h4>Contact</h4>
	  	<div class="contact-lines">
	  		<div><span class="label">Email:</span> <a href="mailto:ambar.rana123@gmail.com">ambar.rana123@gmail.com</a></div>
	  		<div><span class="label">Phone:</span> 616-350-8878</div>
	  	</div>
	  </div>
    </div>

    <div class="footer-meta">
      <span>© {new Date().getFullYear()} 180 Talbott Street</span>
      <span class="sep">•</span>
      <span>Rockville, MD</span>
    </div>
  </div>
</footer>
</div>

<style>
  /* ---------- Base & layout ---------- */
  :root{
    --bg: radial-gradient(1200px 800px at 10% -10%, #1b1e27 0%, #0d1016 40%, #0b0d12 100%);
    --card: #11141a;
    --card-2: #0f1218;
    --text: #e9edf3;
    --muted: #a7adbb;
    --line: #242a35;
    --accent: #60e5ad;
    --accent-2: #93c5fd;
    --shadow: 0 6px 30px rgba(0,0,0,.35);
    --radius: 16px;
    --radius-lg: 20px;
    --radius-sm: 10px;
    --gap: 18px;
    --maxw: 980px;
  }
  @media (prefers-color-scheme: light){
    :root{
      --bg: radial-gradient(1000px 700px at 10% -10%, #f2f5ff 0%, #f7f9ff 40%, #ffffff 100%);
      --card: #ffffff;
      --card-2: #ffffff;
      --text: #0e1a2b;
      --muted: #5a6577;
      --line: #e8ecf3;
      --shadow: 0 10px 30px rgba(10, 23, 55, .08);
    }
  }

  .page{min-height:100dvh;background:var(--bg);color:var(--text)}
  .container{max-width:var(--maxw);margin:0 auto;padding:24px;display:grid;gap:var(--gap)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius-lg);box-shadow:var(--shadow);padding:20px}
  .card.gallery-wrap{padding:12px}
  .card--subtle{background:var(--card-2)}

  .topbar{
    max-width:var(--maxw);
    margin:0 auto;
    padding:14px 24px 0;
    display:flex;justify-content:space-between;align-items:center;gap:12px;
    color:var(--muted);
  }
  .brand{font-weight:600;letter-spacing:.2px}
  .chips{display:flex;flex-wrap:wrap;gap:8px}
  .chip{background:rgba(255,255,255,.04);border:1px solid var(--line);padding:6px 10px;border-radius:999px;font-size:.82rem}
  .chip--accent{border-color:rgba(96,229,173,.3);background:rgba(96,229,173,.12);color:var(--text)}

  /* ---------- Typography ---------- */
  h1{font-size:clamp(1.35rem,2.2vw,1.9rem);line-height:1.25;margin:6px 0 10px}
  h2{font-size:clamp(1.1rem,1.8vw,1.35rem);margin:18px 0 8px}
  h3{font-size:1.05rem;margin:14px 0 6px}
  .lead{color:var(--muted);font-size:1rem;margin:6px 0 12px}
  .muted{color:var(--muted)}
  .micro{color:var(--muted);font-size:.85rem;margin-top:10px}

  /* ---------- Badges & info bar ---------- */
  .info-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0 14px}
  .badge{
    display:inline-flex;
	align-items:center;gap:8px;
    padding:6px 10px;
	border-radius:999px;
	border: 2px solid #59616f;
    background: #bdc3c7;
	font-size:.9rem
  }
  .badge--outline{background:transparent}
  .dot{width:5px;height:5px;border-radius:999px;background:var(--line)}

  /* ---------- Lists & grid ---------- */
  .grid{display:grid;gap:var(--gap)}
  @media(min-width:860px){ .grid{grid-template-columns:1fr 1fr} }

  .list{padding-left:1.2rem;margin:0;display:grid;gap:8px}
  .list li{position:relative;list-style:none;color:var(--text)}
  .list li::before{
    content:""; position:absolute; left:-1.2rem; top:.55em;
    width:.45rem; height:.45rem; border-radius:999px; background:var(--accent);
    box-shadow:0 0 0 3px rgba(96,229,173,.18);
  }
  .list--indented{margin-left:10px;padding-left:1.2rem}
  .list--indented li::before{background:var(--accent-2); box-shadow:0 0 0 3px rgba(147,197,253,.2)}

  /* ---------- Options layout ---------- */
  .options{display:grid;gap:var(--gap)}
  @media(min-width:720px){.options{grid-template-columns:1fr 1fr}}

  /* ---------- Carousel polish ---------- */
  .gallery-wrap :global(.carousel){
    background:linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,0));
    border-radius:var(--radius); border:1px solid var(--line);
  }
  .gallery-wrap :global(img){border-radius:12px}

  /* ---------- Contact ---------- */
  .contact{margin-top:16px;display:flex;align-items:center;justify-content:space-between;gap:14px}
  .btn-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px}
  .btn{
    appearance:none; border:1px solid var(--line); background:rgba(255,255,255,.04);
    color:var(--text); padding:9px 14px; border-radius:10px; text-decoration:none;
    transition:transform .04s ease, background .2s ease, border-color .2s ease;
  }
  .btn:hover{transform:translateY(-1px); border-color:rgba(96,229,173,.35)}
  .btn--outline{background:transparent}
  .btn--ghost{background:transparent; border-style:dashed}

  /* ---------- Utilities ---------- */
  .small{color:var(--muted)}

  .site-footer{
  /* contrasting full-width background */
  background: linear-gradient(180deg, #0b0d12 0%, #0a0e16 100%);
  color:#fff;           /* force white text */
  border-top: 1px solid rgba(255,255,255,.08);
  margin-top: 28px;
}
.site-footer .muted{ color: rgba(255,255,255,.75); }
.site-footer .micro{ color: rgba(255,255,255,.65); }

.footer-inner{
  max-width: var(--maxw, 980px);
  margin: 0 auto;
  padding: 28px 24px;
}

.footer-grid{
  display: grid;
  gap: 18px;
}
@media (min-width: 760px){
  .footer-grid{
    grid-template-columns: 1.2fr 1fr;
    align-items: start;
  }
}

.footer-brand h4,
.footer-contact h4{
  margin: 0 0 8px;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: .2px;
}

.footer-meta{
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid rgba(255,255,255,.08);
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  align-items:center;
  color: rgba(255,255,255,.7);
  font-size: .9rem;
}
.footer-meta .sep{ opacity:.6 }

/* Footer buttons (light variants) */
.btn-row{ display:flex; flex-wrap:wrap; gap:10px; margin-top:8px; }
.btn{
  appearance:none; text-decoration:none;
  padding:9px 14px; border-radius:10px;
  transition: transform .04s ease, background .2s ease, border-color .2s ease;
}
.btn--light{
  background: rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.2);
  color:#fff;
}
.btn--light:hover{ transform: translateY(-1px); border-color: rgba(96,229,173,.5); }

.btn--outline-light{
  background: transparent;
  border:1px solid rgba(255,255,255,.35);
  color:#fff;
}
.btn--outline-light:hover{ transform: translateY(-1px); border-color:#fff; }

.btn--ghost-light{
  background: transparent;
  border:1px dashed rgba(255,255,255,.35);
  color:#fff;
}
.btn--ghost-light:hover{ transform: translateY(-1px); border-color:#fff; }
</style>
