"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Sample preview from your CSV
const sampleData = [
  { TV: 230.1, Radio: 37.8, Newspaper: 69.2, Sales: 22.1 },
  { TV: 44.5, Radio: 39.3, Newspaper: 45.1, Sales: 10.4 },
  { TV: 17.2, Radio: 45.9, Newspaper: 69.3, Sales: 9.3 },
  { TV: 151.5, Radio: 41.3, Newspaper: 58.5, Sales: 18.5 },
  { TV: 180.8, Radio: 10.8, Newspaper: 58.4, Sales: 12.9 },
];

export default function DataPage() {
  return (
    <main
      className="min-h-screen px-6 py-16 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(239,246,255,0.95)), url('https://images.unsplash.com/photo-1581093588401-9ffb8f46b2c8?auto=format&fit=crop&q=80&w=1600')`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📁 Dataset Details
        </motion.h1>

        <Card className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">📊 Advertising Dataset</h2>
          <p className="text-gray-700 text-lg mb-4">
            This dataset contains historical advertising spend data and corresponding product sales, which is used to train ML models for predicting future sales.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
            <li><strong>TV</strong>: Advertisement spend on TV (USD)</li>
            <li><strong>Radio</strong>: Spend on Radio ads (USD)</li>
            <li><strong>Newspaper</strong>: Newspaper ad spend (USD)</li>
            <li><strong>Sales</strong>: Units sold</li>
          </ul>

          <a
            href="/data/advertising.csv"
            download
            className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            ⬇️ Download Full Dataset
          </a>
        </Card>

        <Card className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📌 Sample Data Preview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse text-sm text-left text-gray-700">
              <thead>
                <tr className="bg-indigo-100 text-gray-800">
                  <th className="p-3 border border-gray-300">TV</th>
                  <th className="p-3 border border-gray-300">Radio</th>
                  <th className="p-3 border border-gray-300">Newspaper</th>
                  <th className="p-3 border border-gray-300">Sales</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-indigo-50 transition"
                  >
                    <td className="p-3 border border-gray-200">{row.TV}</td>
                    <td className="p-3 border border-gray-200">{row.Radio}</td>
                    <td className="p-3 border border-gray-200">{row.Newspaper}</td>
                    <td className="p-3 border border-gray-200 font-semibold text-indigo-600">
                      {row.Sales}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </main>
  );
}
