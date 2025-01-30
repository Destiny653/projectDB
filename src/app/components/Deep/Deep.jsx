// // components/AnimatedSection.js
// import { useEffect, useRef, useState } from 'react';

// export default function AnimatedSection({ children, animationType = 'slideFromLeft' }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Add to AnimatedSection component
// useEffect(() => {
//     const handleScroll = () => {
//       if (isVisible && sectionRef.current) {
//         const scrollY = window.scrollY;
//         sectionRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isVisible]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <div 
//       ref={sectionRef}
//       className={`animated-section ${animationType} ${isVisible ? 'visible' : ''}`}
//     >
//       {children}
//       <style jsx>{`
//         .animated-section {
//           opacity: 0;
//           transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         /* Slide From Left Animation */
//         .slideFromLeft {
//           transform: translateX(-100px);
//         }

//         /* Slide From Right Animation */
//         .slideFromRight {
//           transform: translateX(100px);
//         }

//         /* Fade In Animation */
//         .fadeIn {
//           transform: translateY(50px);
//         }

//         /* Scale Up Animation */
//         .scaleUp {
//           transform: scale(0.95);
//         }

//         .visible {
//           opacity: 1;
//           transform: translate(0) scale(1);
//         }

//         /* Water Wave Background */
//         .animated-section::before {
//           content: '';
//           position: absolute;
//           width: 200%;
//           height: 200%;
//           background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M0 50 Q 25 25 50 50 T 100 50 L 100 100 L 0 100 Z" fill="%2300b4d850"/></svg>');
//           animation: waveFlow 20s linear infinite;
//           z-index: -1;
//         }

//         @keyframes waveFlow {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//       `}</style>
//     </div>
//   );
// }