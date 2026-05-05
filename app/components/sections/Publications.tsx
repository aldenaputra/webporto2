import Section, { SectionHeader } from '../ui/Section';
import Card, { CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';
import { Publication } from '../../types';

interface PublicationCardProps {
  publication: Publication;
}

function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          <img src={publication.imageUrl} alt={publication.title} className="object-cover w-full h-full rounded-lg" />
        </div>
        <CardTitle>{publication.title}</CardTitle>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{publication.description}</p>
      </CardHeader>
      
      <CardContent className="grow">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {publication.technologies.map((tech, index) => (
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
        {publication.driveUrl && (
          <Button
            href={publication.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            className="flex-1"
          >
            View Publication
          </Button>
        )}
      </div>
    </Card>
  );
}

export default function Publications() {
  const { publications } = portfolioData;

  return (
    <Section id="publications" background="white">
      <SectionHeader 
        title="Publications & Research" 
        subtitle="My research work and academic publications where I've contributed to advancing knowledge in my field."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </Section>
  );
}
