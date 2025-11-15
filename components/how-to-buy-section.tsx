"use client";

import { motion } from "framer-motion";
import { Wallet, DollarSign, CheckCircle } from "lucide-react";

export default function HowToBuySection() {
  const steps = [
    {
      number: 1,
      title: "Connect Your Wallet",
      description:
        "Link your Web3 wallet (MetaMask, WalletConnect, etc.) to get started.",
      icon: Wallet,
    },
    {
      number: 2,
      title: "Enter Amount to Buy",
      description:
        "Specify how many tokens you want to purchase in the presale.",
      icon: DollarSign,
    },
    {
      number: 3,
      title: "Confirm Transaction",
      description:
        "Review and approve the transaction in your wallet to complete your purchase.",
      icon: CheckCircle,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              How to Buy
            </span>
          </h2>
          <p className="text-slate-300 text-lg">
            3 Simple Steps to Secure Your Tokens
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] h-full">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 text-white font-bold text-lg mb-4 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 text-4xl text-violet-400">
                    <Icon className="w-10 h-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow to next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-linear-to-r from-violet-500 to-transparent" />
                      <div className="w-2 h-2 rounded-full bg-violet-500 absolute -right-1 -top-0.75" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
