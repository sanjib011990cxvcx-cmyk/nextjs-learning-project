import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | My Website</title>
        <meta
          name="description"
          content="Learn more about me and my journey in web development using Next.js and modern technologies."
        />
      </Head>

      <section className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Me
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed">
          Hi! I’m a passionate web developer learning and building modern web
          applications using <span className="font-semibold">Next.js</span>,
          <span className="font-semibold"> Tailwind CSS</span>, and other modern
          technologies. I enjoy creating clean, responsive, and user-friendly
          interfaces while continuously improving my skills in both frontend
          and backend development.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          This project is part of my learning journey, where I experiment with
          real-world features like authentication, APIs, dashboards, and
          performance optimization to grow as a full-stack developer.
        </p>
      </section>
    </>
  );
}
