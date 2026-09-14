import { ArrowRight, Compass, MapPin, Sparkles, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { destinations, plans } from "../data/travelData";
import DestinationCard from "../components/DestinationCard";
import PlanCard from "../components/PlanCard";

export default function Home() {
  const featuredDestinations = destinations.slice(0, 6);
  const featuredPlans = plans.slice(0, 3);

  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-badge">
            Plan your journey
          </span>

          <h1>
            Explore the world.
            <br />
            <span>Make memories.</span>
          </h1>

          <p>
            Discover amazing destinations, explore the world,
            and create unforgettable experiences.
          </p> 

          <div className="hero-buttons">

            <Link
              to="/destinations"
              className="primary-button"
            >
              Explore Destinations
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/travel-plans"
              className="secondary-button"
            >
              View Travel Plans
            </Link>

          </div>

        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section destinations-section">

        <div className="section-heading section-heading-row">

          <div>
            <span className="section-label">
              Popular Places
            </span>

            <h2>
              Explore destinations
            </h2>
          </div>

          <Link
            to="/destinations"
            className="view-all-link"
          >
            View all
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="destination-grid">

          {featuredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

      </section>

      {/* TRAVEL PLANS */}
      <section className="section plans-section">

        <div className="section-heading section-heading-row">

          <div>
            <span className="section-label">
              Travel Made Easy
            </span>

            <h2>
              Popular travel plans
            </h2>
          </div>

          <Link
            to="/travel-plans"
            className="view-all-link"
          >
            View all
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="plan-grid">

          {featuredPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
            />
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <div className="cta-content">

          <Sparkles size={32} />

          <h2>
            Ready for your next adventure?
          </h2>

          <p>
            Explore our destinations and find your perfect travel plan.
          </p>

          <Link
            to="/travel-plans"
            className="primary-button"
          >
            Start Planning
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="section contact-section" style={{ backgroundColor: '#f8fafc', padding: '4rem 2rem', borderTop: '1px solid #e2e8f0' }}>

        <div className="section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label">Get In Touch</span>
          <h2 style={{ fontSize: '2rem', marginTop: '0.5rem', color: '#1a202c' }}>
            Contact Us
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <MapPin size={20} style={{ color: '#008080' }} />
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#2d3748' }}>Headquarters</h3>
            </div>
            <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.5' }}>
              TravelPlanner Inc.<br />
              100 Innovation Way, Suite 400<br />
              San Francisco, CA 94105, USA
            </p>
          </div>

          <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Mail size={20} style={{ color: '#008080' }} />
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#2d3748' }}>Email Us</h3>
            </div>
            <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.5' }}>
              <strong>Support:</strong> support@travelplanner.com<br />
              <strong>Business:</strong> contact@travelplanner.com
            </p>
          </div>

          <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Phone size={20} style={{ color: '#008080' }} />
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#2d3748' }}>Phone & Hours</h3>
            </div>
            <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.5' }}>
              <strong>Phone:</strong> +1 (800) 555-0199<br />
              <strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM PST
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}