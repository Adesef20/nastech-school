"use client";
import Link from "next/link";

const Footer = () => {
    
  return (
    <footer className="bg-red-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="text-xl font-bold text-gray-600 hover:text-red-900 transition-colors">
            Nas<span className="text-red-300">Tech School</span>
          </Link>
          <p className="text-gray-100">
            Empowering students with modern tech skills and preparing them for the future.
          </p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/." className="hover:text-red-200 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-red-200 transition-colors">About</a></li>
            <li><Link href="/courses" className="hover:text-red-200 transition-colors">Courses</Link></li>
            <li><a href="/admissions" className="hover:text-red-200 transition-colors">Admissions</a></li>
            <li><a href="/contact" className="hover:text-red-200 transition-colors">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-100">Email: info@nastechschool.com</p>
          <p className="text-gray-100">Phone: +1 234 7039406230</p>
          <p className="text-gray-100">Address: 1, Wole-Ola Compd Ogo-Oluwa Oshogbo, Osun Stae</p>

          
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-200 transition-colors">Facebook</a>
            <a href="#" className="hover:text-red-200 transition-colors">Twitter</a>
            <a href="#" className="hover:text-red-200 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-red-200 transition-colors">Instagram</a>
          </div>
        </div>

      </div>

      
      <div className="bg-red-500 text-gray-100 text-center py-4 mt-4">
        &copy; {new Date().getFullYear()} NasTech School. All rights reserved by <span className="text-gray-300 hover:text-blue-500">ShyNaDev</span>.
      </div>
    </footer>
  );
};

export default Footer;

