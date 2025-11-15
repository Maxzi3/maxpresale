"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Globe, Zap } from "lucide-react";

export default function RoadmapSection() {
  const phases = [
    {
      quarter: "Q1 2026",
      title: "Foundation",
      goals: ["Token Launch", "Community Building", "Exchange Listings"],
      color: "from-indigo-500 to-violet-500",
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    },
    {
      quarter: "Q2 2026",
      title: "Growth",
      goals: [
        "DEX Integration",
        "Marketing Campaign",
        "Strategic Partnerships",
      ],
      color: "from-violet-500 to-cyan-500",
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
    },
    {
      quarter: "Q3 2026",
      title: "Expansion",
      goals: ["Governance Launch", "Cross-Chain Bridge", "Ecosystem Apps"],
      color: "from-cyan-500 to-indigo-500",
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
    },
    {
      quarter: "Q4 2026",
      title: "Innovation",
      goals: ["Advanced Features", "Staking Protocol", "Community DAO"],
      color: "from-indigo-500 to-cyan-500",
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-linear-to-t from-indigo-500/10 to-transparent blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              2026 Roadmap
            </span>
          </h2>
          <p className="text-slate-300 text-lg">
            Our vision for building the future of Web3
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, rotateZ: 1 }}
              className="group relative"
            >
              <div
                className={`p-6 rounded-2xl border border-white/10 bg-linear-to-br ${
                  phase.color.split(" ")[0]
                } ${
                  phase.color.split(" ")[1]
                }/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)]`}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{phase.icon}</div>

                {/* Quarter */}
                <p className="text-sm font-semibold text-cyan-400 mb-1">
                  {phase.quarter}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {phase.title}
                </h3>

                {/* Goals */}
                <ul className="space-y-2">
                  {phase.goals.map((goal, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="text-cyan-400 mt-1">→</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linear-to-br ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
