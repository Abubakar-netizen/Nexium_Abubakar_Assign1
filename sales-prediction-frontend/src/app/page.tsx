import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 space-y-6">
      <h1 className="text-5xl font-extrabold text-indigo-800 drop-shadow-xl">
        Welcome to Sales Prediction Wizard 🔮
      </h1>
      <p className="max-w-xl text-lg text-gray-700">
        Predict your future sales using machine learning models trained on real advertising data. Simple, fast, and powerful.
      </p>
      <Link href="/predict">
        <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 hover:scale-105 transition">
          Get Started →
        </Button>
      </Link>
    </div>
  );
}
