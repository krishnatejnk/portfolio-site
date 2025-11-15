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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I&apos;m a Software Engineer with a passion for building cloud-native applications
                  and distributed systems. Currently pursuing my Master of Applied Computer Science
                  at Dalhousie University, I specialize in Java, Spring Boot, Python, and AWS cloud services.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With experience at companies like Azuga Inc and Morgan Stanley, I&apos;ve built and
                  maintained microservices architectures, optimized data pipelines with Apache Kafka,
                  and designed scalable cloud solutions. I&apos;m passionate about creating efficient,
                  reliable systems that handle real-world challenges.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I&apos;m not coding, I&apos;m exploring new technologies, working on side projects,
                  or contributing to open-source. I&apos;m always eager to learn and apply cutting-edge
                  solutions to complex problems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Microservices Built", value: "15+", color: "from-blue-500 to-blue-600" },
              { label: "Years Experience", value: "3+", color: "from-blue-600 to-blue-700" },
              { label: "Projects Completed", value: "10+", color: "from-blue-400 to-blue-600" },
              { label: "Technologies", value: "20+", color: "from-blue-500 to-blue-700" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 text-center"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

