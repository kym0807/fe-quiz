import { RefData } from '@/components/ref-data';
import { TechCard } from '@/components/tech-card';
import { techStacks } from '@/constants/tech';
import { TechCategoryType } from '@/types/content.type';
import { cache } from 'react';

const categories = {
  core: ['javascript', 'typescript'],
  frontend: ['react', 'nextjs', 'front_tech'],
  backend: ['node', 'backend_tech'],
  fundamentals: ['algorithm', 'cs'],
  devops: ['cicd'],
};

const filterdTech = cache((category: TechCategoryType) =>
  techStacks.filter((t) => categories[category].includes(t.id))
);

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 transition-colors duration-300 sm:p-6">
      <h1 className="mb-4 text-center text-2xl font-bold sm:mb-8 sm:text-3xl lg:text-4xl">
        Modern Web Technology Stack with Quiz
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6 text-xl font-bold text-primary sm:text-2xl">
            Core Languages
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filterdTech('core').map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-bold text-primary sm:text-2xl">
            Frontend Development
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {filterdTech('frontend').map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-bold text-primary sm:text-2xl">
            Backend Development
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filterdTech('backend').map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-bold text-primary sm:text-2xl">
            Computer Science Fundamentals
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {filterdTech('fundamentals').map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-bold text-primary sm:text-2xl">
            DevOps & Deployment
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {filterdTech('devops').map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>
        </section>
      </div>

      <div className="my-10 w-full">
        <RefData />
      </div>
    </div>
  );
}
