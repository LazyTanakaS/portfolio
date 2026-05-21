interface FooterProps {
  lang: "cz" | "en";
}

function Footer({ lang }: FooterProps) {
  const rightsText =
    lang === "cz" ? "Všechna práva vyhrazena" : "All rights reserved";

  return (
    <footer className="footer">
      <span className="footer-text">Petr Komar · 2026 · {rightsText}</span>

      <div className="footer-links">
        <a
          href="https://github.com/LazyTanakaS"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:petrokomar16@gmail.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
