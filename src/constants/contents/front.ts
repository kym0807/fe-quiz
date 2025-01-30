import { ListItem } from '@/types/content.type';

export const frontList: ListItem[] = [
  {
    id: '01',
    title: 'Vite',
    children: [
      {
        id: '01_1',
        title: 'Vite Config',
        children: [
          { id: '01_1_1', title: 'Configuring Vite' },
          { id: '01_1_2', title: 'Shared Options' },
          { id: '01_1_3', title: 'Server Options' },
          { id: '01_1_4', title: 'Build Options' },
          { id: '01_1_5', title: 'SSR Options' },
        ],
      },
    ],
  },
];
