"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Neighbourly",
    description: "Community-driven app on AWS that lets residents share requests, manage parking, and explore amenities. Engineered zero-downtime deployment pipeline with CloudFormation, EC2, and Auto Scaling Groups with real-time notifications via SNS and Lambda.",
    technologies: ["AWS", "CloudFormation", "EC2", "RDS", "S3", "DynamoDB", "Lambda", "Flask", "Python"],
    link: "#",
    github: "https://github.com/krishnatejnk/Neighbourly",
    type: "Individual Project",
  },
  {
    title: "DALSys - Distributed Autonomous Locomotion System",
    description: "Serverless backend microservices using AWS Lambda and RESTful APIs to manage user authentication, e-bike operations, and notifications. Implemented secure multi-factor authentication and message-driven workflows (SNS/SQS) with React frontend on AWS Fargate.",
    technologies: ["Python", "FastAPI", "Node.js", "React", "MQTT", "AWS IoT Core", "Lambda", "API Gateway", "ECS"],
    link: "#",
    github: "https://github.com/krishnatejnk/CSCI-5410",
    type: "Academic Project",
  },
  {
    title: "Clinical Notes Summarization - RAG System",
    description: "Retrieval Augmented Generation system for clinical notes using Flan-T5 and FAISS on AWS SageMaker, enabling doctors to access concise, context-rich summaries. Automated multi-region disaster recovery with S3, KMS, and IAM, handling 10,000+ daily requests.",
    technologies: ["AWS SageMaker", "FAISS", "Flan T5", "Lambda", "API Gateway", "S3", "Python", "RDS"],
    link: "#",
    github: "#",
    type: "ML/AI Project",
  },
  {
    title: "Disaster Recovery for Healthcare Systems",
    description: "Disaster recovery setup for healthcare apps on AWS with multi-region architecture, S3 replication, and RDS Multi-AZ. Automated failover with Lambda and Route 53, with CloudWatch monitoring and IAM/KMS security.",
    technologies: ["AWS CloudFormation", "EC2", "RDS", "S3", "DynamoDB", "Lambda", "Route 53", "Auto Scaling", "SNS", "IAM", "KMS"],
    link: "#",
    github: "#",
    type: "Infrastructure Project",
  },
  {
    title: "Attention-Guided Segmentation on Chest CT Scans",
    description: "Implemented and compared attention-guided segmentation models (UNetCBAM, AAGS, SegFormer) against traditional UNet baselines, improving Dice score by 7%. Engineered reproducible data preprocessing pipeline with React/Next.js visualization.",
    technologies: ["PyTorch", "SegFormer", "UNetCBAM", "AAGS", "NumPy", "Matplotlib", "Scikit-learn", "React", "Next.js"],
    link: "#",
    github: "#",
    type: "Deep Learning Project",
  },
  {
    title: "Text Classification using Transformer Models",
    description: "Fine-tuned pre-trained Transformer architectures (BERT, DistilBERT) for sentiment analysis on IMDb reviews, reaching 92% accuracy. Applied tokenization, embeddings, and attention visualization techniques for explainability.",
    technologies: ["Hugging Face Transformers", "BERT", "DistilBERT", "PyTorch", "Pandas", "Scikit-learn"],
    link: "#",
    github: "#",
    type: "NLP Project",
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js and TypeScript, featuring smooth animations with Framer Motion and a bold, creative design. Includes contact form integration with Resend API, fully responsive layout, and optimized performance with Next.js App Router.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Resend API"],
    link: "#",
    github: "https://github.com/krishnatejnk/portfolio-site",
    type: "Portfolio Project",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="projects"
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
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${index === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-6 h-full flex flex-col overflow-hidden">
                <div className="flex items-start justify-between mb-3">
                  {project.type && (
                    <span className="text-xs px-2 py-1 bg-blue-600/20 border border-blue-500/50 rounded text-blue-300">
                      {project.type}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-600/20 border border-blue-500/50 rounded text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-center text-white font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 border border-blue-500 rounded-lg text-center text-blue-400 font-semibold hover:bg-blue-500/10 ${project.link && project.link !== "#" ? "flex-1" : "w-full"}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

