'use client';

import { useState } from 'react';
import { Alert, AlertDescription } from '../ui/alert';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { CodeQuizType } from '@/types/quiz.type';
import Link from 'next/link';

const SandpackComponent = dynamic(
  () =>
    import('@codesandbox/sandpack-react').then((mod) => ({
      default: mod.Sandpack,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[400px] w-full items-center justify-center">
        Loading editor...
      </div>
    ),
  }
);

const getTemplateForCategory = (category: string) => {
  switch (category.toLowerCase()) {
    case 'javascript':
      return 'vanilla';
    case 'typescript':
      return 'vanilla-ts';
    case 'react':
      return 'react-ts';
    case 'nextjs':
      return 'react-ts';
    default:
      return 'vanilla';
  }
};

const getMainFilePath = (template: string) => {
  switch (template) {
    case 'vanilla':
      return '/index.js';
    case 'vanilla-ts':
      return '/index.ts';
    case 'react-ts':
      return '/App.tsx';
    default:
      return '/index.js';
  }
};

export function CodeQuiz({
  codeQuizzes,
  category,
  id,
}: {
  codeQuizzes: CodeQuizType[];
  category: string;
  id: string;
}) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const { theme } = useTheme();

  const currentQuiz = codeQuizzes[currentQuizIndex];
  const template = getTemplateForCategory(category);
  const mainFilePath = getMainFilePath(template);

  const handleNextQuiz = () => {
    if (currentQuizIndex < codeQuizzes.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevQuiz = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="min-h-screen w-full sm:mx-auto sm:max-w-6xl sm:p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          <span className="capitalize">{category}</span> 코드 퀴즈
        </h1>
        <Link href={`/contents/${category}/${id}`} className="block">
          뒤로가기
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{currentQuiz.title}</CardTitle>
          <CardDescription>{currentQuiz.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <SandpackComponent
              template={template}
              theme={theme === 'dark' ? 'dark' : 'light'}
              files={{
                [mainFilePath]: currentQuiz.code,
              }}
              options={{
                showLineNumbers: true,
                showInlineErrors: true,
                wrapContent: true,
                editorHeight: 400,
                closableTabs: false,
              }}
            />
          </div>
        </CardContent>
      </Card>

      <div className="mb-4 flex items-center justify-between">
        <Button onClick={handlePrevQuiz} disabled={currentQuizIndex === 0}>
          이전 문제
        </Button>
        <Button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? '해답 숨기기' : '해답 보기'}
        </Button>
        <Button
          onClick={handleNextQuiz}
          disabled={currentQuizIndex === codeQuizzes.length - 1}
        >
          다음 문제
        </Button>
      </div>

      {showAnswer && (
        <Alert>
          <AlertDescription className="whitespace-pre-line">
            {currentQuiz.answer}
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
