import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-md">

        <h1 className="text-center text-3xl font-bold text-gray-800">
          Create an Account
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Sign up for your NasTech School account.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label
              htmlFor="fullname"
              className="mb-2 block font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-semibold text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full mt -4 cursor-pointer rounded-lg bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700"
          >
            Sign Up
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-bold text-red-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}