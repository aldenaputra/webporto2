'use client';

import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function WorkExperience() {
  const { workExperiences } = portfolioData;
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(workExperiences.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = Array.from(sectionRef.current.querySelectorAll<HTMLElement>('[data-work-index]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idxAttr = (entry.target as HTMLElement).dataset.workIndex;
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
    <section ref={sectionRef} id="workexperience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experiences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and experiences in the industry.
          </p>
        </div>

        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <div
              key={index}
              data-work-index={index}
              className={`transition-all duration-700 ${
                isVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-1/3 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.name}
                      className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                    {/* Job Title and Description */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {experience.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                        {experience.desc}
                      </p>
                    </div>

                    {/* Techstack and Link */}
                    <div>
                      {/* Techstack */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                          Tech Stack:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.techstack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs md:text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link Button */}
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                      >
                        View Details
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
