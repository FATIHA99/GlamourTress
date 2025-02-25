import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
  
        <div className={styles.footerSection}>
          <h3 className={`${styles.footerTitle} Eastwood`}>Contact Us</h3>
          <p className={styles.footerText}>
            123 Beauty Street, City, Country
          </p>
          <p className={styles.footerText}>Phone: +1 (123) 456-7890</p>
          <p className={styles.footerText}>Email: GlamourTress@gmail.com</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={`${styles.footerTitle} Eastwood`}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/services" className={styles.footerLink}>
                Services
              </a>
            </li>
            <li>
              <a href="/about" className={styles.footerLink}>
                About Us
              </a>
            </li>
            <li>
              <a href="/booking" className={styles.footerLink}>
                Book Appointment
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className={styles.footerSection}>
          <h3 className={`${styles.footerTitle} Eastwood`}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="/icons/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="/icons/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="/icons/twitter.png" alt="Twitter" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img src="/icons/youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className={styles.footerBottom}>
        <p className={styles.copyrightText}>
          &copy; {new Date().getFullYear()} GlamourTress Salon. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;