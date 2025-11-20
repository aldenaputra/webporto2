import Image from 'next/image';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Profile Picture */}
          <div className="flex justify-center">
              <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-linear-to-r from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-4">
                  <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <img src={personal.url} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              {personal.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-4">
              {personal.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {personal.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                href="#projects" 
                size="lg"
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>
              <Button 
                href="#about" 
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}