// components/ImageSection.js

import styles from './ImageSection.module.css';

const ImageSection = ({ imageSrc, alt }) => {
    return (
        <section className={styles.imageSection}>
            <img 
                src="/images/is2.jpg "
                alt={alt} 
                className={styles.image}
            />
        </section>
    );
};

export default ImageSection;