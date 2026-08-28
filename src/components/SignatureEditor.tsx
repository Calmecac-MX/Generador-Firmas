'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Share2,
  Image as ImageIcon,
  Palette,
  Layout,
  Tag,
  MousePointerClick,
  Sparkles,
  EyeOff,
  Phone,
  Globe,
  MapPin,
  Briefcase,
  Building2,
  Link as LinkIcon,
  MessageCircle,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { SignatureData, SignatureTemplateId } from '@/types/signature';

interface SignatureEditorProps {
  data: SignatureData;
  onChange: (updatedData: SignatureData) => void;
}

export const SignatureEditor: React.FC<SignatureEditorProps> = ({ data, onChange }) => {
  const [activeTab, setActiveTab] = useState<'template' | 'personal' | 'contact' | 'media' | 'social'>('template');

  const updateField = <K extends keyof SignatureData>(field: K, value: SignatureData[K]) => {
    onChange({ ...data, [field]: value });
  };

  const updateSocial = (socialKey: keyof SignatureData['socials'], value: string) => {
    onChange({
      ...data,
      socials: {
        ...data.socials,
        [socialKey]: value,
      },
    });
  };

  // Harmonious Preset Color Palette (Calmécac Theme)
  const COLOR_PRESETS = [
    { label: 'Esmeralda Tech', hex: '#10b981' },
    { label: 'Dorado Ámbar', hex: '#f59e0b' },
    { label: 'Azul Cían', hex: '#06b6d4' },
    { label: 'Fuego Carmesí', hex: '#ef4444' },
    { label: 'Púrpura Místico', hex: '#8b5cf6' },
    { label: 'Obsidiana Minimal', hex: '#3f3f46' },
  ];

  // Templates options
  const TEMPLATE_OPTIONS: { id: SignatureTemplateId; title: string; desc: string; badge: string }[] = [
    {
      id: 'calmecac-monumental',
      title: 'Calmécac Monumental',
      desc: 'Bloque vertical de acento, insignia entre corchetes e íconos vectoriales.',
      badge: 'RECOMENDADA',
    },
    {
      id: 'calmecac-minimal',
      title: 'Minimal Tech',
      desc: 'Líneas limpias, separadores horizontales e información directa.',
      badge: 'CLEAN',
    },
    {
      id: 'calmecac-card',
      title: 'Modern Card',
      desc: 'Estilo tarjeta ejecutiva con contenedor suave y bordes.',
      badge: 'EJECUTIVA',
    },
    {
      id: 'calmecac-executive',
      title: 'Executive Banner',
      desc: 'Encabezado con marca Calmécac y jerarquía superior.',
      badge: 'TLATOANI',
    },
    {
      id: 'calmecac-compact',
      title: 'Compact Grid',
      desc: 'Ultra ligera y directa para respuestas rápidas.',
      badge: 'LITE',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-calmecac-card border border-calmecac-border rounded-xl overflow-hidden shadow-glass">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-calmecac-border bg-zinc-950/80 overflow-x-auto no-scrollbar font-sans">
        <button
          onClick={() => setActiveTab('template')}
          className={`flex items-center space-x-2 px-4 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'template'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
              : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Layout className="h-4 w-4" />
          <span>Plantilla & Estilo</span>
        </button>

        <button
          onClick={() => setActiveTab('personal')}
          className={`flex items-center space-x-2 px-4 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'personal'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
              : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <User className="h-4 w-4" />
          <span>Datos Personales</span>
        </button>

        <button
          onClick={() => setActiveTab('contact')}
          className={`flex items-center space-x-2 px-4 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'contact'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
              : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Mail className="h-4 w-4" />
          <span>Contacto</span>
        </button>

        <button
          onClick={() => setActiveTab('media')}
          className={`flex items-center space-x-2 px-4 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'media'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
              : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <ImageIcon className="h-4 w-4" />
          <span>Imágenes</span>
        </button>

        <button
          onClick={() => setActiveTab('social')}
          className={`flex items-center space-x-2 px-4 py-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'social'
              ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
              : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Share2 className="h-4 w-4" />
          <span>Redes & CTA</span>
        </button>
      </div>

      {/* Tab Body */}
      <div className="p-5 overflow-y-auto space-y-5 flex-1 custom-scrollbar font-sans">
        {/* TAB 1: PLANTILLA & ESTILO */}
        {activeTab === 'template' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Plantillas Bulletproof Calmécac
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {TEMPLATE_OPTIONS.map((tmpl) => (
                  <div
                    key={tmpl.id}
                    onClick={() => updateField('templateId', tmpl.id)}
                    className={`relative p-3.5 rounded-lg border cursor-pointer transition-all ${
                      data.templateId === tmpl.id
                        ? 'border-emerald-500 bg-emerald-500/10 shadow-glow'
                        : 'border-calmecac-border bg-zinc-900/40 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        {data.templateId === tmpl.id && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                        {tmpl.title}
                      </span>
                      <span className="font-mono text-[10px] font-extrabold px-2 py-0.5 rounded bg-zinc-800 text-emerald-400 border border-emerald-500/30">
                        {tmpl.badge}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{tmpl.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accent Color Picker */}
            <div className="pt-3 border-t border-calmecac-border">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <Palette className="h-3.5 w-3.5" /> Paleta de Colores Armónica
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-3">
                {COLOR_PRESETS.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => updateField('accentColor', color.hex)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-md border text-xs font-medium transition-all ${
                      data.accentColor === color.hex
                        ? 'border-white text-white font-bold bg-zinc-800 ring-2 ring-emerald-500'
                        : 'border-calmecac-border text-zinc-300 hover:bg-zinc-800'
                    }`}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xs text-zinc-400 font-mono">Personalizado:</span>
                <input
                  type="color"
                  value={data.accentColor}
                  onChange={(e) => updateField('accentColor', e.target.value)}
                  className="h-8 w-12 rounded cursor-pointer border border-calmecac-border bg-transparent"
                />
                <span className="text-xs font-mono text-zinc-300">{data.accentColor}</span>
              </div>
            </div>

            {/* Avatar Shape */}
            <div className="pt-3 border-t border-calmecac-border">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 block">
                Forma de Foto de Perfil
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'square', label: 'Cuadrada' },
                  { id: 'rounded', label: 'Bordes Suaves' },
                  { id: 'circle', label: 'Circular' },
                ].map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => updateField('avatarShape', shape.id as any)}
                    className={`px-3 py-2 rounded text-xs font-bold border transition-all ${
                      data.avatarShape === shape.id
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-calmecac-border text-zinc-400 hover:bg-zinc-900'
                    }`}
                  >
                    {shape.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DATOS PERSONALES */}
        {activeTab === 'personal' && (
          <div className="space-y-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/30 flex items-center space-x-2 text-xs text-emerald-300 font-mono">
              <EyeOff className="h-4 w-4 shrink-0 text-emerald-400" />
              <span>Cualquier campo que dejes en blanco se ocultará automáticamente en la firma.</span>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-emerald-400" /> Nombre Completo
              </label>
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                placeholder="Ej. Cuauhtémoc"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-emerald-400" /> Cargo / Puesto
                </label>
                <input
                  type="text"
                  value={data.jobTitle}
                  onChange={(e) => updateField('jobTitle', e.target.value)}
                  placeholder="Ej. Hueyi Tlatoani & Supreme Commander"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-emerald-400" /> Departamento
                </label>
                <input
                  type="text"
                  value={data.department}
                  onChange={(e) => updateField('department', e.target.value)}
                  placeholder="Ej. Estrategia Operativa & Resiliencia"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-emerald-400" /> Empresa / Organización
              </label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
                placeholder="Ej. CALMÉCAC"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <Tag className="h-3.5 w-3.5 text-emerald-400" /> Insignia / Tag de Estatus (Opcional)
              </label>
              <input
                type="text"
                value={data.badgeTag}
                onChange={(e) => updateField('badgeTag', e.target.value)}
                placeholder="Ej. [ÁGUILA QUE DESCIENDE]"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white font-mono focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* TAB 3: CONTACTO */}
        {activeTab === 'contact' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-emerald-400" /> Correo Electrónico
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="cuauhtemoc@calmecac.lat"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-emerald-400" /> Teléfono Directo
                </label>
                <input
                  type="text"
                  value={data.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+52 55 1325 1521"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-emerald-400" /> Móvil / WhatsApp
                </label>
                <input
                  type="text"
                  value={data.mobile}
                  onChange={(e) => updateField('mobile', e.target.value)}
                  placeholder="+52 55 8765 4321"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-emerald-400" /> Sitio Web
              </label>
              <input
                type="text"
                value={data.website}
                onChange={(e) => updateField('website', e.target.value)}
                placeholder="https://calmecac.lat"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" /> Ubicación / Dirección
              </label>
              <input
                type="text"
                value={data.address}
                onChange={(e) => updateField('address', e.target.value)}
                placeholder="Tenochtitlan, CDMX"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* TAB 4: IMÁGENES & BANNER */}
        {activeTab === 'media' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <ImageIcon className="h-3.5 w-3.5 text-emerald-400" /> URL de Foto de Perfil / Avatar
              </label>
              <input
                type="url"
                value={data.avatarUrl}
                onChange={(e) => updateField('avatarUrl', e.target.value)}
                placeholder="Deja en blanco para ocultar la foto completamente"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
              <p className="text-[11px] text-zinc-500 mt-1">Si la URL está vacía, el recuadro de la foto no aparecerá en la firma.</p>
            </div>

            {/* Avatar Shape */}
            <div className="pt-2 border-t border-calmecac-border">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2 block">
                Forma de Foto de Perfil
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'square', label: 'Cuadrada' },
                  { id: 'rounded', label: 'Bordes Suaves' },
                  { id: 'circle', label: 'Circular' },
                ].map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => updateField('avatarShape', shape.id as any)}
                    className={`px-3 py-2 rounded text-xs font-bold border transition-all ${
                      data.avatarShape === shape.id
                        ? 'border-emerald-500 bg-emerald-500/20 text-white'
                        : 'border-calmecac-border text-zinc-400 hover:bg-zinc-900'
                    }`}
                  >
                    {shape.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <ImageIcon className="h-3.5 w-3.5 text-emerald-400" /> URL de Banner Promocional Inferior
              </label>
              <input
                type="url"
                value={data.bannerUrl}
                onChange={(e) => updateField('bannerUrl', e.target.value)}
                placeholder="Deja en blanco para ocultar el banner"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-emerald-400" /> Enlace del Banner (URL)
              </label>
              <input
                type="url"
                value={data.bannerLink}
                onChange={(e) => updateField('bannerLink', e.target.value)}
                placeholder="https://calmecac.lat#convocatoria"
                className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <input
                type="checkbox"
                id="showBanner"
                checked={data.showBanner}
                onChange={(e) => updateField('showBanner', e.target.checked)}
                className="h-4 w-4 rounded accent-emerald-500"
              />
              <label htmlFor="showBanner" className="text-xs text-zinc-300 font-medium cursor-pointer">
                Mostrar Banner Promocional
              </label>
            </div>
          </div>
        )}

        {/* TAB 5: REDES SOCIALES & CTA */}
        {activeTab === 'social' && (
          <div className="space-y-4">
            <div className="p-3 bg-zinc-900/60 rounded-lg border border-calmecac-border space-y-3">
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                <MousePointerClick className="h-3.5 w-3.5" /> Botón de Llamado a la Acción (CTA)
              </h4>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Texto del Botón CTA</label>
                <input
                  type="text"
                  value={data.ctaText}
                  onChange={(e) => updateField('ctaText', e.target.value)}
                  placeholder="Ej. VER SISTEMA CALMÉCAC (o en blanco para ocultar)"
                  className="w-full bg-zinc-950 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Enlace del Botón CTA</label>
                <input
                  type="url"
                  value={data.ctaUrl}
                  onChange={(e) => updateField('ctaUrl', e.target.value)}
                  placeholder="https://calmecac.lat"
                  className="w-full bg-zinc-950 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-2 space-y-3">
              <h4 className="text-xs font-mono font-bold text-zinc-300 uppercase flex items-center gap-1.5">
                <Share2 className="h-3.5 w-3.5 text-emerald-400" /> Perfiles de Redes Sociales
              </h4>
              
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <LinkIcon className="h-3.5 w-3.5 text-emerald-400" /> LinkedIn
                </label>
                <input
                  type="url"
                  value={data.socials.linkedin || ''}
                  onChange={(e) => updateSocial('linkedin', e.target.value)}
                  placeholder="https://linkedin.com/company/calmecac"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <LinkIcon className="h-3.5 w-3.5 text-emerald-400" /> X / Twitter
                </label>
                <input
                  type="url"
                  value={data.socials.twitter || ''}
                  onChange={(e) => updateSocial('twitter', e.target.value)}
                  placeholder="https://x.com/calmecac_lat"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <LinkIcon className="h-3.5 w-3.5 text-emerald-400" /> Instagram
                </label>
                <input
                  type="url"
                  value={data.socials.instagram || ''}
                  onChange={(e) => updateSocial('instagram', e.target.value)}
                  placeholder="https://instagram.com/calmecac.lat"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" /> WhatsApp
                </label>
                <input
                  type="url"
                  value={data.socials.whatsapp || ''}
                  onChange={(e) => updateSocial('whatsapp', e.target.value)}
                  placeholder="https://wa.me/525513251521"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1 flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-emerald-400" /> GitHub
                </label>
                <input
                  type="url"
                  value={data.socials.github || ''}
                  onChange={(e) => updateSocial('github', e.target.value)}
                  placeholder="https://github.com/calmecac"
                  className="w-full bg-zinc-900 border border-calmecac-border rounded-lg px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
