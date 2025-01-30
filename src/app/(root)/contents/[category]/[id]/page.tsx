import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Suspense } from 'react';
import { MdxRemoteWrapper } from '@/components/contents/mdx-remote-wrapper';
import { Editor } from '@/components/editor';
import { cn } from '@/lib/utils';
import { Toolbar } from '@/components/toolbar';

export default async function PostPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id, category } = await params;
  const { mode } = await searchParams;

  const filePath = path.join(
    process.cwd(),
    'src',
    'constants',
    category,
    `${id}.mdx`
  );
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <article className="flex min-h-screen gap-2">
      <div
        className={cn(
          // Base layout
          'mx-auto w-full max-w-6xl px-4 py-8 md:py-12',
          'sm:px-6 lg:px-8',

          // Base prose with better dark mode handling
          'prose max-w-none dark:prose-invert',

          // Colors for light/dark modes
          'prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100',
          'prose-p:text-zinc-800 dark:prose-p:text-zinc-300',
          'prose-strong:text-zinc-900 dark:prose-strong:text-zinc-200',
          'prose-ul:text-zinc-800 dark:prose-ul:text-zinc-300',
          'prose-ol:text-zinc-800 dark:prose-ol:text-zinc-300',
          'prose-li:text-zinc-800 dark:prose-li:text-zinc-300',

          // Links
          'prose-a:text-blue-600 dark:prose-a:text-blue-400',
          'hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300',
          'prose-a:no-underline hover:prose-a:underline',

          // Code blocks
          'prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-800',
          'prose-pre:border dark:prose-pre:border-zinc-700',
          '[&_pre]:rounded-lg [&_pre]:p-4',

          // Inline code
          'prose-code:text-zinc-800 dark:prose-code:text-zinc-200',
          'prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800',
          'prose-code:rounded prose-code:px-1.5 prose-code:py-0.5',
          'prose-code:before:content-none prose-code:after:content-none',

          // Blockquotes
          'prose-blockquote:text-zinc-700 dark:prose-blockquote:text-zinc-300',
          'prose-blockquote:border-l-zinc-300 dark:prose-blockquote:border-l-zinc-700',
          'prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-800/50',
          'prose-blockquote:px-4 prose-blockquote:py-1',
          'prose-blockquote:rounded-sm',

          // Tables
          'prose-th:text-zinc-900 dark:prose-th:text-zinc-100',
          'prose-td:text-zinc-800 dark:prose-td:text-zinc-300',
          'prose-tr:border-zinc-200 dark:prose-tr:border-zinc-800',

          // Heading sizes and spacing
          'prose-h1:mb-8 prose-h1:text-3xl prose-h1:font-bold',
          'prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-2xl prose-h2:font-semibold',
          'prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-xl prose-h3:font-medium',

          // Lists
          'prose-ul:list-disc prose-ul:pl-6',
          'prose-ol:list-decimal prose-ol:pl-6',
          'prose-li:marker:text-zinc-500 dark:prose-li:marker:text-zinc-400',

          // Images
          'prose-img:rounded-lg',
          'prose-img:border-zinc-200 dark:prose-img:border-zinc-700',

          // Custom spacing
          'space-y-6',
          '[&>*:first-child]:mt-0',
          '[&>*:last-child]:mb-0'
        )}
      >
        <div className="mx-auto max-w-4xl">
          <div className="prose mx-auto p-4">
            <div className="flex w-full items-center justify-between py-4">
              <Link href={`/contents/${category}`} className="block">
                뒤로가기
              </Link>
              <Link href={`/contents/${category}/${id}/quiz`} className="block">
                코드 퀴즈
              </Link>
            </div>
            <h1>{data.title}</h1>
            <Suspense fallback={null}>
              <MdxRemoteWrapper content={content} />
            </Suspense>
          </div>
        </div>
      </div>
      {mode === 'edit' && (
        <div className="pt-[114px] print:pt-0">
          <Toolbar />
          <Editor />
        </div>
      )}
    </article>
  );
}
