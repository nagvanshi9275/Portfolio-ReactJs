import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.3
    }
  }
};

const Card = () => {
  return (
    <motion.div
      className='card-text'
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <motion.p  className="Card-p" variants={cardVariants}>Hey, I'm Jinang</motion.p>
      <motion.h3  id="Card-heading" variants={cardVariants}>Full Stack Developer</motion.h3>
      <motion.h3 id="Card-heading" variants={cardVariants}>Aspiring Cloud Engineer</motion.h3>
    </motion.div>
  );
};

export default Card;
