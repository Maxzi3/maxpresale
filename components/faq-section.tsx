"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I participate in the presale?",
      answer:
        "To participate, connect your Web3 wallet, select the amount of tokens you want to purchase, and confirm the transaction. You'll receive your tokens immediately upon confirmation.",
    },
    {
      question: "When can I claim my tokens after the presale?",
      answer:
        "Tokens can be claimed immediately after the presale ends. We will provide detailed instructions on claiming, and all tokens will be automatically transferred to your connected wallet.",
    },
    {
      question: "What wallets are supported?",
      answer:
        "We support all major Web3 wallets including MetaMask, WalletConnect, Coinbase Wallet, Trust Wallet, and more. Simply click Connect Wallet to see all available options.",
    },
    {
      question: "Will there be staking rewards?",
      answer:
        "Yes! Once the token launches, we will introduce a staking protocol where holders can lock their tokens to earn rewards. Details will be shared closer to launch.",
    },
    {
      question: "What is the minimum purchase amount?",
      answer:
        "There is no minimum purchase amount. You can buy any amount of tokens, even fractions of $MAX tokens, depending on your budget.",
    },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-slate-300">
            Everything you need to know about our presale
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-white/10 bg-white/5 backdrop-blur-md rounded-lg overflow-hidden hover:border-cyan-500/30 transition-all"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-left font-semibold text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-cyan-400 shrink-0" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="h-0.5 bg-linear-to-r from-cyan-500/50 to-transparent mb-4" />
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
