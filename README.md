<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>True Care Solutions LLC | Skilled Local Technicians for Your Business & Home</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');

    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    body {
      font-family: 'Open Sans', sans-serif;
      background: #f0f8f5;
      color: #2e4a30;
      line-height: 1.6;
      scroll-behavior: smooth;
    }
    a {
      text-decoration: none;
      color: inherit;
    }

    .container {
      width: 90%;
      max-width: 1100px;
      margin: 0 auto;
    }

    header {
      background: #2e7d32;
      color: #e8f5e9;
      padding: 3rem 1rem;
      text-align: center;
      box-shadow: 0 4px 12px rgba(46,125,50,0.4);
    }
    header h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 3rem;
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
    }
    header p {
      font-size: 1.3rem;
      font-weight: 600;
      max-width: 650px;
      margin: 0 auto;
      opacity: 0.85;
    }

    nav {
      background: #1b5e20;
      display: flex;
      justify-content: center;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 3px 8px rgba(27,94,32,0.6);
    }
    nav a {
      color: #c8e6c9;
      font-weight: 600;
      margin: 0 1.5rem;
      padding: 0.5rem 0;
      font-size: 1.1rem;
      border-bottom: 3px solid transparent;
      transition: color 0.3s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    nav a:hover,
    nav a.active {
      color: #a5d6a7;
      border-bottom: 3px solid #a5d6a7;
    }

    section {
      padding: 5rem 0;
    }
    section h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.8rem;
      color: #2e7d32;
      margin-bottom: 1rem;
      text-align: center;
      position: relative;
      display: inline-block;
    }
    section h2::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: #81c784;
      margin: 8px auto 0;
      border-radius: 3px;
    }
    section p,
    section ul {
      max-width: 700px;
      margin: 1.5rem auto 0;
      font-size: 1.1rem;
      color: #386641;
      text-align: center;
      line-height: 1.7;
    }
    ul.services-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      padding: 0;
      margin-top: 2rem;
    }
    ul.services-list li {
      background: #d0f0c0;
      flex: 1 1 300px;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      font-weight: 600;
      box-shadow: 0 3px 8px rgba(129,199,132,0.4);
      transition: background 0.3s ease, color 0.3s ease;
      cursor: default;
      color: #2e4a30;
      display: flex;
      align-items: center;
      gap: 15px;
    }
    ul.services-list li:hover {
      background: #81c784;
      color: white;
      box-shadow: 0 8px 20px rgba(129,199,132,0.8);
    }
    ul.services-list li img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      filter: invert(0.25) sepia(0.6) saturate(3) hue-rotate(70deg);
      transition: filter 0.3s ease;
    }
    ul.services-list li:hover img {
      filter: invert(1);
    }

    .section-image {
      display: block;
      max-width: 480px;
      width: 100%;
      margin: 2rem auto 0;
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(50,100,30,0.15);
      transition: transform 0.3s ease;
      object-fit: cover;
      aspect-ratio: 16 / 9;
    }
    .section-image:hover {
      transform: scale(1.05);
    }

    form {
      max-width: 520px;
      background: white;
      padding: 2rem 2.5rem;
      margin: 2rem auto 0;
      border-radius: 16px;
      box-shadow: 0 0 18px rgba(46,125,50,0.3);
    }
    form label {
      display: block;
      margin-top: 1.3rem;
      font-weight: 600;
      color: #2e7d32;
    }
    form input, form textarea {
      width: 100%;
      padding: 0.7rem 1.2rem;
      margin-top: 0.6rem;
      border: 2px solid #a5d6a7;
      border-radius: 10px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      font-family: 'Open Sans', sans-serif;
      color: #2e4a30;
    }
    form input:focus, form textarea:focus {
      border-color: #4caf50;
      outline: none;
    }
    form textarea {
      resize: vertical;
      min-height: 130px;
    }
    form button {
      margin-top: 2rem;
      background: #4caf50;
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.15rem;
      font-weight: 700;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 8px 22px rgba(76,175,80,0.6);
      width: 100%;
      transition: background 0.3s ease;
    }
    form button:hover {
      background: #357a38;
    }

    footer {
      background: #1b5e20;
      color: #c8e6c9;
      text-align: center;
      padding: 1.5rem 1rem;
      font-size: 0.9rem;
      letter-spacing: 0.05em;
      user-select: none;
    }

    @media (max-width: 768px) {
      ul.services-list {
        flex-direction: column;
        gap: 1rem;
      }
      form {
        padding: 1.5rem;
      }
      ul.services-list li {
        justify-content: center;
      }
    }
  </style>
</head>
<body>

<header>
  <h1>True Care Solutions LLC</h1>
  <p>Connecting clients with skilled local technicians to keep your business and home running smoothly.</p>
</header>

<nav>
  <a href="#home" class="active">Home</a>
  <a href="#about">About Us</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>

<div class="container">

  <section id="home">
    <h2>Welcome to True Care Solutions LLC</h2>
    <p>We connect you with skilled technicians in your local area for business and home repairs. Let us help you keep everything running smoothly with reliable, professional service.</p>
    <img
      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
      alt="Technician repairing device"
      class="section-image"
    />
  </section>

  <section id="about">
    <h2>About Us</h2>
    <p>We specialize in connecting clients with skilled technicians based on their expertise, ensuring the right professional is matched to the right project. Whether it's your home or business, we help you get the job done efficiently and reliably.</p>
    <img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
      alt="Technician working on device"
      class="section-image"
    />
  </section>

  <section id="services">
    <h2>Our Services</h2>
    <ul class="services-list">
      <li><img src="https://img.icons8.com/ios-filled/50/000000/smartphone.png" alt="Screen Repair Icon"/> Screen Replacement & Repair</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/battery.png" alt="Battery Replacement Icon"/> Battery Replacement & Upgrade</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/diagnosis.png" alt="Diagnostic Icon"/> Diagnostic & Testing Services</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/software-installer.png" alt="Software Icon"/> Software Troubleshooting & Updates</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/light-on--v1.png" alt="Light Replacement Icon"/> Light Replacement</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/carpet.png" alt="Carpet Tile Replacement Icon"/> Carpet Tile Replacement</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/paint-roller.png" alt="Wall Painting Icon"/> Wall Painting</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/door.png" alt="Door Repair Icon"/> Door Repair</li>
      <li><img src="https://img.icons8.com/ios-filled/50/000000/lock-2.png" alt="Lock Repair Icon"/> Lock Repair & Replacement</li>
    </ul>
    <img
      src="https://images.unsplash.com/photo-1581090700227-cc080b39dbf5?auto=format&fit=crop&w=800&q=80"
      alt="Tools and technician"
      class="section-image"
    />
  </section>

  <section id="contact">
    <h2>Contact Us</h2>
    <p>Ready to get your project started or have questions? Reach out to us!</p>
    <form action="mailto:youremail@example.com" method="post" enctype="text/plain">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" required />

      <label for="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label for="phone">Phone</label>
      <input id="phone" name="phone" type="tel" />

      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Tell us about your project or question..." required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </section>
</div>

<footer>
  &copy; 2025 True Care Solutions LLC | Connecting You With Skilled Technicians
</footer>

<script>
  // Simple nav active class toggle on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
</script>

</body>
</html>
