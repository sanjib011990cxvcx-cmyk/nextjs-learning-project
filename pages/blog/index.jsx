import Link from "next/link";
import Head from "next/head";
import { blogs } from "../data/blogs";


export default function BlogList({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | My Website</title>
        <meta
          name="description"
          content="Read the latest blog posts about Next.js and web development."
        />
      </Head>

      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: blogs,
    },
  };
}
