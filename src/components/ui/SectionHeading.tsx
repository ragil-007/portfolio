'use client';

import React from 'react';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
      }`}
    >
      <div
        className={`flex items-center gap-3 text-xs md:text-sm font-mono text-ink-muted uppercase tracking-widest mb-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="text-accent font-semibold">[{number}]</span>
        <span className="w-1.5 h-1.5 rounded-full bg-rule-medium" />
        <span>{tag}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-ink-primary font-sans leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
      <div className="w-full h-px bg-rule-subtle mt-8" />
    </div>
  );
}
