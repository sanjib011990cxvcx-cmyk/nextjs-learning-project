import Link from "next/link";
import Head from "next/head";




export default function Home() {
  return (
    <div>

       <Head>
        <title>Home | Welcome to my Next.js learning project</title>
        <meta
          name="description"
          content="Welcome to my Next.js learning project"
        />
      </Head>

  
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to My Website 👋
          </h1>

          <p className="text-gray-600 mb-8">
            I am learning Next.js and building modern web applications with Tailwind CSS.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/about"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Contact
            </Link>
          </div>
        </section>
     
    </div>
  );
}
