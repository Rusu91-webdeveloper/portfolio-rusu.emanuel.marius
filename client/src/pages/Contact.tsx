export default function Contact() {
  return (
    <div className="wrap page-content contact-page">
      <header className="page-intro">
        <p className="eyebrow">
          <span className="section-number">04 /</span> CONTACT
        </p>
        <h1>
          LET'S
          <br />
          TALK<span>.</span>
        </h1>
        <p>
          Have a project in mind, an opportunity to discuss, or just want to say
          hello? Get in touch.
        </p>
        <div className="intro-rule">
          <span>CHOOSE YOUR CHANNEL</span>
          <span>REACH OUT ↘</span>
        </div>
      </header>
      <div className="contact-options">
        <a href="mailto:rusu.emanuel.webdeveloper@gmail.com">
          <span>01 / EMAIL</span>
          <strong>Drop me a line</strong>
          <small>rusu.emanuel.webdeveloper@gmail.com</small>
          <b>↗</b>
        </a>
        <a
          href="https://linkedin.com/in/rusu-emanuel-marius"
          target="_blank"
          rel="noreferrer"
        >
          <span>02 / LINKEDIN</span>
          <strong>Let's connect</strong>
          <small>Find me on LinkedIn</small>
          <b>↗</b>
        </a>
        <a
          href="https://github.com/Rusu91-webdeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <span>03 / GITHUB</span>
          <strong>See the code</strong>
          <small>Explore my GitHub profile</small>
          <b>↗</b>
        </a>
      </div>
    </div>
  );
}
