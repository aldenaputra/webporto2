'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const educationData = portfolioData.education;
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(educationData.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = Array.from(sectionRef.current.querySelectorAll<HTMLElement>('[data-edu-index]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = (entry.target as HTMLElement).dataset.eduIndex;
          if (!idxAttr) return;
          const index = parseInt(idxAttr, 10);
          if (Number.isNaN(index)) return;
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // We use data attributes + sectionRef to query elements for intersection observing

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My learning journey from high school through master's degree.
          </p>
        </div>
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative pb-4">                        
            <div className="relative flex justify-between items-start gap-4">
              {/* Vertical timeline line */}
              <div className="absolute top-2 left-1/6 right-1/6 h-1 bg-linear-to-r from-blue-500 to-fuchsia-600 rounded"></div>
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  data-edu-index={index}
                  className={`flex flex-col items-center transition-all duration-700 flex-1 ${
                    isVisible[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div 
                    className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 mb-6 relative z-10"
                    style={{
                      borderColor: item.getdotcolor === 'blue-500' ? '#3b82f6' : item.getdotcolor === 'violet-500' ? '#8b5cf6' : '#d946ef'
                    }}
                  ></div>
                  
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full transform hover:scale-105 transition-transform">
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                      {item.level}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {item.school}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {item.degree}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {item.duration}
                    </p>
                    {item.gpa && (
                      <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                        Grade: {item.gpa}
                      </p>
                    )}
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="lg:hidden space-y-4">
          {educationData.map((item, index) => (
            <div key={item.id}>
              {/* Card */}
              <div
                data-edu-index={index}
                className={`transition-all duration-700 ${
                  isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    {item.level}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.school}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {item.degree}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {item.duration}
                  </p>
                  {item.gpa && (
                    <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                      Grade: {item.gpa}
                    </p>
                  )}
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}