import Section, { SectionHeader } from '../ui/Section';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Project Screenshot</span>
        </div>
        <CardTitle>{project.title}</CardTitle>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
      </CardHeader>
      
      <CardContent className="grow">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">STAR Method</h4>
            <div className="space-y-2 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Situation:</strong>
                <p className="text-gray-600 dark:text-gray-300">{project.situation}</p>
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Task:</strong>
                <p className="text-gray-600 dark:text-gray-300">{project.task}</p>
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Action:</strong>
                <p className="text-gray-600 dark:text-gray-300">{project.action}</p>
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Result:</strong>
                <p className="text-gray-600 dark:text-gray-300">{project.result}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <div className="mt-6 flex gap-3">
        {project.githubUrl && (
          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="flex-1"
          >
            GitHub
          </Button>
        )}
        {project.demoUrl && (
          <Button
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="flex-1"
          >
            Live Demo
          </Button>
        )}
        {project.driveUrl && (
          <Button
            href={project.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            className="flex-1"
          >
            View Files
          </Button>
        )}
      </div>
    </Card>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" background="white">
      <SectionHeader 
        title="Projects & Experience" 
        subtitle="Explore my work and see how I've applied my skills to solve real-world problems"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}