/* kimreidy-shared.js — injects nav, topbar, and footer into every page */
(function () {
  const navHTML = `
  <div class="topbar">
    <div class="topbar-contact">
      <a href="tel:2065792667"><i class="fas fa-phone"></i> (206)-579-2667</a>
      &nbsp;|&nbsp;
      <a href="mailto:kim@pointe3.com"><i class="fas fa-envelope"></i> kim@pointe3.com</a>
    </div>
    <div class="topbar-social">
      <a href="https://www.facebook.com/KimReidyPointe3/"             target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/kimreidy_realestate/"        target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/kimberlyreidy/"            target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://www.youtube.com/channel/UCD4ZMtJ7MYgBphoonXE6eCw" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
    </div>
  </div>
  <nav id="siteNav">
    <div class="nav-inner">
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="/index.html">Home</a></li>
        <li>
          <a href="/about.html">About &#9662;</a>
          <ul class="dropdown">
            <li><a href="/about.html#about-kim">About Kim</a></li>
            <li><a href="https://www.youtube.com/channel/UCD4ZMtJ7MYgBphoonXE6eCw" target="_blank">Youtube</a></li>
            <li><a href="/testimonials.html">Testimonials</a></li>
          </ul>
        </li>
        <li>
          <a href="/buyers-guide.html">Resources &#9662;</a>
          <ul class="dropdown">
            <li style="position:relative">
              <a href="#">Buy &#9662;</a>
              <ul class="sub-dropdown">
                <li><a href="/buyers-guide.html">Buyer's Guide</a></li>
                <li><a href="/home-finder.html">Home Finder</a></li>
                <li><a href="/mortgage-calculator.html">Mortgage Calculator</a></li>
              </ul>
            </li>
            <li style="position:relative">
              <a href="#">Sell &#9662;</a>
              <ul class="sub-dropdown">
                <li><a href="/sellers-guide.html">Seller's Guide</a></li>
                <li><a href="/home-evaluation.html">Home Evaluation</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="/listings.html">Property Search &#9662;</a>
          <ul class="dropdown">
            <li><a href="https://kimreidy.realscout.com/homesearch/map?pmax=500000&zoom=12&geo_type=city&geo_id=5363000"                             target="_blank">$0–$500K</a></li>
            <li><a href="https://kimreidy.realscout.com/homesearch/map?pmin=500000&pmax=800000&zoom=12&geo_type=city&geo_id=5363000"                 target="_blank">$500K–$800K</a></li>
            <li><a href="https://kimreidy.realscout.com/homesearch/map?pmin=800000&pmax=1500000&zoom=12&geo_type=city&geo_id=5363000"                target="_blank">$800K–$1.5M</a></li>
            <li><a href="https://kimreidy.realscout.com/homesearch/map?pmin=1500000&zoom=12&geo_type=city&geo_id=5363000"                            target="_blank">$1.5M+</a></li>
          </ul>
        </li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </div>
  </nav>`;
  const footerHTML = `
  <div class="newsletter-strip">
    <div class="newsletter-inner">
      <h2>Get The Latest Info</h2>
      <form class="newsletter-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="newsletter" />
        <input type="hidden" name="bot-field" />
        <input type="email" name="email" placeholder="Email Address" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
  <footer>
    <div class="footer-logo-wrap">
      <a href="/index.html"><img src="/images/logo-seal-white.png" alt="Kim Reidy with Pointe3 Real Estate" /></a>
    </div>
    <div class="footer-contact-line">
      <a href="tel:2065792667"><i class="fas fa-phone"></i> (206)-579-2667</a>
      <a href="mailto:kim@pointe3.com"><i class="fas fa-envelope"></i> kim@pointe3.com</a>
    </div>
    <div class="footer-social">
      <a href="https://www.facebook.com/KimReidyPointe3/"             target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/kimreidy_realestate/"        target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/kimberlyreidy/"            target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://www.youtube.com/channel/UCD4ZMtJ7MYgBphoonXE6eCw" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="footer-pointe-wrap">
      <img src="/images/pointe3-logo.png" alt="Pointe3 Real Estate" />
      <p class="footer-addr">3509 Fremont Ave N Suite 300<br>Seattle, WA 98103</p>
    </div>
    <ul class="footer-nav-row">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/listings.html">Property Search</a></li>
      <li><a href="/buyers-guide.html">Buyer's Guide</a></li>
      <li><a href="/sellers-guide.html">Seller's Guide</a></li>
      <li><a href="/testimonials.html">Testimonials</a></li>
      <li><a href="https://www.workforce-resource.com/dpr/pmt/NWMLS/KIMBERLY_REIDY" target="_blank">Down Payment</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
    <div class="footer-bottom">
      <p style="margin-bottom:8px">Based on information submitted to the MLS GRID. All data is obtained from various sources and may not have been verified by the broker or MLS GRID. Supplied Open House information is subject to change without notice. All information should be independently reviewed and verified for accuracy. Properties may or may not be listed by the office/agent presenting the information. Data provided by MLS GRID for personal non-commercial use only. No warranties or representations are made of any kind.</p>
      <p>Copyright &copy; ${new Date().getFullYear()} | Kim Reidy Real Estate Agent | All Rights Reserved | <a href="/privacy-policy.html">Privacy Policy</a> | <a href="/dmca-notice.html">DMCA Notice</a></p>
    </div>
  </footer>`;
  /* ── Inject topbar + nav at top of body ── */
  const topDiv = document.createElement('div');
  topDiv.innerHTML = navHTML;
  document.body.insertBefore(topDiv, document.body.firstChild);
  /* ── Inject footer at bottom ── */
  const botDiv = document.createElement('div');
  botDiv.innerHTML = footerHTML;
  document.body.appendChild(botDiv);
  /* ── Hamburger toggle ── */
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('navMenu').classList.toggle('open');
  });
  /* ── Transparent → white nav on scroll ── */
  var nav = document.getElementById('siteNav');
  function updateNav() {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run once on load
  /* ── Highlight active nav link ── */
  var currentPage = window.location.pathname;
  document.querySelectorAll('.nav-menu > li > a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && currentPage.replace(/\\/$/, '') === href.replace(/\\/$/, '')) {
      link.classList.add('active');
    }
  });
  /* ── Netlify Identity: redirect to /admin/ after login ── */
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', function (user) {
      if (!user) {
        window.netlifyIdentity.on('login', function () {
          document.location.href = '/admin/';
        });
      }
    });
  }
})();
