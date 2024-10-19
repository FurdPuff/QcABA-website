"use client"

import React, { CSSProperties, useState } from 'react';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";


interface Slide {
  title: string;
  description: string;
  imageUrl: string;
}

const slides: Slide[] = [
  {
    title: '1. Behavior is Observable and Measurable',
    description: 'Behavior analysis focuses on observable behaviors that can be objectively measured. By quantifying behavior, analysts can track changes over time and assess the effectiveness of interventions.',
    imageUrl: 'https://www.simplypsychology.org/wp-content/uploads/behavior-analysis.jpeg',
  },
  {
    title: '2. Behavior is Influenced by the Environment',
    description: 'Behavior is shaped by the environment through a process of reinforcement and punishment. By altering environmental variables, behavior analysts can modify behavior and promote positive outcomes.',
    imageUrl: 'https://www.simplypsychology.org/wp-content/uploads/behavior-analysis.jpeg',
  },
  {
    title: '3. Behavior Can Be Analyzed Scientifically',
    description: 'Behavior analysis is rooted in the scientific method, employing systematic observation, experimentation, and data analysis to understand behavior and develop evidence-based interventions.',
    imageUrl: 'https://www.simplypsychology.org/wp-content/uploads/behavior-analysis.jpeg',
  },
  {
    title: '4. Focus on Function',
    description: 'Behavior analysts seek to understand the function or purpose of behavior. By identifying the underlying reasons for behavior, analysts can design interventions that address the root cause rather than just treating the symptoms.',
    imageUrl: 'https://www.simplypsychology.org/wp-content/uploads/behavior-analysis.jpeg',
  },
  {
    title: '5. Applied Approach',
    description: "Behavior analysis emphasizes the practical application of its principles to real-world problems. Whether addressing behavioral issues in individuals with developmental disabilities, improving organizational performance, or enhancing classroom management strategies, behavior analysts strive to make meaningful improvements in people's lives.",
    imageUrl: 'https://www.simplypsychology.org/wp-content/uploads/behavior-analysis.jpeg',
  }
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const styles: { [key: string]: CSSProperties } = {
    sliderContainer: {
        position: 'relative',
        width: '50%',
        margin: '0 auto',
        textAlign: 'center' as 'center',
    },
    slide: {
        marginBottom: '20px',
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '600px',
        height: 'auto',
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        position: 'absolute' as const,
        top: '540px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 20px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: 'rgb(0,0,0)',
    },
    prevButton: {
        left: '10px',
    },
    nextButton: {
        right: '10px',
    },
  };

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.slide}>
        <h2 style={{color: 'rgb(100,100,250)'}}>{slides[currentIndex].title}</h2>
        <img src={slides[currentIndex].imageUrl} alt={slides[currentIndex].title} style={styles.image} />
        <p>{slides[currentIndex].description}</p>
      </div>
      <div style={styles.controls}>
        <button onClick={handlePrev} style={{ ...styles.button, ...styles.prevButton}}>
            <SlArrowLeft size={15} className="cursor-pointer" />
            Previous
        </button>
        <button onClick={handleNext} style={{ ...styles.button, ...styles.nextButton}}>
            Next
            <SlArrowRight size={15} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Slider