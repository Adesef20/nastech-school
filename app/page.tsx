import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">

      <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center md:py-40">

        <h1 className="mb-6 text-4xl font-extrabold text-gray-800 md:text-6xl">
          Welcome To <span className="text-red-400">NasTech School</span>
        </h1>

        <p className="max-w-2xl text-lg font-semibold text-gray-600 md:text-2xl">
          Where we acquire knowledge on Web Development and modern tech skills
        </p>

        <Link
          href="/courses"
          className="mt-8 inline-block rounded-lg bg-red-500 px-6 py-3 font-bold text-white transition-colors hover:bg-red-900"
        >
          Explore Courses
        </Link>

      </section>

      <section className="w-full bg-gray-50 px-6 py-16">

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-center md:grid-cols-3">

          <div className="rounded-lg bg-red-100 p-6 shadow transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Expert Instructors
            </h3>

            <p className="text-gray-600">
              Learn from experienced professionals in web development and tech.
            </p>
          </div>


          <div className="rounded-lg bg-red-100 p-6 shadow transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Hands-on Projects
            </h3>

            <p className="text-gray-600">
              Build real-world projects to add to your portfolio and skills.
            </p>
          </div>


          <div className="rounded-lg bg-red-100 p-6 shadow transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              Career Support
            </h3>

            <p className="text-gray-600">
              Get guidance on resumes, interviews, and landing your first tech job.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}    