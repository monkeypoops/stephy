"use client";

import { useState, useEffect } from "react";

export default function TypewriterText() {
  const fullText = "Welcome to my world";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, fullText]);

  return (
    <span>
      {displayText}
      {!isComplete && (
        <span className="animate-blink border-r-2 border-white ml-1">|</span>
      )}
    </span>
  );
}