"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Azuga Inc",
    location: "Bangalore, KA, India",
    period: "Oct 2023 - May 2024",
    description: "Built and maintained a cloud-native framework of 15+ Spring Boot microservices with REST APIs, modernizing legacy components into modular pieces. Supercharged live data pipelines with Apache Kafka and Flume, boosting ingestion rates while caching and using query tuning to cut API response times. Reworked the Node Controller routing service to support rerouting, CRUD operations, and blazing-fast data retrieval.",
    technologies: ["Java", "Spring Boot", "Apache Kafka", "Apache Flume", "REST APIs", "Microservices"],
  },
  {
    title: "Software Engineer (Full Time Consultant)",
    company: "Morgan Stanley (Wiley mthree)",
    location: "Bangalore, KA, India",
    period: "Mar 2022 - Jun 2023",
    description: "Built and fine-tuned data processing services in Java (Spring MVC) and Scala, reliably handling ETL on time-sensitive financial data. Streamlined the conversion of millions of stock and bond records into highly customized JSON formats, cutting processing time. Orchestrated seamless large-scale data migrations from SQL to NoSQL with Apache Flume and Kafka, boosting analytics query performance.",
    technologies: ["Java", "Spring MVC", "Scala", "Apache Kafka", "Apache Flume", "ETL", "NoSQL"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeights, setCardHeights] = useState<{ [key: number]: number }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    // Measure back card heights - check all cards to pre-measure
    const measureHeights = () => {
      experiences.forEach((_, index) => {
        if (cardRefs.current[index]) {
          const measureElement = cardRefs.current[index]?.querySelector('[data-measure-back]') as HTMLElement;
          if (measureElement) {
            const height = measureElement.scrollHeight;
            setCardHeights((prev) => {
              if (prev[index] !== height) {
                return { ...prev, [index]: height };
              }
              return prev;
            });
          }
          // Also measure front card to get proper minimum height
          const frontCard = cardRefs.current[index]?.querySelector('[data-front-card]') as HTMLElement;
          if (frontCard && !flippedCards.has(index)) {
            const frontHeight = frontCard.scrollHeight;
            // Update if we need a larger minimum
            if (frontHeight > 280) {
              // Front card needs more space
            }
          }
        }
      });
    };

    // Measure on mount and when window resizes
    measureHeights();
    window.addEventListener('resize', measureHeights);
    return () => window.removeEventListener('resize', measureHeights);
  }, [flippedCards]);

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 bg-slate-200 dark:bg-gradient-to-b dark:from-blue-500 dark:via-blue-600 dark:to-blue-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10"></div>

                <div
                  className={`ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-5/12 md:max-w-none ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="relative cursor-pointer"
                    style={{ 
                      perspective: "1000px",
                      minHeight: "320px"
                    }}
                    onClick={() => toggleFlip(index)}
                    animate={{
                      height: flippedCards.has(index) 
                        ? cardHeights[index] || 400 
                        : 320, // Increased minimum height to accommodate longer titles on mobile
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Hidden element to measure back card height */}
                    <div
                      data-measure-back
                      className="absolute top-0 left-0 w-full opacity-0 pointer-events-none"
                      style={{ visibility: "hidden", zIndex: -1 }}
                    >
                      <div className="bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 rounded-2xl p-4 md:p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-blue-700/30 border border-blue-500/50 rounded-full text-sm text-blue-700 dark:text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 w-full h-full"
                      animate={{
                        rotateY: flippedCards.has(index) ? 180 : 0,
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Front of card */}
                      <div
                        className="absolute inset-0 w-full h-full"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        <motion.div
                          data-front-card
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 shadow-sm rounded-2xl p-4 md:p-6 relative overflow-hidden h-full flex flex-col justify-between"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-full blur-2xl"></div>
                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold text-right">
                                {exp.period.split(' - ').map((part, idx) => (
                                  <div key={idx}>
                                    {idx === 0 ? part : `- ${part}`}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <h4 className="text-lg text-blue-700 dark:text-blue-300 mb-2">{exp.company}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                          </div>
                          <div className="relative z-10 mt-4">
                            <p className="text-xs text-gray-500 dark:text-gray-500 italic">Click to see details</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Back of card */}
                      <div
                        className="absolute inset-0 w-full"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                        }}
                      >
                        <motion.div
                          data-back-card
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 shadow-sm rounded-2xl p-4 md:p-6 relative overflow-hidden min-h-full flex flex-col"
                        >
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-full blur-2xl"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFlip(index);
                                }}
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-semibold"
                              >
                                Close
                              </button>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                  transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                                  className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-blue-700/30 border border-blue-500/50 rounded-full text-sm text-blue-700 dark:text-blue-300"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

