'use client';

import React from 'react';
import { Flame, Sparkles, HelpCircle } from 'lucide-react';
import { CALMECAC_PRESETS, SignatureData } from '@/types/signature';

interface HeaderProps {
  onSelectPreset: (presetData: Partial<SignatureData>) => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectPreset, onOpenGuide }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-calmecac-border bg-calmecac-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 font-mono font-black text-black shadow-glow">
            <Flame className="h-6 w-6 text-black fill-black" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
                CALMÉCAC
              </span>
              <span className="hidden rounded bg-emerald-950/80 px-1.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300 border border-emerald-500/30 sm:inline-block">
                [ESMERALDA TECH]
              </span>
            </div>
            <h1 className="text-base font-extrabold tracking-tight text-white sm:text-lg">
              Generador de Firmas de Correo
            </h1>
          </div>
        </div>

        {/* Action Controls & Presets */}
        <div className="flex items-center space-x-3">
          {/* Preset Selector Dropdown */}
          <div className="hidden md:flex items-center space-x-2 bg-calmecac-card border border-calmecac-border rounded-lg px-2.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-mono text-zinc-400">Presets:</span>
            <select
              className="bg-transparent text-xs text-white font-medium focus:outline-none cursor-pointer"
              onChange={(e) => {
                const presetIndex = parseInt(e.target.value);
                if (!isNaN(presetIndex) && CALMECAC_PRESETS[presetIndex]) {
                  onSelectPreset(CALMECAC_PRESETS[presetIndex].data);
                }
              }}
              defaultValue=""
            >
              <option value="" disabled>Cargar Preset...</option>
              {CALMECAC_PRESETS.map((preset, idx) => (
                <option key={idx} value={idx} className="bg-zinc-900 text-white">
                  {preset.name}
                </option>
              ))}
            </select>
          </div>

          {/* Guía de Instalación Button */}
          <button
            onClick={onOpenGuide}
            className="flex items-center space-x-1.5 rounded-lg border border-calmecac-border bg-calmecac-card px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:border-emerald-500 hover:text-emerald-400 transition-all shadow-sm"
          >
            <HelpCircle className="h-4 w-4 text-emerald-400" />
            <span>Guía de Instalación</span>
          </button>

          {/* Calmécac Web Link */}
          <a
            href="https://calmecac.lat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 text-xs font-mono font-bold text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
          >
            <span>calmecac.lat &rarr;</span>
          </a>
        </div>
      </div>
    </header>
  );
};
