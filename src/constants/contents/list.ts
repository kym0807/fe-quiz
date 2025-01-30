import { ListItem } from '@/types/content.type';
import { javascriptList } from './javascript';
import { typescriptList } from './typescript';
import { reactList } from './react';
import { nextList } from './next';
import { algorithmList } from './algorithm';
import { csList } from './cs';
import { nodeList } from './node';
import { backList } from './back';
import { frontList } from './front';

export const listData: ListItem[] = [
  {
    id: '01',
    title: 'javascript',
    children: javascriptList,
  },
  {
    id: '02',
    title: 'typescript',
    children: typescriptList,
  },
  {
    id: '03',
    title: 'react',
    children: reactList,
  },
  {
    id: '04',
    title: 'nextjs',
    children: nextList,
  },
  {
    id: '05',
    title: 'algorithm',
    children: algorithmList,
  },
  {
    id: '06',
    title: 'cs',
    children: csList,
  },
  {
    id: '07',
    title: 'node',
    children: nodeList,
  },
  {
    id: '08',
    title: 'front_tech',
    children: frontList,
  },
  {
    id: '09',
    title: 'backend_tech',
    children: backList,
  },
  {
    id: '10',
    title: 'cicd',
  },
];
