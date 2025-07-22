"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";

const modelData = {
  xgboost: {
    accuracy: 0.94,
    mse: 1.23,
    time: "2.5s",
    chart: [
      { input: 10, prediction: 12 },
      { input: 20, prediction: 22 },
      { input: 30, prediction: 32 },
    ],
  },
  forest: {
    accuracy: 0.91,
    mse: 1.78,
    time: "3.2s",
    chart: [
      { input: 10, prediction: 11.5 },
      { input: 20, prediction: 21.2 },
      { input: 30, prediction: 30.9 },
    ],
  },
  linear: {
    accuracy: 0.87,
    mse: 2.12,
    time: "1.4s",
    chart: [
      { input: 10, prediction: 10.8 },
      { input: 20, prediction: 20.1 },
      { input: 30, prediction: 29.5 },
    ],
  },
};

export default function ModelsPage() {
  const [view, setView] = useState<"individual" | "compare">("individual");

  return (
    <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center text-indigo-700 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📊 Model Performance Overview
        </motion.h1>

        <div className="flex justify-center mb-8">
          <Button
            variant={view === "individual" ? "default" : "outline"}
            onClick={() => setView("individual")}
            className="mx-2"
          >
            Individual View
          </Button>
          <Button
            variant={view === "compare" ? "default" : "outline"}
            onClick={() => setView("compare")}
            className="mx-2"
          >
            Comparison View
          </Button>
        </div>

        {view === "individual" ? (
          <Tabs defaultValue="xgboost" className="space-y-8">
            <TabsList className="grid grid-cols-3 w-full max-w-xl mx-auto mb-6">
              <TabsTrigger value="xgboost">XGBoost</TabsTrigger>
              <TabsTrigger value="forest">Random Forest</TabsTrigger>
              <TabsTrigger value="linear">Linear Reg.</TabsTrigger>
            </TabsList>

            {Object.entries(modelData).map(([key, data]) => (
              <TabsContent value={key} key={key}>
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Card className="p-6 bg-white/90 rounded-xl shadow-xl space-y-4">
                    <h2 className="text-2xl font-semibold text-indigo-600">📈 Metrics</h2>
                    <motion.div
                      className="text-lg"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✅ Accuracy: <strong>{(data as any).accuracy * 100}%</strong>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} className="text-lg">
                      ❌ MSE: <strong>{(data as any).mse}</strong>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.03 }} className="text-lg">
                      ⏱️ Training Time: <strong>{(data as any).time}</strong>
                    </motion.div>
                  </Card>

                  <Card className="p-6 bg-white/90 rounded-xl shadow-xl">
                    <h2 className="text-xl font-semibold text-center text-gray-700 mb-2">
                      📊 Prediction Trend
                    </h2>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={(data as any).chart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="input" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="prediction"
                          stroke="#6366f1"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <Card className="p-8 bg-white/90 rounded-2xl shadow-xl mt-8">
            <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
              🔍 Model Comparison Chart
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="input" />
                <YAxis />
                <Tooltip />
                <Legend />
                {Object.entries(modelData).map(([key, data], idx) => (
                  <Line
                    key={key}
                    data={data.chart}
                    type="monotone"
                    dataKey="prediction"
                    name={key.toUpperCase()}
                    stroke={["#6366f1", "#10b981", "#f59e0b"][idx]}
                    strokeWidth={2}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </Card>
        )}
      </div>
    </main>
  );
}
