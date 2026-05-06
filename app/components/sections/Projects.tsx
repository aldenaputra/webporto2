import Section, { SectionHeader } from '../ui/Section';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const mobileTitle = project.shortTitle ?? project.title;
  const mobileDescription = project.mobileDescription ?? project.description;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-full rounded-lg" />
        </div>
        <CardTitle className="hidden md:block">{project.title}</CardTitle>
        <CardTitle className="md:hidden text-lg leading-snug">{mobileTitle}</CardTitle>
        <p className="hidden md:block text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
        <p className="md:hidden text-sm leading-relaxed text-gray-600 dark:text-gray-300 mt-2">{mobileDescription}</p>
      </CardHeader>
      
      <CardContent className="grow">
        <div className="space-y-4">
          {project.mobileHighlights && (
            <ul className="md:hidden space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              {project.mobileHighlights.map((highlight, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              <span className="md:hidden">Tools:</span>
              <span className="hidden md:inline">Tools Used:</span>
            </h4>
            <div
              className="md:hidden flex gap-2 overflow-x-auto pb-2 -mb-2 snap-x"
              aria-label={`${mobileTitle} tools`}
            >
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="shrink-0 snap-start px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="hidden md:inline-flex px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
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
            variant="outline"
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
            variant="outline"
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
        title="Projects" 
        subtitle="Explore my work outside professional experiences and see how I've applied my skills to solve real-world problems. This section highlights projects done independently or as part of my learning journey."
        mobileSubtitle="Selected academic and personal projects, condensed for quick scanning."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
