export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="section__heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build your next iconic experience</h2>
      </div>

      <form className="contact-form" aria-label="Contact form">
        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Company
          <input type="text" name="company" autoComplete="organization" />
        </label>
        <label>
          Project Brief
          <textarea name="brief" rows="5" required />
        </label>
        <button className="button button--primary" type="submit">
          Send Inquiry
        </button>
      </form>
    </section>
  );
}
