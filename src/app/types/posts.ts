// /app/posts/types.ts

export type Post = {
  id: number;
  title: string;
  body: string;
};

export type SearchProps = {
  updatedArticles: (articles: Post[]) => void;
  getPosts: () => Promise<void>;
};

export type PostComponentProps = {
  title: string;
  id: number;
  body: string;
};

export type SearchParams = {
  query: string;
};
  