'use client';

import { useEffect, useState } from 'react';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Auto-close welcome screen after 3 seconds
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Match fade-out animation duration
      return () => clearTimeout(fadeTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 dark:bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400/30 dark:bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center animate-fade-in-up px-4">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold italic text-gray-900 dark:text-white leading-tight">
          Welcome
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-500 dark:from-white via-blue-600 to-purple-500 bg-clip-text text-transparent leading-tight py-2">
          to my Portfolio
        </h2>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-3 h-3 bg-gray-900 dark:bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-gray-900 dark:bg-white rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
          <div className="w-3 h-3 bg-gray-900 dark:bg-white rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
}
