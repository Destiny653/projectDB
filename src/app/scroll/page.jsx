'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {
  const scrollContainerRef = useRef()

  useEffect(() => {
    // Dynamically import Locomotive Scroll
    import('locomotive-scroll').then((LocomotiveScroll) => {
      const scroll = new LocomotiveScroll.default({
        el: scrollContainerRef.current,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
      })

      // GSAP ScrollTrigger Integration
      gsap.registerPlugin(ScrollTrigger)
      ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        }
      })

      // Cleanup
      return () => {
        scroll.destroy()
        ScrollTrigger.clearMatchMedia()
      }
    })
  }, [])

  return (
    <div ref={scrollContainerRef} data-scroll-container>
            {/* Hero Section */}
            <section className="flex justify-center items-center bg-gray-100 h-screen" data-scroll-section>
        <h1 data-scroll data-scroll-speed="1">Luxury Watches</h1>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="flex h-screen overflow-hidden" data-scroll-section>
        <div className="flex w-[300vw] h-screen horizontal-section">
          <div className="flex justify-center items-center bg-blue-100 w-screen h-screen">Slide 1</div>
          <div className="flex justify-center items-center bg-green-100 w-screen h-screen">Slide 2</div>
          <div className="flex justify-center items-center bg-yellow-100 w-screen h-screen">Slide 3</div>
        </div>
      </section>

      {/* Final Section */}
      <section className="flex justify-center items-center bg-red-100 h-screen" data-scroll-section>
        <p data-scroll data-scroll-speed="0.5">Discover More</p>
      </section>
    </div>
  )
}