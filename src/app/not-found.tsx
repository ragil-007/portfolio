import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center px-4 text-center">
      <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
        [404] // PAGE NOT FOUND
      </div>
      <h1 className="text-4xl sm:text-5xl font-sans font-normal text-ink-primary tracking-tight mb-4">
        This route does not exist.
      </h1>
      <p className="text-ink-secondary text-sm sm:text-base max-w-md mb-8">
        The requested resource could not be found. Please return to the main portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-primary text-canvas font-mono text-xs hover:bg-accent transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </div>
  );
}
