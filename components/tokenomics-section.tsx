"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function TokenomicsSection() {
  const data = [
    { name: "Presale", value: 40, color: "#6366F1" },
    { name: "Team", value: 20, color: "#9333EA" },
    { name: "Liquidity", value: 15, color: "#22D3EE" },
    { name: "Marketing", value: 15, color: "#8B5CF6" },
    { name: "Staking Rewards", value: 10, color: "#06B6D4" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-[#22D3EE] via-[#6366F1] to-[#9333EA] bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-slate-300 text-lg">
            Strategic token distribution for sustainable growth
          </p>
        </motion.div>

        {/* Chart and Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Pie Chart */}
          <div className="flex justify-center">
            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  cornerRadius="50%"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    border: "1px solid rgba(34, 211, 238, 0.3)",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "#E2E8F0" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Distribution Details */}
          <div className="space-y-4">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-semibold text-white">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-cyan-400 font-bold">{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    style={{ backgroundColor: item.color }}
                    className="h-full shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-slate-300 max-w-2xl mx-auto"
        >
          Our tokenomics are designed to ensure long-term sustainability and
          community growth. The presale allocation allows early supporters to
          benefit while maintaining a healthy distribution for team development,
          market liquidity, and strategic marketing initiatives.
        </motion.p>
      </div>
    </section>
  );
}
