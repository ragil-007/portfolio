'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="space-y-6 max-w-md"
      >
        <div className="font-mono text-xs text-accent uppercase tracking-widest">
          [404] // PAGE NOT FOUND
        </div>
        <h1 className="text-4xl sm:text-5xl font-sans font-normal text-ink-primary tracking-tight">
          This route does not exist.
        </h1>
        <p className="text-ink-secondary text-sm sm:text-base">
          The requested resource could not be found. Please return to the main portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-primary text-canvas font-mono text-xs hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </motion.div>
    </div>
  );
}
