"use client";

import { useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function PredictForm() {
  const [form, setForm] = useState({ tv: 0, radio: 0, newspaper: 0, model_type: "xgboost" });
  const [result, setResult] = useState<number | null>(null);
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [key]: key === "model_type" ? value : parseFloat(value as string) }));
  };

  const predict = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", form);
      setResult(res.data.predicted_sales);
      setChartData((prev) => [...prev, { ...form, prediction: res.data.predicted_sales }]);
    } catch (err) {
      alert("Prediction failed. Is FastAPI running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-500 to-purple-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="w-full max-w-xl p-8 space-y-6 bg-white/80 backdrop-blur-md shadow-xl rounded-xl">
        <motion.h2 className="text-3xl font-bold text-center text-blue-700" whileHover={{ scale: 1.05 }}>
          🚀 Sales Prediction Dashboard
        </motion.h2>

        {["tv", "radio", "newspaper"].map((field) => (
          <div key={field}>
            <label className="text-sm text-gray-600 capitalize">{field} Spend</label>
            <Input
              type="number"
              value={form[field as keyof typeof form]}
              onChange={(e) => handleChange(field, e.target.value)}
              className="mt-1"
            />
          </div>
        ))}

        <div>
          <label className="text-sm text-gray-600">Select Model</label>
          <Select value={form.model_type} onValueChange={(value) => handleChange("model_type", value)}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Model Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="xgboost">XGBoost</SelectItem>
              <SelectItem value="forest">Random Forest</SelectItem>
              <SelectItem value="linear">Linear Regression</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={predict} className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-indigo-500 transition">
          {loading ? "Predicting..." : "Predict Sales"}
        </Button>

        {result !== null && (
          <motion.div className="text-center mt-4 text-xl font-semibold text-green-700" initial={{ scale: 0 }} animate={{ scale: 1 }}>
            📈 Predicted Sales: {result.toFixed(2)}
          </motion.div>
        )}

        {chartData.length > 0 && (
          <div className="mt-8">
            <h3 className="text-lg font-bold text-center mb-2 text-gray-700">📊 Prediction History</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tv" label={{ value: "TV", position: "insideBottom", offset: -5 }} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="prediction" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
