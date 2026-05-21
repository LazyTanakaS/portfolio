import useScrollAnimation from "../hooks/useScrollAnimation";

interface ContactProps {
  title: string;
  location: string;
}

function Contact({ title, location }: ContactProps) {
  const listRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="contact" id="contact">
      <p className="section-title">{title}</p>

      <div ref={listRef} className="contact-list scroll-reveal">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a href="mailto:petrokomar16@gmail.com" className="contact-link">
            petrokomar16@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">GitHub</span>
          <a
            href="https://github.com/LazyTanakaS"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            github.com/LazyTanakaS
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Location</span>
          <span className="contact-value">{location}</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
