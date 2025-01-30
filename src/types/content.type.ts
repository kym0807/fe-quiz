export type ListItem = {
  id: string;
  title: string;
  children?: ListItem[];
  isQuiz?: boolean;
};

export type TechStacksType = {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string;
  img: string;
};

export type TechCategoryType =
  | 'core'
  | 'frontend'
  | 'backend'
  | 'fundamentals'
  | 'devops';
