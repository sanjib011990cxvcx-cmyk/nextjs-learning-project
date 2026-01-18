import Head from "next/head";
import { blogs } from "../../lib/data/blogs";


export default function BlogDetails({ post }) {
  if (!post) {
    return <p className="text-center py-20">Post not found</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | My Website</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="max-w-3xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-relaxed">
          {post.content}
        </p>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = blogs.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // shows 404 if blog not found
  };
}

export async function getStaticProps({ params }) {
  const post = blogs.find((blog) => blog.id === params.id);

  return {
    props: {
      post: post || null,
    },
  };
}
