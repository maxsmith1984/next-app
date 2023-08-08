import { Metadata } from 'next';
import Link from 'next/link';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Something wrong fetch');

  return response.json();
};

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h1>Blog Page</h1>

      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Blog;
