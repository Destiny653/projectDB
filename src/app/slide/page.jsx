'use client'
import { useState, useEffect } from 'react';

const images = [
    '/image/prem1.png',
    '/image/prem2.png',
    '/image/prem3.png',
    '/image/prem4.png',
    '/image/prem5.png',
    '/image/prem6.png',
    '/image/prem7.png',
    '/image/prem8.png',
];

export default function MultiSlideCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState('right');
    useEffect(() => {
        const autoSlide = setInterval(goNext, 5000);
        return () => clearInterval(autoSlide);
    }, [currentIndex]);
   

    const visibleImages = 4; // Number of images to show at once

    const goNext = () => {
        setTransitionDirection('right');
        setCurrentIndex(prev => (prev + 1) % (images.length - visibleImages + 1));
    };

    const goPrev = () => {
        setTransitionDirection('left');
        setCurrentIndex(prev => (prev - 1 + (images.length - visibleImages + 1)) % (images.length - visibleImages + 1));
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div
                    className={`slides-container ${transitionDirection}`}
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="slide-item"
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="slide-image"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={goPrev} className="nav-button prev">‹</button>
            <button onClick={goNext} className="nav-button next">›</button>

            <style jsx>{`
        .carousel-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
          padding: 20px 0;
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
        }

        .slides-container {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: ${(images.length / visibleImages) * 100}%;
        }

        .slide-item {
          flex: 0 0 ${100 / visibleImages}%;
          padding: 0 10px;
          box-sizing: border-box;
        }

        .slide-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .nav-button:hover {
          background: rgba(0,0,0,0.8);
        }

        .prev {
          left: 10px;
        }

        .next {
          right: 10px;
        }
            @media (max-width: 768px) {
    .slide-item {
      flex: 0 0 50% !important; /* Show 2 items on tablets */
    }
  }

  @media (max-width: 480px) {
    .slide-item {
      flex: 0 0 100% !important; /* Show 1 item on phones */
    }
  }
      `}</style>
        </div>
    );
}