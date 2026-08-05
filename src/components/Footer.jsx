import { profile } from "../data/resumeData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
