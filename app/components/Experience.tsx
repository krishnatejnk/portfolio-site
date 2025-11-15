"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 transform md:-translate-x-1/2"></div>

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
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <span className="text-sm text-blue-400 font-semibold">{exp.period}</span>
                      </div>
                      <h4 className="text-lg text-blue-300 mb-2">{exp.company}</h4>
                      <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600/30 to-blue-700/30 border border-blue-500/50 rounded-full text-sm text-blue-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
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

