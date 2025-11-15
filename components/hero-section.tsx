"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const presaleEnd = new Date("2025-12-10T00:00:00Z");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = presaleEnd.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-linear-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-linear-to-tl from-violet-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-md"
        >
          <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            MAXZI — Web3 Token Launch
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          <span className="bg-linear-to-r from-indigo-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
            $MAX Token
          </span>
          <span className="block text-white mt-2">Next Generation Utility</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Join the exclusive presale and be part of the Web3 revolution. Secure
          your tokens early at discounted rates.
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 md:gap-6 pt-4"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-cyan-500/40 bg-white/5 backdrop-blur-md flex items-center justify-center glow-pulse">
                <span className="text-2xl md:text-3xl font-bold text-cyan-400">
                  {String(item.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm text-slate-400 mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold bg-linear-to-r from-indigo-500 via-violet-500 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300"
          >
            Connect Wallet
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold border-2 border-cyan-400/50 bg-white/5 backdrop-blur-md text-cyan-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Join Presale
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
