import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="logo.png" alt="logo" style={styles.logoImg} />
      </div>
      <ul style={styles.navLinks}>
        <li>Home</li>
        <li>Skill Dev</li>
        <li>digITalent Hub</li>
        <li>Events</li>
        <li>Course</li>
        <li>About</li>
      </ul>
      <div style={styles.profile}>
        <FaUserCircle size={24} />
        <span style={styles.username}>Latifa</span>
        <MdKeyboardArrowDown size={18} />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
    fontFamily: 'sans-serif',
  },
  logo: {
    flex: '0 0 auto',
  },
  logoImg: {
    height: '40px',
  },
  navLinks: {
    display: 'flex',
    gap: '45px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontSize: '15px',
    color: '#444',
    flex: '1',
    justifyContent: 'center',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#666',
  },
  username: {
    fontSize: '14px',
  },
};

export default Navbar;