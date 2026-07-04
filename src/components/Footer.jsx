import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === "dark" ? "light" : "dark";

  return (
    <footer
      className={`bg-${theme} text-center text-${textColor} border-top border-body`}
    >
      <div className="container p-4">
        <section className="mb-4">
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook" aria-hidden="true"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            aria-label="Twitter"
          >
            <i className="bi bi-twitter" aria-hidden="true"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            aria-label="Google"
          >
            <i className="bi bi-google" aria-hidden="true"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="#!"
            role="button"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram" aria-hidden="true"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3">
        © 2026 Copyright:
        <a className={`text-${textColor}`} href="#!">
          Movie App
        </a>
      </div>
    </footer>
  );
}
