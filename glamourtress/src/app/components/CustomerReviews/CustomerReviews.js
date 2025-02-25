// components/CustomerReviews.js
'use client'; // Mark this component as a Client Component

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './CustomerReviews.module.css'; // Using CSS Modules

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    review:
      'I absolutely love the hairstyle I got here! The stylists are so talented and professional. Highly recommend!',
    image: '/images/1.jpg',
  },
  {
    id: 2,
    name: 'Emily Davis',
    location: 'London, UK',
    rating: 4.5,
    review:
      'The beauty treatments are top-notch. My skin has never felt better. Thank you!',
    image: '/images/2.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    location: 'Sydney, Australia',
    rating: 5,
    review:
      'Best haircut I’ve ever had! The team is amazing and the atmosphere is so relaxing.',
    image: '/images/3.jpg',
  },
  {
    id: 4,
    name: 'Michael Brown',
    location: 'Sydney, Australia',
    rating: 3,
    review:
      'Best haircut I’ve ever had! The team is amazing and the atmosphere is so relaxing.',
    image: '/images/2.jpg',
  },
];

const CustomerReviews = () => {
  return (
    <section className={styles.customerReviews}>
      <h2 className={`${styles.title} Eastwood `}>What Our Customers Say</h2>
      <p className={`${styles.subtitle} Roboto `}>
        Hear from our happy clients about their experiences.
      </p>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} 
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled', 
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        loop={true} 
        breakpoints={{
          768: {
            slidesPerView: 2,
            navigation: true, 
          },
          1024: {
            slidesPerView: 3,
            navigation: true, 
          },
        }}
        className={styles.swiperContainer}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewContent}>
              <div className={styles.reviewHeader}>
                <img
                  src={review.image}
                  className={`${styles.avatar} `}
                />
                <div className={`${styles.reviewerInfo}  `}>
                  <h4 className={`${styles.reviewerName} Coolvetica `}>{review.name}</h4>
                  <p className={`${styles.reviewerLocation} Roboto `}>{review.location}</p>
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
              <p className={`${styles.reviewText} Roboto `}>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReviews;