"use client";

import { motion } from "framer-motion";
import { Twitter, MessageCircle, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const contractAddress = "0x1234567890123456789012345678901234567890";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, url: "https://x.com/dev_maxzi" },
    { name: "Telegram", icon: MessageCircle, url: "https://t.me/dev_maxzi" },
    { name: "GitHub", icon: Github, url: "https://github.com/Maxzi3" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-linear-to-r from-violet-500/5 via-indigo-500/5 to-cyan-500/5 backdrop-blur-md overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                MAXZI
              </h3>
              <p className="text-slate-400 text-sm">
                The future of Web3 utility tokens
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:border-cyan-500/50 hover:bg-white/10 transition-all"
                    title={link.name}
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-right"
            >
              <p className="text-slate-400 text-sm space-y-1">
                <a
                  href="#"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  Whitepaper
                </a>
                <a
                  href="#"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="block hover:text-cyan-400 transition-colors"
                >
                  Privacy
                </a>
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-0.5 bg-lineart-to-r from-transparent via-cyan-500/30 to-transparent" />

          {/* Middle Section - Smart Contract */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-lg border border-cyan-500/20 bg-white/5 backdrop-blur-md"
          >
            <div className="text-center md:text-left flex-1">
              <p className="text-xs text-slate-400 mb-1">Contract Address</p>
              <p className="font-mono text-sm text-cyan-400">
                {contractAddress}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400">Copy</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400 pt-4"
          >
            <p>© 2025 MAXZI. All rights reserved.</p>
            <p>Built  by Maxwell</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
