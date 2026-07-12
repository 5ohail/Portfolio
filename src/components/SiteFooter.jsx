import { useEffect, useState } from 'react';

export default function SiteFooter() {
  const [timeStr, setTimeStr] = useState('');

  // Live ticking IST clock (UTC +5:30)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTimeStr(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-sec" role="contentinfo">
      <div className="footer-sec-container">
        <div className="footer-logo-row">
          <a href="#hero" className="footer-logo-text" onClick={handleScrollToTop}>
            Sohail Ansari
          </a>
          <p className="footer-copy-text">
            © 2026. Built with engineering rigor & design craftsmanship.
          </p>
        </div>

        <div className="footer-meta-row">
          {/* Live Indian Standard Time Clock */}
          <div className="footer-clock-box" aria-label="Current time in India">
            <div className="footer-clock-beacon" />
            <span>IST (UTC+5:30) · {timeStr}</span>
          </div>

          <ul className="footer-links-row" aria-label="Social media & CV links">
            <li>
              <a
                href="https://github.com/5ohail"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link-item"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/SohailAnsari163"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link-item"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="/resume.pdf"
                download="Sohail_Ansari_Resume.pdf"
                className="footer-social-link-item"
              >
                Resume PDF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
