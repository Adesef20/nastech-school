"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    state: "",
    course: "",
    learning_mode: "",
    experience: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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

    const { error } = await supabase
      .from("application")
      .insert([formData]);

    if (error) {
      console.error("Supabase Error:", error);
      alert("Failed to submit application: " + error.message);
      setLoading(false);
      return;
    }

    alert("Application submitted successfully!");

    setFormData({
      fullname: "",
      email: "",
      phone: "",
      state: "",
      course: "",
      learning_mode: "",
      experience: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <main className="min-h-screen gap-6 bg-white text-gray-800">

      {/* Hero Section */}
      <section className="text-black px-6 py-20 text-center">
        <h1 className="text-4xl text-red-400 md:text-5xl font-bold mb-4 mt-10">
          Apply to NasTech School
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Join our community of aspiring web developers and take the
          first step towards a rewarding career in technology. Fill out
          the application form below to get started.
        </p>
      </section>

      {/* Application Form */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-red-500">
            Application Form
          </h2>

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* State */}
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>

            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Course */}
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-sm font-medium text-gray-700"
            >
              Select Course
            </label>

            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">Select a course</option>
              <option value="Web Development">
                Web Development
              </option>
              <option value="Data Science">
                Data Science
              </option>
              <option value="UI/UX Design">
                UI/UX Design
              </option>
              <option value="Cyber Security">
                Cyber Security
              </option>
            </select>
          </div>

          {/* Learning Mode */}
          <div className="mb-4">
            <label
              htmlFor="learning_mode"
              className="block text-sm font-medium text-gray-700"
            >
              Learning Mode
            </label>

            <select
              id="learning_mode"
              name="learning_mode"
              value={formData.learning_mode}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">Select learning mode</option>
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience Level
            </label>

            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            >
              <option value="">Select your experience level</option>
              <option value="No Experience">
                No Experience
              </option>
              <option value="Beginner">
                Beginner
              </option>
              <option value="Intermediate">
                Intermediate
              </option>
              <option value="Advanced">
                Advanced
              </option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Goals
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your goals and what you hope to achieve by joining NasTech School."
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </section>
    </main>
  );
}