import React from 'react';
import { X } from 'lucide-react';

interface JokeModalProps {
  joke: string;
  onClose: () => void;
}

export function JokeModal({ joke, onClose }: JokeModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="text-6xl mb-4">😂</div>
          <p className="text-lg text-white leading-relaxed">{joke}</p>
        </div>
      </div>
    </div>
  );
}
