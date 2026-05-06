import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

export default function Section({ children, id, className = '', background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-gray-900 dark:bg-black'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  mobileSubtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, mobileSubtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {mobileSubtitle && (
        <p className="md:hidden text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {mobileSubtitle}
        </p>
      )}
      {subtitle && (
        <p className={`${mobileSubtitle ? 'hidden md:block' : ''} text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
