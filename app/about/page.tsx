import Link from "next/link";

export default function About() {
    return(
        <main className="min-h-screen bg-white text-gray-800">
            <section className=" text-black px-6 py-20 text-center">
                <h1 className="text-4xl text-red-400 md:text-5xl font-bold mb-4 mt-10">
                    NasTech School
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl">
                    Empowering the next generation of web developers with practical
                    skills, real‑world knowledge, and the confidence to build the future
                    through technology.
                </p>
            </section>
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-red-500">Who We Are</h2>
                    <p className="mb-4 leading-relaxed">
                        NasTech School is a modern technology learning hub focused on
                        practical, hands‑on training in web development and digital skills.
                        Our mission is simple — to make high‑quality tech education
                        accessible, understandable, and career‑focused for students at every
                        level.
                    </p>
                    <p className="leading-relaxed">
                        We believe technology should not feel complicated or unreachable.
                        That is why our teaching approach is step‑by‑step, beginner‑friendly,
                        and deeply rooted in real project experience rather than theory
                        alone.
                    </p>
                </div>
                <div className="bg-red-100 p-15 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                    <p className="leading-relaxed">
                      To raise a generation of confident African tech creators who can
                      compete globally, build innovative solutions, and use technology to
                      transform communities.
                    </p>
                </div>
            </section>
              <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-red-500">Our Mission</h3>
            <p>
              To provide practical, affordable, and high‑quality tech education
              that prepares students for real jobs, freelancing opportunities,
              and entrepreneurship in the digital world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-red-500">Our Approach</h3>
            <p>
              Learning by doing. Every students works on real projects, builds a
              strong portfolio, and gains the confidence needed to succeed in
              the tech industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-red-500">Our Values</h3>
            <p>
              Excellence, integrity, consistency, and growth. We are committed
              to helping every learner become better than they were yesterday.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-500">
          Why Choose NasTech School?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Beginner‑friendly step‑by‑step teaching",
            "Real‑world projects and portfolio building",
            "Supportive learning environment",
            "Affordable and accessible tech education",
            "Career guidance and mentorship",
            "Focus on practical Web Development skills",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border p-6 rounded-xl shadow-lg hover:bg-red-500 transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Tech Journey Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join NasTech School and gain the skills you need to succeed in web development, freelancing and the global tech industry.
        </p>
        <Link                   
           href="/apply"
           className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-300 transition"
        >
            Apply Now
        </Link>
      </section>
    </main>
    )
}


