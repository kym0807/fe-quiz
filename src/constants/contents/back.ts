import { ListItem } from '@/types/content.type';

export const backList: ListItem[] = [
  {
    id: '01',
    title: 'Realtime',
    children: [
      {
        id: '01_1',
        title: 'WebSocket',
        children: [
          { id: '01_1_1', title: 'WebSocket 기본' },
          { id: '01_1_2', title: 'WebSocket API' },
          { id: '01_1_3', title: 'Socket.IO 가이드' },
          { id: '01_1_4', title: 'Socket.IO 서버' },
          { id: '01_1_5', title: 'Socket.IO 클라이언트' },
          { id: '01_1_6', title: 'Socket.IO 이벤트' },
        ],
      },
      {
        id: '01_2',
        title: 'Redis',
      },
    ],
  },
  {
    id: '02',
    title: 'Framework',
    children: [
      {
        id: '02_1',
        title: 'Fastify',
        children: [
          {
            id: '02_1_1',
            title: 'Fastify 시작하기',
          },
          { id: '02_1_2', title: 'Fastify 서버' },
          { id: '02_1_3', title: 'Fastify 라우팅' },
          { id: '02_1_4', title: 'Fastify Request' },
          { id: '02_1_5', title: 'Fastify Reply' },
          { id: '02_1_6', title: 'Fastify 로깅' },
          { id: '02_1_7', title: 'Fastify 검증과 직렬화' },
          { id: '02_1_8', title: 'Fastify 타입스크립트 가이드' },
          { id: '02_1_9', title: 'Fastify 훅(Hooks)' },
        ],
      },
    ],
  },
];
