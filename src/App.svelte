<script lang="ts">
  import SwipeCarousel from './lib/SwipeCarousel.svelte';

  // Use BASE_URL so images work on GitHub Pages subpaths
  const base = import.meta.env.BASE_URL; // "/" or "/repo-name/"
  const images = [
    { src: `${base}images/apt-1.png`, alt: 'Living room' },
    { src: `${base}images/apt-2.png`, alt: 'Kitchen' },
    { src: `${base}images/apt-3.png`, alt: 'Bedroom' },
    { src: `${base}images/apt-4.png`, alt: 'Bathroom' }
  ];
</script>

<div class="container">
  <div class="card gallery-wrap">
    <SwipeCarousel {images} />
  </div>

  <!-- Put your apartment details block here -->
  <div class="card">
    <h1>2-Bedroom / 1-Bath Apartment for Rent – 180 Talbott Street, Rockville, MD</h1>
    <p class="small">
      <span class="badge">Available December 1, 2025</span>
      &nbsp;&nbsp;<span class="badge">Tours begin November 20, 2025</span>
    </p>

    <p>
      Spacious and bright 2-bedroom, 1-bathroom apartment located just off Rockville Pike in a quiet and convenient neighborhood.
      Enjoy comfortable living with easy access to shopping, transportation, and parks — all within minutes of your door.
    </p>

    <h2>✨ Apartment Features</h2>
    <ul class="list">
      <li>Two parking passes included</li>
      <li>Bright, spacious living area with ample natural light</li>
      <li><strong>Prime location:</strong></li>
      <ul class="list">
        <li>1–2 minutes to Metrobus</li>
        <li>3–5 minutes to Twinbrook Metro Station (Red Line)</li>
        <li>25–30 minutes to Washington, D.C.</li>
      </ul>
      <li>Shops nearby: ALDI and other grocery options within 3 minutes</li>
      <li>Parks and walking trails nearby — perfect for running or outdoor activities</li>
      <li>Shared washer and dryer in the building (no driving needed)</li>
      <li>Private storage space in the basement</li>
      <li><strong>Tenant pays:</strong> internet, electricity, and gas</li>
    </ul>

    <h2>💰 Rent Options (for Qualified Renters)</h2>
    <p><strong>Qualified renters are provided two options:</strong></p>

    <h3>Option 1 – Lease Takeover</h3>
    <ul class="list">
      <li><strong>Monthly Rent:</strong> $1,400</li>
      <li><strong>Term:</strong> December 2025 – April 2026 (5 months)</li>
      <li><strong>Renewal:</strong> Option to extend for 1–2 years at an estimated 3–7% rent increase (~$1,500/month)</li>
    </ul>

    <h3>Option 2 – New 1–2 Year Lease</h3>
    <ul class="list">
      <li><strong>Monthly Rent:</strong> Starting from $1,500/month</li>
      <li>Standard long-term lease with renewal options available</li>
    </ul>

    <h2>📝 Application & Screening</h2>
    <ul class="list">
      <li>Credit and background check</li>
      <li>Income verification</li>
      <li>Rental history review</li>
      <li>Only qualified renters will be considered for lease approval.</li>
    </ul>

	<div>
		<h3>Contact:</h3> (send email or text)	
		<p>Email: ambar.rana123@gmail.com</p>
		<p>Phone: 616-350-8878</p>
	</div>
  </div>
</div>

<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
