import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';
import { TechStacksType } from '@/types/content.type';
import Image from 'next/image';

export function TechCard({ tech }: { tech: TechStacksType }) {
  return (
    <Link href={`/contents/${tech.id}`}>
      <Card className="group h-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:hover:shadow-primary/25">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-800">
              <Image
                src={tech.img}
                alt={tech.title}
                width={24}
                height={24}
                className="invert-0 dark:invert"
              />
            </div>
            <CardTitle className="text-lg font-bold sm:text-xl">
              {tech.title}
            </CardTitle>
          </div>
          <CardDescription className="mt-2 dark:text-gray-400">
            {tech.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold dark:text-gray-200">
                주요 특징:
              </h3>
              <ul className="list-disc space-y-1 pl-5">
                {tech.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold dark:text-gray-200">장점:</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {tech.benefits}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
