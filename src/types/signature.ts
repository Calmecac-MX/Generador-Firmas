export type SignatureTemplateId =
  | 'calmecac-monumental'
  | 'calmecac-minimal'
  | 'calmecac-card'
  | 'calmecac-executive'
  | 'calmecac-compact';

export type EmailClient = 'all' | 'gmail' | 'outlook' | 'spacemail' | 'apple';

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  whatsapp?: string;
  github?: string;
  facebook?: string;
  youtube?: string;
  website?: string;
}

export interface SignatureData {
  // Personal & Position
  fullName: string;
  jobTitle: string;
  department: string;
  companyName: string;
  badgeTag: string; // e.g. [ÁGUILA QUE DESCIENDE], [MADUREZ OPERATIVA]

  // Contact Info
  email: string;
  phone: string;
  mobile: string;
  website: string;
  address: string;

  // Media
  avatarUrl: string;
  avatarShape: 'square' | 'rounded' | 'circle';
  logoUrl: string;
  bannerUrl: string;
  bannerLink: string;

  // Call To Action
  ctaText: string;
  ctaUrl: string;
  ctaStyle: 'solid' | 'outline' | 'badge';

  // Customization & Branding
  templateId: SignatureTemplateId;
  accentColor: string; // Hex color (e.g. #10b981)
  textColor: string;
  subtextColor: string;
  fontSize: 'small' | 'medium' | 'large';
  showSocialIcons: boolean;
  showContactIcons: boolean;
  showBadge: boolean;
  showBanner: boolean;
  showDivider: boolean;

  // Social Links
  socials: SocialLinks;
}

export const DEFAULT_SIGNATURE_DATA: SignatureData = {
  fullName: "Cuauhtémoc",
  jobTitle: "Hueyi Tlatoani & Chief Operating Commander",
  department: "Estrategia Operativa & Resiliencia",
  companyName: "CALMÉCAC",
  badgeTag: "[ÁGUILA QUE DESCIENDE]",

  email: "cuauhtemoc@calmecac.lat",
  phone: "+52 55 1325 1521",
  mobile: "+52 55 8765 4321",
  website: "https://calmecac.lat",
  address: "Tenochtitlan, Ciudad de México",

  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  avatarShape: "rounded",
  logoUrl: "",
  bannerUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  bannerLink: "https://calmecac.lat#convocatoria",

  ctaText: "VER SISTEMA CALMÉCAC",
  ctaUrl: "https://calmecac.lat#provocacion",
  ctaStyle: "solid",

  templateId: "calmecac-monumental",
  accentColor: "#10b981", // Esmeralda Tech Primary
  textColor: "#18181b",
  subtextColor: "#52525b",
  fontSize: "medium",
  showSocialIcons: true,
  showContactIcons: true,
  showBadge: true,
  showBanner: true,
  showDivider: true,

  socials: {
    linkedin: "https://linkedin.com/company/calmecac",
    twitter: "https://x.com/calmecac_lat",
    instagram: "https://instagram.com/calmecac.lat",
    whatsapp: "https://wa.me/525513251521",
    website: "https://calmecac.lat",
  },
};

export const CALMECAC_PRESETS: { name: string; tag: string; data: Partial<SignatureData> }[] = [
  {
    name: "Cuauhtémoc — Hueyi Tlatoani",
    tag: "[ÁGUILA QUE DESCIENDE]",
    data: {
      fullName: "Cuauhtémoc",
      jobTitle: "Hueyi Tlatoani & Chief Operating Commander",
      department: "Estrategia Operativa & Resiliencia",
      badgeTag: "[ÁGUILA QUE DESCIENDE]",
      accentColor: "#10b981",
      templateId: "calmecac-monumental",
      ctaText: "VER CONVOCATORIA CALMÉCAC",
      ctaUrl: "https://calmecac.lat#convocatoria",
    },
  },
  {
    name: "Nezahualcóyotl — Señor de Texcoco",
    tag: "[ARQUITECTO MONUMENTAL]",
    data: {
      fullName: "Nezahualcóyotl",
      jobTitle: "Chief Architect & Hydraulic Systems Designer",
      department: "Infraestructura & Poesía Operativa",
      badgeTag: "[ARQUITECTO MONUMENTAL]",
      accentColor: "#f59e0b",
      templateId: "calmecac-executive",
      ctaText: "AGENDAR CONSULTA OPERATIVA",
      ctaUrl: "https://calmecac.lat#contacto",
    },
  },
  {
    name: "Tlacaelel — Cihuacóatl & Gran Consejero",
    tag: "[CONSEJERO SUPREMO]",
    data: {
      fullName: "Tlacaelel",
      jobTitle: "Cihuacóatl & Chief Growth Strategist",
      department: "Alianzas Estratégicas y Gobierno",
      badgeTag: "[CONSEJERO SUPREMO]",
      accentColor: "#06b6d4",
      templateId: "calmecac-minimal",
      ctaText: "VER ESTRATEGIA DE CRECIMIENTO",
      ctaUrl: "https://calmecac.lat#que-hacemos",
    },
  },
];
