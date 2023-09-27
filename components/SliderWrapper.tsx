"use client";

import { slides } from "@/lib/data/slides";
import { useState, useEffect, useRef } from "react";

import { Slide } from "./Slide";

type SliderProps = {
  slides: typeof slides;
};

type SlideButtonsProps = React.HTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  side: "left" | "right";
};

const SlideButtons = ({ onClick, children, side }: SlideButtonsProps) => {
  let sideClass;
  if (side === "left") {
    sideClass = "tw-left-[2%]";
  }

  if (side === "right") {
    sideClass = "tw-right-[2%]";
  }
  return (
    <button
      className={`tw-absolute tw-top-1/2 tw-z-[99] tw-hidden tw-text-xl tw-text-red-400 md:tw-block ${sideClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SliderWrapper = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const timer = 2000;

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
    <div className="tw-bg-black">
      <div
        className="slider-wrapper tw-relative tw-h-[400px]"
        onMouseEnter={handlePause}
        onMouseLeave={handlePause}
      >
        {slides.map((slide, index) => (
          <Slide key={index} active={index === currentSlide} {...slide} />
        ))}
      </div>
      <SlideButtons onClick={prevSlide} side="left">
        previous
      </SlideButtons>
      <SlideButtons onClick={nextSlide} side="right">
        next
      </SlideButtons>
    </div>
  );
};
