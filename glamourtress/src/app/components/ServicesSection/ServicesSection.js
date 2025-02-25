import styles from './ServicesSection.module.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Hair Styling",
      description: "We offer the latest trends in hair styling to make you look fabulous.",
      image: "/images/s1.jpg", // Replace with your image path
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Makeup Artistry",
      description: "Our professional makeup artists will enhance your natural beauty.",
      image: "/images/s2.jpg", // Replace with your image path
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Skin Care",
      description: "Pamper your skin with our luxurious skincare treatments.",
      image: "/images/s3.jpg", // Replace with your image path
      imagePosition: "right",
    },
    {
      id: 4,
      title: "Nail Art",
      description: "Get creative with our unique and stylish nail art designs.",
      image: "/images/s4.jpg", // Replace with your image path
      imagePosition: "left",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Section Title */}
      <h2 className={`${styles.sectionTitle} Eastwood`}>Our Services</h2>

      {/* Services List */}
      <div className={styles.servicesList}>
        {services.map((service) => (
          <div
            key={service.id}
            className={`${styles.serviceItem} ${
              service.imagePosition === "right" ? styles.imageRight : styles.imageLeft
            }`}
          >
            {/* Image */}
            <div className={styles.imageContainer}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.serviceImage}
              />
            </div>

            {/* Text Content */}
            <div className={styles.textContent}>
              <h3 className={` Eastwood`}>{service.title}</h3>
              <p className={` Roboto`}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;