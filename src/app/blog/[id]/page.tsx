import { Metadata } from 'next';

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
};

interface IProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params: { id } }: IProps): Promise<Metadata> => {
  const post = await getData(id);

  return {
    title: post.title,
  };
};

const Post = async ({ params: { id } }: IProps) => {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>

      <div>{post.body}</div>
    </>
  );
};

export default Post;
