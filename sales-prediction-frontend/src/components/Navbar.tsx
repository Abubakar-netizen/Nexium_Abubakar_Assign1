"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Predict", path: "/predict" },
  { name: "Models", path: "/models" },
  { name: "Dataset", path: "/data" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center bg-white/80 backdrop-blur-md shadow-md py-4 sticky top-0 z-50">
      <ul className="flex space-x-6 text-lg font-semibold text-gray-700">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <motion.span
                className={`hover:text-indigo-600 transition duration-300 ${
                  pathname === item.path ? "text-indigo-600 underline underline-offset-4" : ""
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
