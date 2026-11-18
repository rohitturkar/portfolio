import { FaArrowDown, FaArrowRight, FaGithub, FaLinkedin, FaPhone, FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import portrait from "../../assets/rohit-cutout.png";
import quarterCertificate from "../../assets/trueigtech-certificate.jpeg";

const projects = [
  {
    number: "01",
    name: "Rentify",
    type: "RENTAL MANAGEMENT PLATFORM",
    description:
      "An end-to-end rental management platform for property listings, tenant management, and rental workflows, with frontend and back-office dashboards. PostgreSQL stores the data; Redis handles caching.",
    impact: "Property, tenant & rental workflows",
    tools: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    style: "project-card--coral",
    visual: "rentify-visual",
  },
  {
    number: "02",
    name: "Productify",
    type: "PRODUCT & INVENTORY MANAGEMENT",
    description:
      "A product management platform for inventory tracking, stock monitoring, product categorization, and CRUD operations, with an admin dashboard for analytics, low-stock alerts, and role-based access control.",
    impact: "Role-based access & Redis caching",
    tools: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    style: "project-card--blue",
    visual: "productify-visual",
  },
];

const experience = [
  {
    dates: "APR 2025 — PRESENT",
    role: "Software Engineer",
    company: "Trueigtech",
    location: "Remote",
    award: "Employee of the Quarter",
    details: [
      "Developed scalable frontend applications for high-traffic gaming and casino platforms using React.js, Next.js, and TypeScript, ensuring responsive experiences under high concurrent loads.",
      "Improved Lighthouse performance and Core Web Vitals through code splitting, lazy loading, image optimization, and bundle size reduction.",
      "Implemented SEO optimizations using server-side rendering, structured data, and dynamic metadata to improve search visibility.",
      "Integrated WebSocket connections for real-time game state updates, live odds, and instant notifications across gaming and casino applications.",
      "Developed multi-tenant Back Office and Admin Back Office systems for managing users, configurations, content, and reports.",
      "Integrated Node.js services and AWS S3 to support application functionality and asset management across products.",
    ],
  },
  {
    dates: "SEP 2023 — MAR 2025",
    role: "Frontend Engineer",
    company: "i-Pangram Digital Services LLP",
    location: "Remote",
    details: [
      "Developed an Augmented Reality SaaS platform using React.js, TypeScript, and Three.js, optimizing frontend workflows and improving performance by 92%.",
      "Implemented Redux Toolkit for state management and Cypress for end-to-end testing, improving maintainability and reducing code redundancy.",
      "Built and maintained an interactive frontend editor, integrating reseller and admin functionality with cross-functional teams.",
    ],
  },
];

const skills = [
  { label: "Languages", focus: "THE BUILDING BLOCKS", symbol: "</>", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { label: "Frontend", focus: "INTERFACES & APPLICATIONS", symbol: "UI", items: ["React 19", "Redux Toolkit", "Next.js", "Vite", "Tailwind CSS", "Material UI", "Storybook", "HTML5", "CSS3", "PWA"] },
  { label: "Backend", focus: "SERVICES & INTEGRATION", symbol: "{ }", items: ["Node.js", "Express", "REST API design", "JWT auth", "Redis", "Swagger / OpenAPI"] },
  { label: "Database", focus: "PERSISTENCE & STORAGE", symbol: "DB", items: ["DynamoDB (single-table design)", "MySQL", "MongoDB"] },
];

function Home() {
  return (
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /><span className="eyebrow-item"><FaLaptopCode aria-hidden="true" /> SOFTWARE ENGINEER · FULL-STACK</span><span className="eyebrow-separator">·</span><span className="eyebrow-item"><FaMapMarkerAlt aria-hidden="true" /> NAGPUR, INDIA</span></div>
          <h1>
            I turn ideas into <span className="serif-accent">thoughtful products.</span>
          </h1>
          <p className="hero-intro">
            I’m Rohit, a full-stack software engineer building scalable,
            high-performance web applications across frontend, backend, and
            infrastructure. I care about clean, secure code and production-ready
            products. Outside the browser, I’m fascinated by space and physics.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#projects">Explore my work <FaArrowDown aria-hidden="true" /></a>
            <a className="text-link" href="mailto:rohittur2002@gmail.com">Let’s talk <FaArrowRight aria-hidden="true" /></a>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/rohitturkar" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rohit-turkar" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:rohittur2002@gmail.com" aria-label="Email"><CiMail /></a>
            <a href="tel:+919527637206" aria-label="Call Rohit"><FaPhone /></a>
            <span className="hero-role-badge">Software Engineer @ Trueigtech <span className="tiny-spark">✳</span></span>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-label portrait-label--top">DESIGN-MINDED<br />DEVELOPER</div>
          <div className="portrait-tag portrait-tag--engineer"><strong>React · Next.js</strong></div>
          <div className="portrait-tag portrait-tag--languages"><strong>TypeScript · JavaScript</strong></div>
          <div className="portrait-tag portrait-tag--backend"><strong>Node.js · MySQL</strong></div>
          <div className="portrait-frame">
            <img src={portrait} alt="Rohit Turkar, frontend software engineer" />
          </div>
          <div className="portrait-caption">Curious about what’s next.</div>
        </div>
        <a href="#about" className="scroll-note"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
      </section>

      <section className="ticker" aria-label="Career highlights">
        <div className="ticker-track">
          <div className="ticker-inner">
            <span>92% FRONTEND PERFORMANCE IMPROVEMENT</span><span>LIGHTHOUSE SCORE IMPROVED TO 90</span><span>LCP · CORE WEB VITALS OPTIMIZATION</span><span>AR / VR · REACT · NEXT.JS</span>
          </div>
          <div className="ticker-inner" aria-hidden="true">
            <span>92% FRONTEND PERFORMANCE IMPROVEMENT</span><span>LIGHTHOUSE SCORE IMPROVED TO 90</span><span>LCP · CORE WEB VITALS OPTIMIZATION</span><span>AR / VR · REACT · NEXT.JS</span>
          </div>
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
        <div className="about-grid">
          <h2>Curious by nature.<br /><span className="serif-accent">Engineer by choice.</span></h2>
          <div className="about-copy">
            <p>I’m a full-stack developer experienced in building scalable, high-performance web applications across frontend, backend, and infrastructure. My work spans system design, end-to-end architecture, API integration, and database management.</p>
            <p>I focus on clean, secure, optimized code and reliable, production-ready solutions. I work with TypeScript, React, and Node.js, and enjoy collaborating across the whole product stack.</p>
            <p>When I’m away from my editor, I’m usually reading, enjoying a cup of chai, or following a question about space and physics down a rabbit hole.</p>
            <a className="text-link" href="/Rohit_Turkar.pdf" target="_blank" rel="noreferrer">A little more on my resume <FaArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="section-kicker">02 / SELECTED WORK</div><h2>Things I’ve helped <span className="serif-accent">bring to life.</span></h2></div>
            <p>A few challenges, a lot of collaboration, and some very satisfying pixels.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.style}`} key={project.number}>
                <div className={`project-visual ${project.visual}`} aria-hidden="true">
                  <div className="visual-topbar"><i /><i /><i /><span>CONCEPT UI / {project.number}</span></div>
                  {project.visual === "rentify-visual" && <div className="rentify-scene"><aside><b>R</b><i /><i /><i /><i /></aside><div className="rentify-dashboard"><div className="rentify-welcome">Rental overview <span>＋ Add property</span></div><div className="rentify-stats"><b>Properties <strong>—</strong></b><b>Tenants <strong>—</strong></b><b>Occupancy <strong>—</strong></b></div><div className="rentify-list"><div><i /><span /><b /></div><div><i /><span /><b /></div><div><i /><span /><b /></div></div></div></div>}
                  {project.visual === "productify-visual" && <div className="productify-scene"><div className="productify-title">Inventory overview <span>•••</span></div><div className="productify-metrics"><div>STOCK VALUE<strong>Sample</strong><i /></div><div>LOW STOCK<strong>—</strong><i /></div></div><div className="productify-chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="productify-table"><div><i /><span /><b>In stock</b></div><div><i /><span /><b>Low stock</b></div><div><i /><span /><b>In stock</b></div></div></div>}
                </div>
                <div className="project-body">
                  <div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-impact"><span>↗</span>{project.impact}</div>
                  <div className="tag-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-wrap experience-inner">
          <div className="experience-heading">
            <div><div className="section-kicker">03 / EXPERIENCE</div><h2>Work <span className="serif-accent">experience.</span></h2></div>
            <p>Product engineering across high-traffic platforms, interactive tools, and full-stack applications.</p>
          </div>
          <div className="experience-list">
            {experience.map((job, index) => <article className={`experience-item ${job.award ? "experience-item--current" : ""}`} key={job.company}>
              <header className="experience-rail">
                <span className="experience-number">0{index + 1}</span>
                <span className="experience-dates">{job.dates}</span>
                <h3>{job.role}</h3>
                <div className="experience-company">{job.company}</div>
                <span className="experience-location">{job.location}</span>
              </header>
              <div className="experience-content">
                <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                {job.award && <aside className="award-card" aria-label={`${job.award} recognition at ${job.company}`}>
                  <div className="award-copy"><div className="award-kicker"><span>✦</span> QUARTERLY RECOGNITION</div><h4>Employee<br />of the Quarter</h4><p>Recognized at {job.company}.</p></div>
                  <div className="award-gallery">
                    <figure className="award-photo"><a className="award-photo-image-link" href={quarterCertificate} target="_blank" rel="noreferrer" aria-label="Open Rohit’s Trueigtech certificate of appreciation"><img className="award-photo-image" src={quarterCertificate} alt="Trueigtech certificate of appreciation presented to Rohit Turkar" /></a><figcaption>CERTIFICATE OF APPRECIATION</figcaption></figure>
                    <figure className="award-photo"><div className="award-photo-placeholder" role="img" aria-label="Placeholder for a second award photo"><span className="award-photo-icon">✳</span><span>AWARD PHOTO 02</span><small>Photo slot</small></div><figcaption>AWARD MOMENT</figcaption></figure>
                  </div>
                </aside>}
              </div>
            </article>)}
          </div>
          <div className="education-block">
            <div className="education-heading"><span>EDUCATION / 02</span><h3>Foundations for <i>what’s next.</i></h3></div>
            <div className="education-grid">
              <article className="education-card"><span className="education-date">2019 — 2023</span><h4>Priyadarshini College<br />of Engineering</h4><p>B.E. Computer Science</p><div className="education-detail"><span>Nagpur, Maharashtra</span><b>CGPA 8/10</b></div></article>
              <article className="education-card"><span className="education-date">2023</span><h4>Relevel by Unacademy</h4><p>Frontend Development</p><div className="education-detail"><span>Nagpur, Maharashtra</span><b>Grade A+</b></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap">
          <div className="skills-heading">
            <div><div className="section-kicker">04 / WHAT I WORK WITH</div><h2>My technical <span className="serif-accent">toolkit.</span></h2></div>
            <p>From the interface to the systems behind it, these are the tools I use to turn ideas into reliable products.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => <article className={`skill-card skill-card--${index + 1}`} key={skill.label}>
              <div className="skill-card-top"><span className="skill-index">0{index + 1} / TOOLSET</span><span className="skill-symbol" aria-hidden="true">{skill.symbol}</span></div>
              <div className="skill-focus">{skill.focus}</div>
              <h3>{skill.label}</h3>
              <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="writing-section section-wrap" id="writing">
        <div className="writing-card">
          <div className="writing-orbit" aria-hidden="true">✳</div>
          <div className="section-kicker">05 / NOTES FROM THE PROCESS</div>
          <div className="writing-grid">
            <div><h2>Good ideas deserve <span className="serif-accent">to be shared.</span></h2><p>Occasional notes on frontend craft, building for the web, and the little lessons hiding inside big projects.</p></div>
            <div className="writing-link-wrap"><span className="writing-platform">FIELD NOTES FROM FRONTEND &amp; CURIOSITY</span><a className="button button--light" href="/blog">Read the blog <FaArrowRight aria-hidden="true" /></a></div>
          </div>
          <div className="writing-bottom"><span>FRONTEND · PRODUCT · CREATIVE TECH</span><span>MADE BETWEEN SIPS OF CHAI ☕</span></div>
        </div>
      </section>

      <footer className="footer section-wrap" id="contact">
          <div className="section-kicker">06 / GET IN TOUCH</div>
        <div className="footer-main"><h2>Have something<br />good in <span className="serif-accent">mind?</span></h2><div className="footer-contacts"><a className="footer-email" href="mailto:rohittur2002@gmail.com">Let’s make it real <FaArrowRight aria-hidden="true" /></a><a className="footer-contact-detail" href="mailto:rohittur2002@gmail.com"><CiMail aria-hidden="true" /> rohittur2002@gmail.com</a><a className="footer-contact-detail" href="tel:+919527637206"><FaPhone aria-hidden="true" /> +91 95276 37206</a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} ROHIT TURKAR</span><span>NAGPUR, INDIA · SOFTWARE ENGINEER / FULL-STACK</span><div><a href="https://github.com/rohitturkar" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/rohit-turkar" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://rohitturkar.vercel.app" target="_blank" rel="noreferrer">WEBSITE</a></div></div>
      </footer>
    </main>
  );
}

export default Home;
