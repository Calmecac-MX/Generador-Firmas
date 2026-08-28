'use client';

import React, { useState, useRef } from 'react';
import {
  Copy,
  Code,
  FileImage,
  FileText,
  Check,
  Eye,
  Mail,
  Monitor,
  Smartphone,
  Sun,
  Moon,
  ShieldCheck,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { SignatureData, EmailClient } from '@/types/signature';
import { generateEmailHtml } from '@/utils/emailHtmlGenerator';
import {
  copySignatureRichText,
  copySignatureHtmlCode,
  exportToPng,
  exportToJpg,
  exportToPdf,
} from '@/utils/exportSignature';

interface SignaturePreviewProps {
  data: SignatureData;
  onOpenGuide: () => void;
}

export const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data, onOpenGuide }) => {
  const [selectedClient, setSelectedClient] = useState<EmailClient>('all');
  const [isDarkModePreview, setIsDarkModePreview] = useState<boolean>(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'rich' | 'html' | 'png' | 'jpg' | 'pdf'>('idle');
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const previewRef = useRef<HTMLDivElement>(null);
  const generatedHtml = generateEmailHtml(data);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 3800);
  };

  const handleCopyRichText = async () => {
    if (copyStatus !== 'idle') return;
    setCopyStatus('rich');
    try {
      const success = await copySignatureRichText(generatedHtml);
      if (success) {
        showToast('¡Firma copiada! Pégala directamente en Gmail u Outlook con Ctrl+V / Cmd+V.');
      } else {
        showToast('No se pudo copiar en formato Rich Text. Usa la opción "Copiar Código HTML".', 'error');
      }
    } catch (err) {
      console.error('Copy Rich Text Error:', err);
      showToast('Error al copiar firma.', 'error');
    } finally {
      setCopyStatus('idle');
    }
  };

  const handleCopyHtmlCode = async () => {
    if (copyStatus !== 'idle') return;
    setCopyStatus('html');
    try {
      const success = await copySignatureHtmlCode(generatedHtml);
      if (success) {
        showToast('¡Código HTML copiado al portapapeles!');
      } else {
        showToast('Error al copiar código HTML.', 'error');
      }
    } catch (err) {
      console.error('Copy HTML Error:', err);
      showToast('Error al copiar código HTML.', 'error');
    } finally {
      setCopyStatus('idle');
    }
  };

  const handleExportPng = async () => {
    if (copyStatus !== 'idle' || !previewRef.current) return;
    setCopyStatus('png');
    try {
      const success = await exportToPng(previewRef.current, `firma-calmecac-${data.fullName.toLowerCase().replace(/\s+/g, '-') || 'firma'}.png`);
      if (success) {
        showToast('¡Imagen PNG descargada con éxito!');
      } else {
        showToast('No se pudo procesar la imagen PNG. Intenta "Copiar Código HTML".', 'error');
      }
    } catch (err) {
      console.error('Export PNG Error:', err);
      showToast('Error al exportar PNG.', 'error');
    } finally {
      setCopyStatus('idle');
    }
  };

  const handleExportJpg = async () => {
    if (copyStatus !== 'idle' || !previewRef.current) return;
    setCopyStatus('jpg');
    try {
      const success = await exportToJpg(previewRef.current, `firma-calmecac-${data.fullName.toLowerCase().replace(/\s+/g, '-') || 'firma'}.jpg`);
      if (success) {
        showToast('¡Imagen JPG descargada con éxito!');
      } else {
        showToast('No se pudo procesar la imagen JPG. Intenta "Copiar Código HTML".', 'error');
      }
    } catch (err) {
      console.error('Export JPG Error:', err);
      showToast('Error al exportar JPG.', 'error');
    } finally {
      setCopyStatus('idle');
    }
  };

  const handleExportPdf = async () => {
    if (copyStatus !== 'idle' || !previewRef.current) return;
    setCopyStatus('pdf');
    try {
      const success = await exportToPdf(previewRef.current, `firma-calmecac-${data.fullName.toLowerCase().replace(/\s+/g, '-') || 'firma'}.pdf`);
      if (success) {
        showToast('¡Documento PDF generado y descargado!');
      } else {
        showToast('No se pudo procesar el PDF. Intenta "Copiar Código HTML".', 'error');
      }
    } catch (err) {
      console.error('Export PDF Error:', err);
      showToast('Error al exportar PDF.', 'error');
    } finally {
      setCopyStatus('idle');
    }
  };

  return (
    <div className="flex flex-col h-full bg-calmecac-card border border-calmecac-border rounded-xl overflow-hidden shadow-glass relative">
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div
          className={`absolute top-16 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2 px-4 py-2.5 rounded-lg shadow-glow font-mono text-xs font-bold animate-bounce ${
            toastMessage.type === 'error'
              ? 'bg-red-600 text-white'
              : 'bg-emerald-500 text-black'
          }`}
        >
          {toastMessage.type === 'error' ? (
            <AlertCircle className="h-4 w-4 text-white" />
          ) : (
            <Sparkles className="h-4 w-4 text-black fill-black" />
          )}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Emulator Client Tabs Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-calmecac-border bg-zinc-950/80 px-4 py-2.5 gap-2 shrink-0">
        <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedClient('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center space-x-1.5 ${
              selectedClient === 'all'
                ? 'bg-emerald-500 text-black shadow-glow'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Vista Completa</span>
          </button>

          <button
            onClick={() => setSelectedClient('gmail')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center space-x-1.5 ${
              selectedClient === 'gmail'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Mail className="h-3.5 w-3.5 text-red-300" />
            <span>Gmail</span>
          </button>

          <button
            onClick={() => setSelectedClient('outlook')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center space-x-1.5 ${
              selectedClient === 'outlook'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Monitor className="h-3.5 w-3.5 text-blue-300" />
            <span>Outlook</span>
          </button>

          <button
            onClick={() => setSelectedClient('spacemail')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center space-x-1.5 ${
              selectedClient === 'spacemail'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            <span>SpaceMail</span>
          </button>

          <button
            onClick={() => setSelectedClient('apple')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center space-x-1.5 ${
              selectedClient === 'apple'
                ? 'bg-zinc-700 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Smartphone className="h-3.5 w-3.5 text-zinc-300" />
            <span>Apple Mail</span>
          </button>
        </div>

        {/* Light/Dark Preview Mode Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsDarkModePreview(!isDarkModePreview)}
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded border border-calmecac-border bg-zinc-900 text-xs font-mono text-zinc-300 hover:border-zinc-500"
            title="Probar fondo de correo oscuro/claro"
          >
            {isDarkModePreview ? (
              <>
                <Moon className="h-3.5 w-3.5 text-emerald-400" />
                <span>Fondo Oscuro</span>
              </>
            ) : (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span>Fondo Claro</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Live Preview Canvas */}
      <div
        className={`flex-1 p-4 sm:p-5 overflow-y-auto flex flex-col items-center justify-start transition-colors custom-scrollbar ${
          isDarkModePreview ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-900'
        }`}
      >
        {/* Email Client Emulator Container Wrapper */}
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-zinc-200 text-zinc-900 text-left my-2 shrink-0">
          {/* Gmail Window Chrome */}
          {selectedClient === 'gmail' && (
            <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2 flex items-center justify-between text-xs text-zinc-600 font-sans rounded-t-xl">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-red-600">Gmail</span>
                <span className="text-zinc-400">|</span>
                <span>Mensaje Nuevo</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-400">Para: destinatario@cliente.com</div>
            </div>
          )}

          {/* Outlook Window Chrome */}
          {selectedClient === 'outlook' && (
            <div className="bg-blue-900 text-white px-4 py-2 flex items-center justify-between text-xs font-sans rounded-t-xl">
              <div className="flex items-center space-x-2">
                <span className="font-bold">Outlook Web</span>
                <span className="text-blue-300">|</span>
                <span>Vista Previa</span>
              </div>
              <div className="text-[11px] font-mono text-blue-200">SpaceMail API Verified</div>
            </div>
          )}

          {/* SpaceMail Chrome */}
          {selectedClient === 'spacemail' && (
            <div className="bg-emerald-950 text-emerald-100 px-4 py-2 flex items-center justify-between text-xs font-mono rounded-t-xl">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-emerald-400">[SPACEMAIL CLIENT]</span>
                <span>Secure SMTP</span>
              </div>
              <div className="text-[10px] text-emerald-400 font-bold">100% BULLETPROOF HTML</div>
            </div>
          )}

          {/* Apple Mail Chrome */}
          {selectedClient === 'apple' && (
            <div className="bg-zinc-200 border-b border-zinc-300 px-4 py-1.5 flex items-center space-x-2 rounded-t-xl">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-semibold text-zinc-700 pl-2">Apple Mail — macOS / iOS</span>
            </div>
          )}

          {/* Email Body Content */}
          <div className="p-4 sm:p-5 bg-white space-y-3 rounded-b-xl">
            {/* Compact Dummy Email Text */}
            <div className="text-xs text-zinc-500 space-y-0.5 font-sans border-b border-zinc-100 pb-2">
              <p>Hola, adjunto la propuesta de estructura operativa que revisamos. Saludos cordiales.</p>
            </div>

            {/* Target Export Element Ref */}
            <div ref={previewRef} className="p-1 block w-full bg-white rounded overflow-x-auto no-scrollbar">
              <div dangerouslySetInnerHTML={{ __html: generatedHtml }} />
            </div>
          </div>
        </div>

        <div className="my-2 flex items-center space-x-1.5 text-xs text-zinc-400 font-mono shrink-0">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span>Firma completa 100% visible sin recortes &bull; HTML puro basado en tablas</span>
        </div>
      </div>

      {/* Export & Copy Toolbar Bottom Bar */}
      <div className="border-t border-calmecac-border bg-zinc-950 p-3.5 space-y-2.5 shrink-0">
        {/* Primary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Copy Rich Text Button */}
          <button
            onClick={handleCopyRichText}
            disabled={copyStatus !== 'idle'}
            className="flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2.5 text-xs font-extrabold text-black shadow-glow hover:opacity-95 transition-all cursor-pointer disabled:opacity-50"
          >
            {copyStatus === 'rich' ? (
              <Check className="h-4 w-4 text-black animate-bounce" />
            ) : (
              <Copy className="h-4 w-4 text-black" />
            )}
            <span>{copyStatus === 'rich' ? 'Copiando...' : 'Copiar Firma para Correo (Rich Text)'}</span>
          </button>

          {/* Copy Raw HTML Code */}
          <button
            onClick={handleCopyHtmlCode}
            disabled={copyStatus !== 'idle'}
            className="flex items-center justify-center space-x-2 rounded-lg border border-calmecac-border bg-zinc-900 px-4 py-2.5 text-xs font-bold text-zinc-200 hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer disabled:opacity-50"
          >
            {copyStatus === 'html' ? (
              <Check className="h-4 w-4 text-emerald-400" />
            ) : (
              <Code className="h-4 w-4 text-emerald-400" />
            )}
            <span>{copyStatus === 'html' ? 'Copiando...' : 'Copiar Código HTML'}</span>
          </button>
        </div>

        {/* Export Files Bar (PNG, JPG, PDF) */}
        <div className="flex flex-wrap items-center justify-between pt-2 border-t border-zinc-900 gap-2">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            Exportar Archivo:
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleExportPng}
              disabled={copyStatus !== 'idle'}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-calmecac-border bg-zinc-900/80 text-xs font-mono font-medium text-zinc-300 hover:border-emerald-500 hover:text-white transition-all disabled:opacity-50"
            >
              <FileImage className="h-3.5 w-3.5 text-emerald-400" />
              <span>{copyStatus === 'png' ? 'Generando...' : 'PNG'}</span>
            </button>

            <button
              onClick={handleExportJpg}
              disabled={copyStatus !== 'idle'}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-calmecac-border bg-zinc-900/80 text-xs font-mono font-medium text-zinc-300 hover:border-emerald-500 hover:text-white transition-all disabled:opacity-50"
            >
              <FileImage className="h-3.5 w-3.5 text-emerald-400" />
              <span>{copyStatus === 'jpg' ? 'Generando...' : 'JPG'}</span>
            </button>

            <button
              onClick={handleExportPdf}
              disabled={copyStatus !== 'idle'}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded border border-calmecac-border bg-zinc-900/80 text-xs font-mono font-medium text-zinc-300 hover:border-emerald-500 hover:text-white transition-all disabled:opacity-50"
            >
              <FileText className="h-3.5 w-3.5 text-emerald-400" />
              <span>{copyStatus === 'pdf' ? 'Generando...' : 'PDF'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
