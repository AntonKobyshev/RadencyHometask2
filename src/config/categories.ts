const categories = [
  {
    name: 'Task',
    iconUrl: '/images/task_icon.svg',
  },
  {
    name: 'Random thought',
    iconUrl: '/images/random_thought_icon.svg',
  },
  {
    name: 'Idea',
    iconUrl: '/images/idea_icon.svg',
  },
] as const;

export type Category = typeof categories[number];

export default categories;
