import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '3rem auto', padding: '0 1.5rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a202c' }}>
        Contact Us
      </h1>
      <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
        Get in touch with the TravelPlanner team for any inquiries, partnerships, or support.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>🏨 Address : </h3>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.5' }}>
            2/6 Nalligoundapalayam<br />
            Vadambacherry, Kamanaikenpalayam<br />
            Coimbatore, Tamil Nadu 641659<br />
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>📧 Email Us : </h3>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.5' }}>
            <strong>Support:</strong>ragulm43421@gmail.com<br />
            <strong>Business:</strong>travelplanner@gmail.com
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#2d3748' }}>📞 Phone & Hours : </h3>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.5' }}>
            <strong>Phone:</strong> +91 9876543210<br />
            <strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;