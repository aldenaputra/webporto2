'use client';

import ThemeToggle from '../ui/ThemeToggle';
import { portfolioData } from '../../data/portfolioData';

export default function Navigation() {
  const { personal } = portfolioData;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#hero" className="text-xl font-bold text-gray-900 dark:text-white">
              {personal.name.split(' ')[0]}
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </a>
          </div>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}