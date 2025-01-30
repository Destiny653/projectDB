// // pages/index.js 
// 'use client'
// import AnimatedSection from "../components/Deep/Deep";

// export default function BeachPage() {

//     const handleHover = (e) => {
//         e.currentTarget.style.transform = `rotate(${Math.random() * 4 - 2}deg)`;
//     };
    
//     return (
//         <div className="container">
//             <AnimatedSection animationType="slideFromLeft">
//                 <div className="content-card">
//                     <h2>Welcome to the Shore</h2>
//                     <p>The waves gently crash against the sand...</p>
//                 </div>
//             </AnimatedSection>

//             <AnimatedSection animationType="slideFromRight">
//                 <div className="image-gallery">
//                     <img onMouseEnter={handleHover}
//                         style={{ transition: 'transform 0.3s ease' }}
//                         src="/image/beach1.jpeg" alt="Beach View" />
//                     <img onMouseEnter={handleHover}
//                         style={{ transition: 'transform 0.3s ease' }}
//                         src="/image/beach2.jpeg" alt="Ocean Waves" />
//                 </div>
//             </AnimatedSection>

//             <AnimatedSection animationType="fadeIn">
//                 <div className="stats-section">
//                     <div className="stat-item">
//                         <h3>Wave Height</h3>
//                         <p>2.4m</p>
//                     </div>
//                     <div className="stat-item">
//                         <h3>Water Temp</h3>
//                         <p>26°C</p>
//                     </div>
//                 </div>
//             </AnimatedSection>

//             <style jsx>{`
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 2rem;
//         }

//         .content-card {
//           background: rgba(255, 255, 255, 0.9);
//           padding: 2rem;
//           border-radius: 15px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           margin: 4rem 0;
//         }

//         .image-gallery {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 2rem;
//           margin: 4rem 0;
//         }

//         .image-gallery img {
//           width: 100%;
//           height: 300px;
//           object-fit: cover;
//           border-radius: 10px;
//         }

//         .stats-section {
//           display: flex;
//           justify-content: space-around;
//           gap: 2rem;
//           margin: 4rem 0;
//         }

//         .stat-item {
//           background: rgba(255, 255, 255, 0.9);
//           padding: 2rem;
//           border-radius: 10px;
//           text-align: center;
//           flex: 1;
//         }

//         /* Water effect overlay */
//         .container::before {
//           content: '';
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M0 50 Q 25 25 50 50 T 100 50 L 100 100 L 0 100 Z" fill="%2300b4d810"/></svg>');
//           animation: waveFlow 30s linear infinite;
//           pointer-events: none;
//           z-index: -1;
//         }

//         @keyframes waveFlow {
//           0% { background-position: 0 0; }
//           100% { background-position: 100px 100px; }
//         }
//       `}</style>
//         </div>
//     );
// }