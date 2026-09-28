import Link from "next/link";
import courses from "@/app/data/courses";

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white text-gray-800">

        <section className="text-center px-6 py-20">
          <h1 className="text-4xl text-red-400 md:text-5xl font-bold mb-4 mt-10">
            Our Courses
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Explore our comprehensive courses designed to equip you with the skills needed to excel in the tech industry.
          </p>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {Object.entries(courses).map(([slug, course]) => (
            <Link key={slug} href={`/courses/${slug}`}>
              <div className="bg-red-100 p-8 rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition">
                <h3 className="text-2xl font-semibold mb-4">
                  {course.title}
                </h3>
                <p>{course.description}</p>
              </div>
            </Link>
          ))}
        </section>

      </main>
    </div>
  );
}