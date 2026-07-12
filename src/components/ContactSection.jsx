import { useState } from 'react';
import { Mail, Copy, Check, Send, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', brief: '' });
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Sohailansarisa318@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.brief) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', brief: '' });
      setTimeout(() => setSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="section-label-row">
        <div className="section-label-line" />
        <span className="section-label">06 // Contact</span>
      </div>

      <div className="contact-block">
        {/* Sidebar */}
        <div className="contact-sidebar">
          <h4>Let’s build something together.</h4>
          <p>
            I am currently open to internship positions and junior engineering roles. Let’s connect to discuss how I can contribute to your team.
          </p>

          <div className="contact-links-stack">
            <div className="contact-link-row">
              <span className="contact-link-label">Email</span>
              <span
                className="contact-link-val"
                onClick={handleCopyEmail}
                role="button"
                tabIndex={0}
                aria-label="Copy email address"
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopyEmail(); }}
              >
                Sohailansarisa318@gmail.com
                {copied ? (
                  <Check size={14} style={{ color: '#FFFFFF', marginLeft: '0.2rem' }} />
                ) : (
                  <Copy size={13} style={{ color: 'var(--text-muted)', marginLeft: '0.2rem' }} />
                )}
              </span>
            </div>

            <div className="contact-link-row">
              <span className="contact-link-label">GitHub</span>
              <a
                href="https://github.com/5ohail"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-val"
              >
                github.com/5ohail
              </a>
            </div>

            <div className="contact-link-row">
              <span className="contact-link-label">LinkedIn</span>
              <a
                href="https://linkedin.com/in/SohailAnsari163"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-val"
              >
                linkedin.com/in/SohailAnsari163
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Form */}
        <div>
          <form className="contact-form-minimal" onSubmit={handleSubmit}>
            <div className="contact-input-wrap">
              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder=" "
                required
                value={formData.name}
                onChange={handleInputChange}
                autoComplete="name"
              />
              <label className="contact-label">Name</label>
            </div>

            <div className="contact-input-wrap">
              <input
                type="email"
                name="email"
                className="contact-input"
                placeholder=" "
                required
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
              />
              <label className="contact-label">Email</label>
            </div>

            <div className="contact-input-wrap">
              <textarea
                name="brief"
                className="contact-input"
                placeholder=" "
                required
                value={formData.brief}
                onChange={handleInputChange}
              />
              <label className="contact-label">Briefly describe what you are building</label>
            </div>

            {success && (
              <div className="contact-success-banner">
                Message transmitted successfully. I will respond to your inquiry shortly.
              </div>
            )}

            <button
              className="btn-minimal btn-minimal--primary"
              type="submit"
              disabled={submitting}
              style={{ width: 'max-content' }}
            >
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Submit Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
