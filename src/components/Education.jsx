import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';

const esenLogoUrl = "/Photos/esen-manouba.png";

const educationData = [
/*
{
  company: "Master's Degree in Monitoring and Competitive Intelligence",
  date: "Sept 2024 - Present",
  description: "Higher School of Digital Economy, University of Manouba. Focusing on strategic analysis, data-driven decision making, and market intelligence techniques.",
  logo: esenLogoUrl // Added logo
},
*/
  {
    company: "Bachelor's Degree in Business Computing",
    date: "Sept 2020 - May 2024",
    description: "Higher School of Digital Economy. Gained foundational knowledge in digital marketing, e-commerce strategies, web technologies, and business analytics.",
    logo: esenLogoUrl // Added logo
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
         <motion.h2
          className="section-title"
           initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="space-y-10 md:space-y-12">
          {educationData.map((edu, index) => (
            <ExperienceCard
              key={index}
              company={edu.company}
              date={edu.date}
              description={edu.description}
              logo={edu.logo} // Pass logo prop
            />
          ))}
        </div>
      </div>
    </section>
  );
}

