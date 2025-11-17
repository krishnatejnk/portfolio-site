"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="about"
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 shadow-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    Who I Am
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Software Engineer specializing in cloud-native applications and distributed systems. 
                    Currently pursuing Master of Applied Computer Science at Dalhousie University.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 shadow-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    What I Do
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Build scalable microservices, optimize data pipelines, and design cloud solutions. 
                    Experienced with Java, Spring Boot, Python, AWS, and Apache Kafka.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 shadow-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    My Approach
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Passionate about creating efficient, reliable systems. Always learning and applying 
                    cutting-edge solutions to solve complex problems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Microservices Built", value: "15+", color: "from-blue-500 to-blue-600" },
              { label: "Years Experience", value: "2+", color: "from-blue-600 to-blue-700" },
              { label: "Projects Completed", value: "10+", color: "from-blue-400 to-blue-600" },
              { label: "Technologies", value: "20+", color: "from-blue-500 to-blue-700" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-slate-200 dark:border-blue-500/30 shadow-sm rounded-2xl p-6 text-center"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

