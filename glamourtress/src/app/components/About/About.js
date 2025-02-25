import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="Eastwood sectionTitle">About Us</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section (50% width on screens > 768px) */}
        <div className={`w-full md:w-1/2 ${styles.aboutImageContainer}`}>
          <Image
            src="/images/about.jpg"
            alt="Style Salon"
            fill // Fill the parent container
            className={styles.aboutImage}
          />
        </div>

      
        <div className="w-full md:w-1/2 Roboto text-container">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to <strong>GlamourTress</strong>, your go-to destination for beauty and hair care. 
            We are passionate about helping you look and feel your best. Our team of skilled professionals 
            is dedicated to providing top-notch services tailored to your unique style.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            At Style Salon, we believe that beauty is about more than just appearance—it's about confidence, 
            self-expression, and feeling great in your own skin. Whether you're here for a haircut, color, 
            or a full makeover, we're here to make your experience unforgettable.
          </p>
          <p className="text-lg text-gray-600">
            Thank you for choosing Style Salon. We look forward to serving you and helping you shine!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;