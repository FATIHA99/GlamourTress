'use client';
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './CustomerReviews.module.css';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    review: 'I absolutely love the hairstyle I got here! The stylists are so talented and professional. Highly recommend!',
    image: '/images/1.jpg',
  },
  {
    id: 2,
    name: 'Emily Davis',
    location: 'London, UK',
    rating: 4.5,
    review: 'The beauty treatments are top-notch. My skin has never felt better. Thank you!',
    image: '/images/2.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    location: 'Sydney, Australia',
    rating: 5,
    review: 'Best haircut I\'ve ever had! The team is amazing and the atmosphere is so relaxing.',
    image: '/images/3.jpg',
  },
  {
    id: 4,
    name: 'Jessica Wilson',
    location: 'Toronto, Canada',
    rating: 3,
    review: 'Good service overall, but the wait time was longer than expected.',
    image: '/images/2.jpg',
  },
];

const CustomerReviews = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.on('slideChangeTransitionStart', () => {
        document.documentElement.style.overflowX = 'hidden';
      });
      swiperInstance.on('slideChangeTransitionEnd', () => {
        document.documentElement.style.overflowX = '';
      });
    }

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(".swiper-slide", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: swiperRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    }, sectionRef);

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChangeTransitionStart');
        swiperInstance.off('slideChangeTransitionEnd');
      }
      document.documentElement.style.overflowX = '';
      ctx.revert();
    };
  }, []);

  return (
    <section className={styles.customerReviews} ref={sectionRef}>
      <h2 ref={titleRef} className={`${styles.title} Eastwood`}>What Our Customers Say</h2>
      <p ref={subtitleRef} className={`${styles.subtitle} Roboto`}>
        Hear from our happy clients about their experiences.
      </p>
      
      <div className={styles.swiperContainer} ref={swiperRef}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewContent}>
                <div className={styles.reviewHeader}>
                  <img
                    src={review.image}
                    alt={review.name}
                    className={styles.avatar}
                  />
                  <div className={styles.reviewerInfo}>
                    <h4 className={`${styles.reviewerName} Coolvetica`}>{review.name}</h4>
                    <p className={`${styles.reviewerLocation} Roboto`}>{review.location}</p>
                  </div>
                </div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={index < review.rating ? styles.starFilled : styles.starEmpty}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className={`${styles.reviewText} Roboto`}>{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReviews;