"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "Contact", href: "/contact" },
  ];

const authLinks = [
  { name: "Login", href: "/auth/login" },
  { name: "Sign Up", href: "/auth/signup" },
  { name: "Forgot Password", href: "/auth/forgetpassword" },
  { name: "Reset Password", href: "/auth/resetpassword" },
];

  return (
    <nav className="w-full bg-red-400 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold text-gray-600 hover:text-red-900 transition-colors">
          Nas<span className="text-red-300">Tech School</span>
        </Link>

        <div className="hidden md:flex justify-center space-x-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-white hover:text-red-900">
              {link.name}
            </Link>
          ))}
        </div>

       <div className="flex justify-end items-center gap-2">

  <Link
    href="/auth/login"
    className="hidden md:inline-block px-4 py-2 text-white font-medium hover:text-red-900"
   >
    Login
  </Link>

  <Link
    href="/auth/signup"
    className="hidden md:inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-900"
  >
    Sign Up
  </Link>

  <Link
    href="/apply"
    className="hidden md:inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-900"
  >
    Apply Now
  </Link>

  <button
    className="md:hidden"
    onClick={() => setOpen(!open)}
    aria-label={open ? "Close menu" : "Open menu"}
  >
    {open ? <FiX size={26} /> : <FiMenu size={26} />}
  </button>

</div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium"
              >
                {link.name}
              </Link>
            ))}

            <hr />

            {authLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-red-600 font-semibold"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/apply"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-2 bg-red-600 text-white rounded"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
