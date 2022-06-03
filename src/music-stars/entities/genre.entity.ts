export const genres = ['Disco Polo', 'Rock', 'House', 'Rap'] as const;
export type Genre = typeof genres[number];
