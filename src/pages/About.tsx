import './pages.css';
import '../styles/design-system.css';

const About = () => {
  return (
    <div className="about page-container">
  <section className="hero-section bg-gradient">
    <div className="container">
      <h1 className="hero-title">
        About <span className="highlight">SorrshaMedical</span>
      </h1>
      <p className="hero-subtitle">
        Global leaders in innovative medical solutions since 1995
      </p>
    </div>
  </section>

  <section className="section mission-section">
    <div className="container">
      <div className="section-header">
        <h2>Our Mission</h2>
        <p>Delivering excellence in medical technology worldwide</p>
      </div>
      <div className="mission-grid">
        <div className="card mission-card animate-fadeInUp">
          <div className="mission-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z" />
            </svg>
          </div>
          <h3>Quality Assurance</h3>
          <p>
            All our products meet the highest international standards with CE, ISO, and FDA certifications.
          </p>
        </div>
        <div className="card mission-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="mission-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          <h3>Global Reach</h3>
          <p>
            Serving hospitals and clinics in over 45 countries with reliable distribution networks.
          </p>
        </div>
        <div className="card mission-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="mission-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />
            </svg>
          </div>
          <h3>Innovation</h3>
          <p>
            Our R&D team works tirelessly to develop cutting-edge medical technologies.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="section bg-gray-100 timeline-section">
    <div className="container">
      <div className="section-header">
        <h2>Our Story</h2>
        <p>From humble beginnings to industry leadership</p>
      </div>
      <div className="timeline">
        <div className="timeline-item animate-fadeInLeft">
          <div className="timeline-year">1995</div>
          <div className="timeline-content card">
            <h3>Founding</h3>
            <p>
              Established in Bangalore with a small team of 5 medical professionals and engineers.
            </p>
          </div>
        </div>
        <div className="timeline-item animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
          <div className="timeline-year">2002</div>
          <div className="timeline-content card">
            <h3>First Breakthrough</h3>
            <p>
              Developed our patented surgical instrument sterilization system.
            </p>
          </div>
        </div>
        <div className="timeline-item animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
          <div className="timeline-year">2010</div>
          <div className="timeline-content card">
            <h3>Global Expansion</h3>
            <p>
              Opened offices in Germany, USA, and Singapore to serve international markets.
            </p>
          </div>
        </div>
        <div className="timeline-item animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
          <div className="timeline-year">2020</div>
          <div className="timeline-content card">
            <h3>Pandemic Response</h3>
            <p>
              Produced over 2 million PPE units monthly to support healthcare workers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Meet the experts guiding our vision</p>
          </div>
          <div className="team-grid">
            {[
              {
                name: 'Raj Patel',
                title: 'Chief Technology Officer',
                bio: 'Biomedical engineer specializing in surgical robotics and AI diagnostics.'
              },
              {
                name: 'Priya Kapoor',
                title: 'Global Operations',
                bio: 'Oversees our worldwide supply chain and distribution networks.'
              },
              {
                name: 'Michael Chen',
                title: 'Head of R&D',
                bio: 'Leads our innovation team developing next-gen medical devices.'
              }
            ].map((member, index) => (
              <div key={index} className="card team-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-image">
                  <div className="placeholder-avatar">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                </div>
                <div className="team-details">
                  <h3>{member.name}</h3>
                  <p className="team-title">{member.title}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
