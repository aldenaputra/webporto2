import Section, { SectionHeader } from '../ui/Section';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { about, socialLinks } = portfolioData;
  const focusAreas = [
    'Data Science, Analytics, BI',
    'Data Engineering',
    'IT Risk Management & Audit',
    'Security-Aware Data Practices',
  ];

  return (
    <Section id="about" background="gray">
      <SectionHeader 
        title="About Me" 
        subtitle="Learn more about my background, skills, and aspirations"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle>Professional Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-7 lg:hidden">
              {about.mobileBio ?? about.bio}
            </p>

            <div className="hidden lg:block space-y-5">
              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {about.bio}
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {about.bio1}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-800 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-blue-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {about.bio2}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-800 transition-colors hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-600"
                    title="GitHub"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-800 transition-colors hover:bg-blue-600 hover:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-600"
                    title="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>

                <Button 
                  href={about.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto sm:min-w-40"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Hard Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {about.hardSkills.map((group, index) => (
                  <div
                    key={group.category}
                    className={index > 0 ? 'border-t border-gray-200 dark:border-gray-700 pt-5' : ''}
                  >
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {about.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                  >
                    {skill.skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          {about.certifications && about.certifications.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {about.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 dark:text-amber-400 mr-3 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{cert.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {about.domainsOfInterest && about.domainsOfInterest.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Domains of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {about.domainsOfInterest.map((domain, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
}
