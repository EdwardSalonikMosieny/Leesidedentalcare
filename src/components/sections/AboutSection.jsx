function AboutSection() {
  return (
    <section className="about-section" id="about-us">
      <div className="about-section__media">
        <img
          alt="Dentist providing careful treatment to a patient"
          loading="lazy"
          src="/images/about-clean.jpg"
        />
      </div>

      <div className="about-section__content">
        <p className="about-section__eyebrow">About Us</p>
        <h2>Lee Dental Care Services</h2>
        <p className="about-section__tagline">Your smile, our priority</p>
        <div className="about-section__body">
          <p className="about-section__lead">
            We provide gentle and modern dental care for every generation.
          </p>
          <p className="about-section__text">
            Lee Dental Care Services is a patient-focused clinic where your
            comfort and confidence come first.
          </p>
          <ul className="about-section__highlights" role="list">
            <li>Calm, welcoming visits designed around your needs.</li>
            <li>Clear explanations so you understand every treatment option.</li>
            <li>Comfortable care that supports a healthy, confident smile.</li>
          </ul>
        </div>

        <div className="about-section__cards">
          <article className="about-section__card">
            <h3>Vision</h3>
            <p>
              To be the trusted family dental home where every generation
              smiles with confidence.
            </p>
          </article>

          <article className="about-section__card">
            <h3>Mission</h3>
            <p>
              To deliver gentle, modern, patient-focused dental care in a calm
              and welcoming environment.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
