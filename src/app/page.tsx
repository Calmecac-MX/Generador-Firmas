'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { SignatureEditor } from '@/components/SignatureEditor';
import { SignaturePreview } from '@/components/SignaturePreview';
import { InstallationGuide } from '@/components/InstallationGuide';
import { DEFAULT_SIGNATURE_DATA, SignatureData } from '@/types/signature';
import { ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';

export default function Home() {
  const [signatureData, setSignatureData] = useState<SignatureData>(DEFAULT_SIGNATURE_DATA);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  const handlePresetSelect = (presetData: Partial<SignatureData>) => {
    setSignatureData((prev) => ({
      ...prev,
      ...presetData,
    }));
  };

  const handleResetData = () => {
    if (confirm('¿Deseas reiniciar los datos de la firma a los valores iniciales de Calmécac?')) {
      setSignatureData(DEFAULT_SIGNATURE_DATA);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-calmecac-dark text-white selection:bg-emerald-500 selection:text-black">
      {/* Navbar Header */}
      <Header
        onSelectPreset={handlePresetSelect}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Signature Editor (5 cols on lg) */}
        <div className="lg:col-span-5 h-[calc(100vh-130px)] min-h-[580px] flex flex-col space-y-2.5">
          <div className="flex items-center justify-between px-1 shrink-0">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Zap className="h-4 w-4" /> Editor de Firma
            </span>
            <button
              onClick={handleResetData}
              className="text-[11px] font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="h-3 w-3" /> Reiniciar
            </button>
          </div>
          <SignatureEditor data={signatureData} onChange={setSignatureData} />
        </div>

        {/* Right Column: Live Preview & Export Engine (7 cols on lg) */}
        <div className="lg:col-span-7 h-[calc(100vh-130px)] min-h-[580px] flex flex-col space-y-2.5">
          <div className="flex items-center justify-between px-1 shrink-0">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Layers className="h-4 w-4" /> Vista Previa Completa & Exportador
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Compatibilidad 100% Correo
            </span>
          </div>
          <SignaturePreview data={signatureData} onOpenGuide={() => setIsGuideOpen(true)} />
        </div>
      </main>

      {/* Simplified Footer: Only 'Desarrollado por Calmécac' */}
      <footer className="border-t border-calmecac-border/80 bg-zinc-950/90 py-3.5 px-6 mt-4 shrink-0">
        <p className="text-center font-mono text-xs text-zinc-400">
          Desarrollado por{' '}
          <a
            href="https://calmecac.lat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-bold hover:underline"
          >
            Calmécac
          </a>
        </p>
      </footer>

      {/* Installation Guide Modal */}
      <InstallationGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
}
