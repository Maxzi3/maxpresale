"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Target, Rocket, DollarSign, TrendingUp } from "lucide-react";

export default function PresaleInfoSection() {
  const [amount, setAmount] = useState("1");

  const stats = [
    {
      label: "Soft Cap",
      value: "1M USDT",
      icon: <Target className="w-6 h-6 text-cyan-400" />,
    },
    {
      label: "Hard Cap",
      value: "10M USDT",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    },
    {
      label: "Token Price",
      value: "$0.10",
      icon: <DollarSign className="w-6 h-6 text-cyan-400" />,
    },
    {
      label: "Sold",
      value: "65%",
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Presale Stats
            </span>
          </h2>
          <p className="text-slate-300 text-lg">
            Real-time presale metrics and performance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <p className="text-sm text-slate-400 mb-2">{stat.label}</p>
                <p className="text-2xl font-bold bg-linear-to-r from-indigo-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Presale Progress</h3>
            <span className="text-cyan-400 font-semibold">
              6,500,000 / 10,000,000 Tokens Sold
            </span>
          </div>
          <div className="h-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "65%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            />
          </div>
        </motion.div>

        {/* Buy Tokens Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-2xl border border-cyan-500/20 bg-linear-to-br from-white/8 to-white/5 backdrop-blur-md max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6">Purchase Tokens</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Enter Amount (USDT)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                />
                <span className="absolute right-4 top-3.5 text-slate-400">
                  USDT
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">You will receive:</span>
                <span className="text-cyan-400 font-semibold">
                  {(Number.parseFloat(amount) / 0.1).toFixed(0)} $MAX
                </span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Exchange rate:</span>
                <span>1 $MAX = $0.10</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg font-semibold bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
            >
              Buy Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
