'use client';

import React, { useState } from 'react';
import { X, Mail, Monitor, Sparkles, Smartphone, CheckCircle2, Copy } from 'lucide-react';

interface InstallationGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ isOpen, onClose }) => {
  const [activeClient, setActiveClient] = useState<'gmail' | 'outlook' | 'spacemail' | 'apple'>('gmail');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-calmecac-card border border-calmecac-border rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-calmecac-border bg-zinc-950 p-5">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-calmecac-orange animate-pulse" />
            <h2 className="text-base font-extrabold text-white">Guía de Instalación por Cliente de Correo</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-calmecac-border bg-zinc-900/50">
          <button
            onClick={() => setActiveClient('gmail')}
            className={`py-3 px-4 text-xs font-bold transition-all flex items-center justify-center space-x-2 border-b-2 ${
              activeClient === 'gmail'
                ? 'border-red-500 text-red-400 bg-red-500/10'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Mail className="h-4 w-4 text-red-500" />
            <span>Gmail</span>
          </button>

          <button
            onClick={() => setActiveClient('outlook')}
            className={`py-3 px-4 text-xs font-bold transition-all flex items-center justify-center space-x-2 border-b-2 ${
              activeClient === 'outlook'
                ? 'border-blue-500 text-blue-400 bg-blue-500/10'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Monitor className="h-4 w-4 text-blue-500" />
            <span>Outlook</span>
          </button>

          <button
            onClick={() => setActiveClient('spacemail')}
            className={`py-3 px-4 text-xs font-bold transition-all flex items-center justify-center space-x-2 border-b-2 ${
              activeClient === 'spacemail'
                ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-4 w-4 text-emerald-500" />
            <span>SpaceMail</span>
          </button>

          <button
            onClick={() => setActiveClient('apple')}
            className={`py-3 px-4 text-xs font-bold transition-all flex items-center justify-center space-x-2 border-b-2 ${
              activeClient === 'apple'
                ? 'border-zinc-400 text-white bg-zinc-800'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Smartphone className="h-4 w-4 text-zinc-300" />
            <span>Apple Mail</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* GMAIL GUIDE */}
          {activeClient === 'gmail' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-400 font-mono text-xs font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>INSTALACIÓN EN GMAIL (WEB & APP)</span>
              </div>
              <ol className="space-y-3 text-xs text-zinc-300 list-decimal list-inside leading-relaxed">
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Haz clic en el botón <strong className="text-calmecac-orange">"Copiar Firma para Correo (Rich Text)"</strong> en el panel de vista previa.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Abre tu cuenta de <strong>Gmail</strong> y haz clic en el icono de engranaje <strong className="text-white">⚙ (Configuración)</strong> &gt; <strong>Ver todos los ajustes</strong>.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  En la pestaña <strong>General</strong>, desplázate hacia abajo hasta la sección <strong>"Firma"</strong> y haz clic en <em>+ Crear nueva</em>.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Haz clic dentro del recuadro de edición de la firma y presiona <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700 text-white">Ctrl + V</kbd> (o <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded border border-zinc-700 text-white">Cmd + V</kbd> en Mac). La firma aparecerá formateada con imágenes y estilos intactos.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  En <strong>Valores predeterminados de firma</strong>, selecciona tu nueva firma para correos nuevos y respuestas, y haz clic en <strong>Guardar cambios</strong> al final de la página.
                </li>
              </ol>
            </div>
          )}

          {/* OUTLOOK GUIDE */}
          {activeClient === 'outlook' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>INSTALACIÓN EN OUTLOOK (WEB & DESKTOP)</span>
              </div>
              <ol className="space-y-3 text-xs text-zinc-300 list-decimal list-inside leading-relaxed">
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Haz clic en <strong className="text-calmecac-orange">"Copiar Firma para Correo (Rich Text)"</strong>.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  En <strong>Outlook Web</strong>: Ve a ⚙ <em>Ajustes &gt; Correo &gt; Redactar y responder &gt; Firma de correo electrónico</em>.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  En <strong>Outlook Desktop (Windows/Mac)</strong>: Abre <em>Archivo &gt; Opciones &gt; Correo &gt; Firmas...</em> (o <em>Outlook &gt; Preferencias &gt; Firmas</em> en Mac).
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Crea una nueva firma, pega el contenido con <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-white">Ctrl + V</kbd> y selecciona la opción de pegado <em className="text-amber-400">"Conservar formato de origen"</em> si aparece el cuadro emergente.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Guarda la firma y selecciónala como predeterminada.
                </li>
              </ol>
            </div>
          )}

          {/* SPACEMAIL GUIDE */}
          {activeClient === 'spacemail' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>INSTALACIÓN EN SPACEMAIL / WEBMAIL / CPANEL</span>
              </div>
              <ol className="space-y-3 text-xs text-zinc-300 list-decimal list-inside leading-relaxed">
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Haz clic en el botón <strong className="text-calmecac-orange font-mono">"Copiar Código HTML"</strong> para copiar el string exacto con CSS inline.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Inicia sesión en tu cuenta de <strong>SpaceMail Webmail</strong> (o Roundcube).
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Dirígete a <strong>Configuración ⚙ &gt; Identidades</strong> y selecciona tu dirección de correo electrónico.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Activa la casilla <strong className="text-emerald-400">"Firma HTML"</strong> o presiona el botón de editor de código <code>&lt;/&gt;</code> (Ver fuente HTML).
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Pega el código HTML procesado y guarda los cambios.
                </li>
              </ol>
            </div>
          )}

          {/* APPLE MAIL GUIDE */}
          {activeClient === 'apple' && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-zinc-300 font-mono text-xs font-bold">
                <CheckCircle2 className="h-4 w-4" />
                <span>INSTALACIÓN EN APPLE MAIL (MACOS / IOS)</span>
              </div>
              <ol className="space-y-3 text-xs text-zinc-300 list-decimal list-inside leading-relaxed">
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Haz clic en <strong className="text-calmecac-orange">"Copiar Firma para Correo (Rich Text)"</strong>.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Abre <strong>Mail</strong> en tu Mac, dirígete a <em>Mail &gt; Ajustes... &gt; Firmas</em>.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Añade una firma con el botón <strong>+</strong> y desmarca la casilla <em className="text-amber-400 font-semibold font-mono">"Usar siempre el mismo tipo de letra predeterminado"</em>.
                </li>
                <li className="p-3 bg-zinc-900/60 rounded-lg border border-zinc-800">
                  Pega la firma en el cuadro derecho con <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-white">Cmd + V</kbd>.
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-calmecac-border bg-zinc-950 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-calmecac-orange px-5 py-2 text-xs font-bold text-white shadow-glow hover:bg-calmecac-orangeHover transition-all"
          >
            Entendido, cerrar guía
          </button>
        </div>
      </div>
    </div>
  );
};
