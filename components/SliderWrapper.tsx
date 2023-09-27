"use client";

import { slides } from "@/lib/data/slides";
import { useState, useEffect, useRef } from "react";

import { Slide } from "./Slide";

type SliderProps = {
  slides: typeof slides;
};

export const SliderWrapper = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const timer = 6000;

  const startInterval = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = window.setInterval(nextSlide, timer);
  };

  const stopInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    stopInterval();
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      startInterval();
    }, timer);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) startInterval();

    return () => {
      stopInterval();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isPaused, slides]);

  return (
    <div className="tw-bg-blue-400">
      <div
        className="slider-wrapper tw-h-[400px] tw-relative"
        onMouseEnter={handlePause}
        onMouseLeave={handlePause}
      >
        {slides.map((slide, index) => (
          <Slide key={index} active={index === currentSlide} {...slide} />
        ))}
      </div>
      <button className="prev tw-z-50 tw-text-black" onClick={prevSlide}>
        Previous
      </button>
      <button className="next tw-z-50 tw-text-black" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};
