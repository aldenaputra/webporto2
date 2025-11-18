import Section, { SectionHeader } from '../ui/Section';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <Section id="about" background="gray">
      <SectionHeader 
        title="About Me" 
        subtitle="Learn more about my background, skills, and aspirations"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Professional Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {about.bio}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Career Goals</h4>
              <ul className="space-y-2">
                {about.careerGoals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              href={about.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Download CV
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Frontend', 'Backend', 'Database', 'Tools'].map(category => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {about.skills
                        .filter(skill => skill.category === category)
                        .map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {about.hobbies && about.hobbies.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Interests & Hobbies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {about.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                    >
                      {hobby}
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