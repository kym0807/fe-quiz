'use client';

import { Button } from './ui/button';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from './ui/drawer';
import { ExternalLink } from 'lucide-react';

export function RefData() {
  const references = [
    {
      category: 'JavaScript',
      title: "You Don't Know JS",
      author: 'Kyle Simpson',
      url: 'https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed',
    },
    {
      category: 'TypeScript',
      title: 'TypeScript Handbook',
      author: 'Microsoft',
      url: 'https://www.typescriptlang.org/docs/handbook',
    },
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild className="w-full">
        <Button variant="outline">참고한 문서</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold">참고 자료</DrawerTitle>
            <DrawerDescription>
              해당 공식문서 학습에 참고한 공식문서(또는 문서)들 입니다.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4">
            {references.map((ref, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="text-lg font-semibold text-primary">
                  {ref.category}
                </h3>
                <div className="mt-2">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{ref.title}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">닫기</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
