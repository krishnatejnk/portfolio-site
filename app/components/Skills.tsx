"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Java (Spring Boot, Spring MVC)", level: 90 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 82 },
      { name: "JUnit, Mockito", level: 80 },
      { name: "Go (basic)", level: 60 },
    ],
  },
  {
    category: "Databases & Messaging",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Apache Kafka", level: 88 },
      { name: "Apache Flume", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, Lambda, S3, API Gateway)", level: 88 },
      { name: "AWS CloudFormation", level: 85 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Jenkins & GitHub Actions", level: 82 },
      { name: "GCP (Pub/Sub, GKE)", level: 75 },
    ],
  },
  {
    category: "Architecture & Practices",
    skills: [
      { name: "Microservices Architecture", level: 88 },
      { name: "REST API Design", level: 90 },
      { name: "Test-Driven Development (TDD)", level: 85 },
      { name: "Agile/Scrum", level: 85 },
      { name: "CloudWatch & Monitoring", level: 85 },
      { name: "IAM, KMS, Security", level: 82 },
    ],
  },
];


export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-900/10"
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
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 shadow-sm rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {category.category}
                </span>
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: categoryIndex * 0.15 + skillIndex * 0.08, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
