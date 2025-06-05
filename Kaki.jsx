import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Kaki = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <div style={styles.logo}>
            <img src="logo2.png" alt="logo" style={styles.logoImg} />
          </div>
          <p style={styles.text}>Providing, Connecting, Complementing.</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.title}>Sitemap</h4>
          <p>Skill Dev</p>
          <p>digITalent Hub</p>
          <p>Events</p>
          <p>Course</p>
          <p>About</p>
          <p>Sign In</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.title}>Address</h4>
          <p>Jl. Bend. Palasari No.Kav 5, Karangbesuki,</p>
          <p>Kec. Sukun, Kota Malang,</p>
          <p>Jawa Timur 65149</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.title}>Contact</h4>
          <p><MdPhone /> +6282257741226</p>
          <p><MdPhone /> +6282123229947</p>
          <p><MdEmail /> rakryan@gmail.com</p>
          <div style={styles.socialIcons}>
            <FaFacebookF style={styles.icon} />
            <FaLinkedinIn style={styles.icon} />
            <FaInstagram style={styles.icon} />
          </div>
        </div>

        <div style={styles.column}>
          <h4 style={styles.title}>Operational Hours</h4>
          <p>Monday - Friday</p>
          <p>09:00 - 19:00</p>
        </div>
      </div>

      <div style={styles.copyright}>
        © 2020 Rakryan Digitalent Hub. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
  width: '100%', 
  backgroundColor: '#2c2f36',
  color: '#fff',
  padding: '40px 20px 20px',
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
  marginTop: '60px',
},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    flex: '1 1 180px',
    minWidth: '180px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  logoImg: {
    height: '70px',
  },
  logoMain: {
    color: '#ffcc00',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  text: {
    color: '#ccc',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    marginTop: '8px',
  },
  icon: {
    fontSize: '18px',
    cursor: 'pointer',
    color: '#fff',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '30px',
    color: '#999',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    fontSize: '13px',
  },
};

export default Kaki;