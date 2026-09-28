import courses from "@/app/data/courses";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetails({ params }: Props) {
  const { slug } = await params;
  const course = courses[slug];

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="text-red-400 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {course.title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          {course.description}
        </p>
      </section>

      <section className="max-w-6xl  mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-red-100 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            What You will Learn
          </h2>
          <ul className="space-y-3">
            {course.learn.map((item, index) => (
              <li key={index} className="bg-grey-100 p-3 rounded-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-100 p-8 rounded-2xl shadow-md">
          <h3 className="text-xl text-red-500 font-semibold mb-4">Course Info</h3>
          <p className="mb-2">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="mb-6">
            <strong>Level:</strong> {course.level}
          </p>
          <a
            href="/apply"
            className="text-white font-sans text-red-400 bg-red-500 py-2 px-4 rounded font-bold hover:bg-red-900"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </main>
  );
}