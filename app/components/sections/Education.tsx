'use client';

import { useEffect, useRef, useState } from 'react';
import './education.css';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const educationData = portfolioData.education;
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(educationData.length).fill(false));
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
                  
                  {/* Card with hover effect */}
                  <div 
                    className="relative w-full"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
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

                    {/* Hover Card - Desktop */}
                    {hoveredCard === index && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 z-20 border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {/* Arrow pointing down */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-200 dark:border-t-gray-700"></div>
                        
                        {/* Scrollable Content */}
                        <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700 pr-2">
                          {/* Activities */}
                          {(item.activities || item.volunteering) && (
                            <div className="mb-4">
                              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sticky top-0 bg-white dark:bg-gray-800 py-1">
                                Activities & Volunteering
                              </h4>
                              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                                {item.activities?.map((activity, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-blue-500 mr-2 flex-shrink-0">✓</span>
                                    <span>{activity}</span>
                                  </li>
                                ))}
                                {item.volunteering?.map((vol, idx) => (
                                  <li key={`vol-${idx}`} className="flex items-start">
                                    <span className="text-purple-500 mr-2 flex-shrink-0">✓</span>
                                    <span>{vol}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Courses */}
                          {item.courses && item.courses.length > 0 && (
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sticky top-0 bg-white dark:bg-gray-800 py-1">
                                Relevant Courses
                              </h4>
                              <div className="grid grid-cols-1 gap-2">
                                {item.courses.map((course, idx) => (
                                  <div key={idx} className="bg-blue-50 dark:bg-gray-700 p-2 rounded">
                                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">{course.code}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{course.name}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Layout with Dropdown */}
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
                <button
                  onClick={() => setExpandedMobile(expandedMobile === index ? null : index)}
                  className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 text-left hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
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
                    <div className="ml-2 text-gray-400">
                      <svg
                        className={`w-5 h-5 transition-transform ${expandedMobile === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Dropdown Content - Mobile */}
                {expandedMobile === index && (
                  <div className="bg-blue-50 dark:bg-gray-700 rounded-b-lg p-5 border-t border-gray-200 dark:border-gray-600 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* Activities */}
                    {(item.activities || item.volunteering) && (
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                          Activities & Volunteering
                        </h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          {item.activities?.map((activity, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                          {item.volunteering?.map((vol, idx) => (
                            <li key={`vol-${idx}`} className="flex items-start">
                              <span className="text-purple-600 mr-2 flex-shrink-0">✓</span>
                              <span>{vol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Courses */}
                    {item.courses && item.courses.length > 0 && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                          Relevant Courses
                        </h4>
                        <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 pr-2">
                          {item.courses.map((course, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-2 rounded">
                              <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">{course.code}</p>
                              <p className="text-sm text-gray-700 dark:text-gray-300">{course.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}