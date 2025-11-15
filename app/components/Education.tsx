"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "Master of Applied Computer Science",
    institution: "Dalhousie University",
    location: "Halifax, NS, Canada",
    period: "Sep 2024 - Apri 2026",
    gpa: "3.45 / 4.0",
    description: "Pursuing advanced studies in computer science with focus on cloud computing, distributed systems, machine learning, and software engineering. Building expertise in modern software development practices and cutting-edge technologies.",
    courses: [
      "Cloud Computing & Distributed Systems",
      "Machine Learning & Artificial Intelligence",
      "Software Engineering Practices",
      "Database Systems",
      "Advanced Algorithms",
      "Web Services & APIs"
    ],
  },
  {
    degree: "Bachelor of Computer Science Engineering",
    institution: "MVJ College of Engineering",
    location: "Bangalore, KA, India",
    period: "Sep 2018 - Sep 2022",
    gpa: "8.7 / 10.0",
    description: "Comprehensive undergraduate program covering core computer science fundamentals, software engineering, data structures, algorithms, and system design. Developed strong foundation in programming, database management, and software development lifecycle.",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Object-Oriented Programming",
      "Web Technologies",
      "Machine Learning"
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="education"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-900/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10"></div>

                {/* Content card */}
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
                        <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                        <span className="text-sm text-blue-400 font-semibold">{edu.period}</span>
                      </div>
                      <h4 className="text-lg text-blue-300 mb-2">{edu.institution}</h4>
                      {edu.location && <p className="text-sm text-gray-400 mb-2">{edu.location}</p>}
                      {edu.gpa && (
                        <p className="text-sm text-blue-400 font-semibold mb-4">
                          GPA: {edu.gpa}
                        </p>
                      )}
                      <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
                      {edu.courses && edu.courses.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-blue-300">Relevant Courses:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/50 rounded-full text-xs text-blue-300"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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

