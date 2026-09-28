
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setErrorMessage("");

    const { error } = await supabase
      .from("contact")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

    if (error) {
  console.error("Contact form error:", error);
  console.error("Error message:", error.message);
  console.error("Error details:", error.details);
  console.error("Error hint:", error.hint);
  console.error("Error code:", error.code);

  setErrorMessage(
    error.message || "Something went wrong while sending your message."
  );

  setLoading(false);
  return;
}
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <main className="min-h-screen w-full bg-white text-gray-800">

      <section className="relative overflow-hidden bg-gray-50 px-6 pt-32 pb-24 text-center">

        
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-red-100 opacity-60 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-red-100 opacity-60 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mt-10">
            Contact{" "}
            <span className="text-red-500">
              NasTech School
            </span>
          </h1>

          <p className="mt-7 text-2xl md:text-xl leading-relaxed text-gray-600">
            Have a question about our courses, admissions, or learning
            programs? We&apos;re here to help you take the next step
            toward your technology career.
          </p>

        </div>
      </section>


      <section className="px-6 py-20">

        <div className="max-w-6xl mx-auto">

          
          <div className="text-center mb-12">

            <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-red-500" />

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              We&apos;re Here to Help
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
              Reach out to us through any of the channels below.
              Our team is ready to answer your questions.
            </p>

          </div>


          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Email */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl transition group-hover:bg-red-500">
                <span className="group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  📧
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Email Us
              </h3>

              <p className="mt-2 text-gray-600 wrap-break-word">
                info@nastechschool.com
              </p>

            </div>


            
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl transition group-hover:bg-red-500">
                <span className="group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  📞
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Call Us
              </h3>

              <p className="mt-2 text-gray-600">
                +234 7069 000 550
              </p>

            </div>


            
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl transition group-hover:bg-red-500">
                <span className="group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  📍
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Visit Us
              </h3>

              <p className="mt-2 text-gray-600">
                Lagos, Nigeria
              </p>

            </div>


            
            <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl transition group-hover:bg-red-500">
                <span className="group-hover:grayscale group-hover:brightness-0 group-hover:invert">
                  🕐
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Office Hours
              </h3>

              <p className="mt-2 text-gray-600">
                Mon - Fri
              </p>

              <p className="text-sm text-gray-500">
                9:00 AM - 5:00 PM
              </p>

            </div>

          </div>

        </div>

      </section>


      
      <section className="bg-gray-50 px-6 py-24">

        <div className="max-w-4xl mx-auto">

          
          <div className="text-center mb-12">

            <p className="mb-3 text-4xl font-bold uppercase tracking-[0.25em] text-red-500">
              Student Inquiry
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Have a Question?
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
              Send us a message and our team will get back to you.
              Whether you want to know more about our courses,
              admissions, or learning options, we&apos;re happy to help.
            </p>

          </div>


         ```tsx
<div className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4 py-10">
  <div className="w-full max-w-4xl rounded-2xl bg-white p-6 md:p-10 shadow-2xl border border-gray-100">

    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 placeholder-gray-400 outline-none transition duration-200 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>


        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 placeholder-gray-400 outline-none transition duration-200 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

      </div>


      {/* Phone & Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Phone Number
          </label>

          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 placeholder-gray-400 outline-none transition duration-200 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>


        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What can we help you with?"
            required
            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 placeholder-gray-400 outline-none transition duration-200 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
          />
        </div>

      </div>


      {/* Message */}
      <div>

        <label
          htmlFor="message"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Your Message
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={7}
          placeholder="Write your message here..."
          required
          className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3.5 text-gray-800 placeholder-gray-400 outline-none transition duration-200 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
        />

      </div>


      {/* Success Message */}
      {success && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-5 py-4 text-green-700">
          <p className="font-medium">
            ✓ {success}
          </p>
        </div>
      )}


      {/* Error Message */}
      {errorMessage && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-red-600">
          <p className="font-medium">
            {errorMessage}
          </p>
        </div>
      )}


      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="group w-full rounded-lg bg-red-500 px-6 py-4 font-bold text-white shadow-lg shadow-red-200 transition duration-300 hover:bg-red-700 hover:shadow-xl active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none"
      >
        {loading ? (
          "Sending Message..."
        ) : (
          <span className="flex items-center justify-center gap-2">
            Send Message

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        )}
      </button>

    </form>

  </div>
</div>
</div>


      </section>
    </main>
  );
}
