import Link from "next/link";

export default function Admission() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white text-gray-800">
        <section className="text-center px-6 py-20">
          <h1 className="text-4xl text-red-400 md:text-5xl font-bold mb-4 mt-10">
            Admissions
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Join our community of learners and take the first step towards a successful career in tech. Our admissions process is designed to be inclusive and supportive, ensuring that everyone has the opportunity to succeed.
          </p>
        </section>  
        <section className="py-8 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">How to Apply</h2>
          <p className="mb-4">
            To apply for our courses, please visit our{" "}
            <Link href="/apply" className="text-red-400 font-sans hover:underline">
                application page
            </Link>{" "}
            and fill out the application form. Our admissions team will review your application and get back to you within a few days.
          </p>
            <p>
            We look forward to welcoming you to our community and helping you achieve your goals in the tech industry!
            </p>
        </section>
      </main>
    </div>
  );
}