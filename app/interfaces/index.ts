export interface IPosts {
    id: string;
    title: string;
    body: string;
    likes: number;
  }

export   interface PostsResponse  {
  posts: Array<IPosts>;
  }
  