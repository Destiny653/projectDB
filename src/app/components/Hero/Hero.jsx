 'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Star, 
  Shield, 
  Truck, 
  Gift, 
  Clock, 
  Award,
  ThumbsUp,
  Heart,
  RefreshCcw,
  CheckCircle,
  HeartHandshake
} from 'lucide-react';

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Happy Parent",
      comment: "The quality and care put into every product is exceptional. My baby loves everything we've purchased!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
      name: "Michael Chen",
      role: "First-time Dad",
      comment: "Outstanding customer service and the fastest shipping I've experienced. Will definitely shop here again!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emma Williams",
      role: "Mom of Twins",
      comment: "The organic materials used in their clothing line give me peace of mind. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Satisfaction Guarantee",
      description: "Love it or return it within 30 days for a full refund"
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "Easy Returns",
      description: "Hassle-free returns with prepaid shipping labels"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every product meets strict safety standards"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "2-Year Warranty",
      description: "Extended coverage for your peace of mind"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div 
        className="top-0 left-0 z-0 fixed w-full h-screen"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555252333-9f8e92e65df9")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 to-white/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <motion.div 
          className="mx-auto max-w-7xl"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Hero Section */}
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <h1 className="mb-6 font-bold font-serif text-4xl text-white sm:text-7xl">
              Welcome to <span className="font-dancing text-purple-600">BabyBliss</span>
            </h1>
            <p className="mb-4 font-light text-2xl text-gray-100">
              Where Every Little Dream Comes True
            </p>
            <p className="mb-8 font-medium text-lg text-purple-200">
              Trusted by Over 100,000 Happy Parents Worldwide
            </p>
            <div className="flex justify-center gap-4">
              <motion.button 
                className="flex items-center bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold text-lg text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button 
                className="flex items-center border-2 border-white/40 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-full font-semibold text-lg text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="bg-white/90 shadow-xl backdrop-blur-sm mt-16 p-8 rounded-2xl"
            variants={fadeIn}
          >
            <h2 className="mb-8 font-bold text-3xl text-center text-gray-800">Why Choose BabyBliss?</h2>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <ThumbsUp className="w-6 h-6" />, text: "100% Customer Satisfaction", subtext: "Over 50,000 Happy Reviews" },
                { icon: <Shield className="w-6 h-6" />, text: "Safety First", subtext: "Certified Baby-Safe Products" },
                { icon: <Clock className="w-6 h-6" />, text: "24/7 Support", subtext: "Always Here to Help" },
                { icon: <Heart className="w-6 h-6" />, text: "Made with Love", subtext: "Carefully Curated Items" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex justify-center items-center bg-purple-100 mx-auto mb-4 rounded-full w-12 h-12 text-purple-600">
                    {item.icon}
                  </div>
                  <h3 className="mb-1 font-semibold text-gray-800">{item.text}</h3>
                  <p className="text-gray-600 text-sm">{item.subtext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guarantees Section */}
          <motion.div
            className="bg-gradient-to-r from-purple-50 to-indigo-50 shadow-xl mt-16 p-8 rounded-2xl"
            variants={fadeIn}
          >
            <h2 className="mb-8 font-bold text-3xl text-center text-gray-800">Our Guarantees</h2>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {guarantees.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-md p-6 rounded-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 text-purple-600">{item.icon}</div>
                  <h3 className="mb-2 font-semibold text-gray-800 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="mt-16"
            variants={fadeIn}
          >
            <h2 className="mb-8 font-bold text-3xl text-center text-gray-800">What Parents Say</h2>
            <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg p-6 rounded-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mr-4 rounded-full w-12 h-12 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">{testimonial.comment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            className="bg-purple-600 shadow-xl mt-16 p-8 rounded-2xl text-center text-white"
            variants={fadeIn}
          >
            <h2 className="mb-4 font-bold text-3xl">Join Our Community</h2>
            <p className="mb-6 text-purple-100">Subscribe for exclusive offers, parenting tips, and new arrivals</p>
            <div className="flex gap-4 mx-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <motion.button
                className="bg-white hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold text-purple-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="mt-4 text-purple-200 text-sm">
              By subscribing, you agree to our Privacy Policy and Terms of Service
            </p>
          </motion.div>

          {/* Footer Benefits */}
          <motion.div
            className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-16"
            variants={fadeIn}
          >
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Fast & Free Delivery",
                description: "Free shipping on orders over $50"
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Special Gifts",
                description: "Free gift wrapping on all orders"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Secure Shopping",
                description: "100% secure payment"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center bg-white/80 shadow-md backdrop-blur-sm p-6 rounded-xl">
                <div className="mr-4 text-purple-600">{benefit.icon}</div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;