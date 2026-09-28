import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16">
      <div className="w-full max-w-md">

        <h1 className="text-center text-3xl font-bold text-gray-800">
          Reset Password
        </h1>

        <p className="mt-3 text-center text-gray-600">
          Create a new password for your account.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-semibold text-gray-700"
            >
              New Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter new password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block font-semibold text-gray-700"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-600"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 cursor-pointer rounded-lg bg-red-600 px-5 py-3 font-bold text-white hover:bg-red-700"
          >
            Update Password
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="font-bold text-red-600 hover:underline"
          >
            Back to Login
          </Link>
        </p>

      </div>
    </main>
  );
}