import { SignatureData } from '@/types/signature';

// Helper to generate encoded SVG Data URIs with custom stroke/fill accent color
function getEmailIconSvg(accent: string) {
  const encodedColor = encodeURIComponent(accent);
  return {
    email: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${encodedColor}' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='20' height='16' x='2' y='4' rx='2'/%3E%3Cpath d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/%3E%3C/svg%3E`,
    phone: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${encodedColor}' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'/%3E%3C/svg%3E`,
    website: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${encodedColor}' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'/%3E%3Cpath d='M2 12h20'/%3E%3C/svg%3E`,
    address: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${encodedColor}' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'/%3E%3Ccircle cx='12' cy='10' r='3'/%3E%3C/svg%3E`,

    // Social Brand Icons
    linkedin: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='${encodedColor}'%3E%3Cpath d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'/%3E%3C/svg%3E`,
    twitter: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='${encodedColor}'%3E%3Cpath d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/%3E%3C/svg%3E`,
    instagram: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='${encodedColor}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='20' height='20' x='2' y='2' rx='5' ry='5'/%3E%3Cpath d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/%3E%3Cline x1='17.5' x2='17.51' y1='6.5' y2='6.5'/%3E%3C/svg%3E`,
    whatsapp: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='${encodedColor}'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.926 0-3.812-.518-5.464-1.503l-.391-.234-4.062 1.065 1.084-3.96-.256-.407a10.82 10.82 0 0 1-1.66-5.753c0-5.976 4.86-10.837 10.838-10.837 2.895 0 5.617 1.129 7.662 3.176a10.77 10.77 0 0 1 3.173 7.665c0 5.977-4.86 10.838-10.924 10.838'/%3E%3C/svg%3E`,
    github: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='${encodedColor}'%3E%3Cpath d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z'/%3E%3C/svg%3E`,
  };
}

/**
 * Generates pure, cross-client HTML email code using nested tables and inline CSS.
 * Incorporates Calmécac's typography system and inline SVG Data URI icons.
 */
export function generateEmailHtml(data: SignatureData): string {
  const accent = (data.accentColor && data.accentColor.trim()) || '#10b981';
  const textColor = '#18181b';
  const subtextColor = '#52525b';
  const fontFamily = "Arial, Helvetica, sans-serif";
  const monoFontFamily = "'Courier New', Courier, monospace";

  const icons = getEmailIconSvg(accent);

  // Avatar shape logic
  let avatarRadius = '0px';
  if (data.avatarShape === 'circle') avatarRadius = '50%';
  if (data.avatarShape === 'rounded') avatarRadius = '12px';

  const hasAvatar = !!(data.avatarUrl && data.avatarUrl.trim());
  const hasBadge = !!(data.showBadge && data.badgeTag && data.badgeTag.trim());
  const hasCta = !!(data.ctaText && data.ctaText.trim());
  const hasBanner = !!(data.showBanner && data.bannerUrl && data.bannerUrl.trim());
  const showContactIcons = data.showContactIcons !== false;

  // Badge tag HTML (Calmécac Monospace Bracket Badge)
  const badgeHtml = hasBadge ? `
    <span style="display: inline-block; background-color: ${accent}15; color: ${accent}; border: 1px solid ${accent}50; font-family: ${monoFontFamily}; font-size: 10px; font-weight: bold; padding: 2px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
      ${escapeHtml(data.badgeTag.trim())}
    </span>
  ` : '';

  // CTA Button HTML
  const ctaButtonHtml = hasCta ? `
    <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 14px;">
      <tr>
        <td align="center" bgcolor="${accent}" style="border-radius: 6px; padding: 8px 18px;">
          <a href="${escapeHtml(data.ctaUrl ? data.ctaUrl.trim() : '#')}" target="_blank" style="font-family: ${monoFontFamily}; font-size: 11px; font-weight: bold; color: #ffffff; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">
            ${escapeHtml(data.ctaText.trim())} &rarr;
          </a>
        </td>
      </tr>
    </table>
  ` : '';

  // Banner HTML
  const bannerHtml = hasBanner ? `
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 10px; border-top: 1px solid #e4e4e7; padding-top: 8px;">
      <tr>
        <td>
          <a href="${escapeHtml(data.bannerLink ? data.bannerLink.trim() : '#')}" target="_blank">
            <img src="${escapeHtml(data.bannerUrl.trim())}" alt="Calmecac Banner" width="480" style="width: 100%; max-width: 480px; max-height: 140px; height: auto; display: block; border-radius: 6px; border: 0; outline: none; text-decoration: none; object-fit: cover;" />
          </a>
        </td>
      </tr>
    </table>
  ` : '';

  // Social Links List with SVG Brand Icons
  const socialsList: { key: keyof typeof data.socials; label: string; iconKey: keyof typeof icons }[] = [
    { key: 'linkedin', label: 'LinkedIn', iconKey: 'linkedin' },
    { key: 'twitter', label: 'X', iconKey: 'twitter' },
    { key: 'instagram', label: 'Instagram', iconKey: 'instagram' },
    { key: 'whatsapp', label: 'WhatsApp', iconKey: 'whatsapp' },
    { key: 'github', label: 'GitHub', iconKey: 'github' },
    { key: 'website', label: 'Website', iconKey: 'website' },
  ];

  const activeSocials = data.socials
    ? socialsList.filter(s => !!(data.socials[s.key] && data.socials[s.key]!.trim()))
    : [];

  const socialLinksHtml = (data.showSocialIcons && activeSocials.length > 0) ? `
    <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px;">
      <tr>
        ${activeSocials.map(s => `
          <td style="padding-right: 8px;" valign="middle">
            <a href="${escapeHtml(data.socials[s.key]!.trim())}" target="_blank" style="font-family: ${monoFontFamily}; font-size: 10px; font-weight: bold; color: ${accent}; text-decoration: none; background-color: #f4f4f5; border: 1px solid #e4e4e7; padding: 4px 8px; border-radius: 4px; display: inline-block;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td valign="middle" style="padding-right: 4px;">
                    <img src="${icons[s.iconKey] || icons.website}" width="14" height="14" alt="${s.label}" style="display: block; width: 14px; height: 14px; border: 0;" />
                  </td>
                  <td valign="middle" style="font-family: ${monoFontFamily}; font-size: 10px; color: ${accent}; font-weight: bold;">
                    ${s.label.toUpperCase()}
                  </td>
                </tr>
              </table>
            </a>
          </td>
        `).join('')}
      </tr>
    </table>
  ` : '';

  const hasEmail = !!(data.email && data.email.trim());
  const hasPhone = !!(data.phone && data.phone.trim());
  const hasMobile = !!(data.mobile && data.mobile.trim());
  const hasWebsite = !!(data.website && data.website.trim());
  const hasAddress = !!(data.address && data.address.trim());
  const hasContactInfo = hasEmail || hasPhone || hasMobile || hasWebsite || hasAddress;

  const phoneText = hasMobile ? data.mobile.trim() : (hasPhone ? data.phone.trim() : '');

  // Template 1: Calmécac Monumental (Vertical Accent Line)
  if (data.templateId === 'calmecac-monumental') {
    return `
<!-- START CALMECAC EMAIL SIGNATURE (MONUMENTAL) -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; color: ${textColor}; line-height: 1.4; max-width: 560px; text-align: left; background-color: transparent;">
  <tr>
    <!-- Left Avatar / Logo -->
    ${hasAvatar ? `
      <td valign="top" style="padding-right: 16px;">
        <img src="${escapeHtml(data.avatarUrl.trim())}" alt="${escapeHtml(data.fullName)}" width="88" height="88" style="width: 88px; height: 88px; border-radius: ${avatarRadius}; display: block; border: 2px solid ${accent}; object-fit: cover;" />
      </td>
    ` : ''}

    <!-- Vertical Accent Bar -->
    <td valign="top" width="4" bgcolor="${accent}" style="width: 4px; background-color: ${accent}; border-radius: 2px;"></td>

    <!-- Right Contact Info Block -->
    <td valign="top" style="padding-left: 16px;">
      <!-- Badge Tag -->
      ${badgeHtml}

      <!-- Full Name -->
      ${data.fullName && data.fullName.trim() ? `
        <div style="font-family: ${fontFamily}; font-size: 17px; font-weight: 900; color: ${textColor}; letter-spacing: -0.3px; margin-bottom: 2px;">
          ${escapeHtml(data.fullName.trim())}
        </div>
      ` : ''}

      <!-- Job Title & Department -->
      ${(data.jobTitle && data.jobTitle.trim()) || (data.department && data.department.trim()) ? `
        <div style="font-family: ${fontFamily}; font-size: 13px; font-weight: 700; color: ${accent}; margin-bottom: 4px;">
          ${data.jobTitle ? escapeHtml(data.jobTitle.trim()) : ''} ${data.department && data.department.trim() ? `<span style="color: ${subtextColor}; font-weight: normal;">&bull; ${escapeHtml(data.department.trim())}</span>` : ''}
        </div>
      ` : ''}

      <!-- Company Name -->
      ${data.companyName && data.companyName.trim() ? `
        <div style="font-family: ${monoFontFamily}; font-size: 11px; font-weight: bold; color: ${subtextColor}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
          ${escapeHtml(data.companyName.trim())}
        </div>
      ` : ''}

      <!-- Contact Lines with Icons -->
      ${hasContactInfo ? `
        <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; font-size: 12px; color: ${subtextColor};">
          ${hasEmail ? `
            <tr>
              <td style="padding-bottom: 4px; padding-right: 8px;" valign="middle">
                <img src="${icons.email}" width="14" height="14" alt="Email" style="display: block; width: 14px; height: 14px; border: 0;" />
              </td>
              <td style="padding-bottom: 4px;" valign="middle"><a href="mailto:${escapeHtml(data.email.trim())}" style="color: ${textColor}; text-decoration: none; font-weight: 500;">${escapeHtml(data.email.trim())}</a></td>
            </tr>
          ` : ''}
          ${phoneText ? `
            <tr>
              <td style="padding-bottom: 4px; padding-right: 8px;" valign="middle">
                <img src="${icons.phone}" width="14" height="14" alt="Phone" style="display: block; width: 14px; height: 14px; border: 0;" />
              </td>
              <td style="padding-bottom: 4px;" valign="middle"><a href="tel:${escapeHtml(phoneText)}" style="color: ${textColor}; text-decoration: none;">${escapeHtml(phoneText)}</a></td>
            </tr>
          ` : ''}
          ${hasWebsite ? `
            <tr>
              <td style="padding-bottom: 4px; padding-right: 8px;" valign="middle">
                <img src="${icons.website}" width="14" height="14" alt="Web" style="display: block; width: 14px; height: 14px; border: 0;" />
              </td>
              <td style="padding-bottom: 4px;" valign="middle"><a href="${escapeHtml(data.website.trim())}" target="_blank" style="color: ${accent}; text-decoration: none; font-weight: bold;">${escapeHtml(data.website.trim().replace(/^https?:\/\//, ''))}</a></td>
            </tr>
          ` : ''}
          ${hasAddress ? `
            <tr>
              <td style="padding-bottom: 4px; padding-right: 8px;" valign="middle">
                <img src="${icons.address}" width="14" height="14" alt="Location" style="display: block; width: 14px; height: 14px; border: 0;" />
              </td>
              <td style="padding-bottom: 4px; color: ${subtextColor};" valign="middle">${escapeHtml(data.address.trim())}</td>
            </tr>
          ` : ''}
        </table>
      ` : ''}

      <!-- Social Links -->
      ${socialLinksHtml}

      <!-- CTA Button -->
      ${ctaButtonHtml}
    </td>
  </tr>
</table>
${bannerHtml}
<!-- END CALMECAC EMAIL SIGNATURE -->
    `.trim();
  }

  // Template 2: Calmécac Minimal (Clean Divider Line)
  if (data.templateId === 'calmecac-minimal') {
    return `
<!-- START CALMECAC EMAIL SIGNATURE (MINIMAL) -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; color: ${textColor}; line-height: 1.4; max-width: 560px; text-align: left;">
  <tr>
    <td valign="top">
      ${badgeHtml}
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          ${hasAvatar ? `
            <td valign="middle" style="padding-right: 14px;">
              <img src="${escapeHtml(data.avatarUrl.trim())}" alt="${escapeHtml(data.fullName)}" width="64" height="64" style="width: 64px; height: 64px; border-radius: ${avatarRadius}; display: block; border: 1px solid ${accent};" />
            </td>
          ` : ''}
          <td valign="middle">
            ${data.fullName && data.fullName.trim() ? `
              <div style="font-family: ${fontFamily}; font-size: 16px; font-weight: 900; color: ${textColor};">
                ${escapeHtml(data.fullName.trim())}
              </div>
            ` : ''}
            ${data.jobTitle || data.companyName ? `
              <div style="font-family: ${fontFamily}; font-size: 12px; color: ${accent}; font-weight: 700;">
                ${data.jobTitle ? escapeHtml(data.jobTitle.trim()) : ''} ${data.companyName && data.companyName.trim() ? `<span style="color: ${subtextColor}; font-weight: normal;">| ${escapeHtml(data.companyName.trim())}</span>` : ''}
              </div>
            ` : ''}
          </td>
        </tr>
      </table>

      <!-- Divider line -->
      <div style="height: 1px; background-color: ${accent}; margin: 10px 0; width: 100%;"></div>

      <!-- Compact Contact Row with Icons -->
      ${hasContactInfo ? `
        <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; font-size: 12px; color: ${subtextColor};">
          <tr>
            ${hasEmail ? `
              <td valign="middle" style="padding-right: 6px;"><img src="${icons.email}" width="14" height="14" alt="Email" style="display: block;" /></td>
              <td valign="middle" style="padding-right: 12px;"><a href="mailto:${escapeHtml(data.email.trim())}" style="color: ${textColor}; text-decoration: none; font-weight: bold;">${escapeHtml(data.email.trim())}</a></td>
            ` : ''}
            ${hasPhone ? `
              <td valign="middle" style="padding-right: 6px;"><img src="${icons.phone}" width="14" height="14" alt="Tel" style="display: block;" /></td>
              <td valign="middle" style="padding-right: 12px;"><a href="tel:${escapeHtml(data.phone.trim())}" style="color: ${subtextColor}; text-decoration: none;">${escapeHtml(data.phone.trim())}</a></td>
            ` : ''}
            ${hasWebsite ? `
              <td valign="middle" style="padding-right: 6px;"><img src="${icons.website}" width="14" height="14" alt="Web" style="display: block;" /></td>
              <td valign="middle"><a href="${escapeHtml(data.website.trim())}" target="_blank" style="color: ${accent}; text-decoration: none; font-weight: bold;">${escapeHtml(data.website.trim().replace(/^https?:\/\//, ''))}</a></td>
            ` : ''}
          </tr>
        </table>
      ` : ''}

      ${socialLinksHtml}
      ${ctaButtonHtml}
    </td>
  </tr>
</table>
${bannerHtml}
<!-- END CALMECAC EMAIL SIGNATURE -->
    `.trim();
  }

  // Template 3: Calmécac Modern Card
  if (data.templateId === 'calmecac-card') {
    return `
<!-- START CALMECAC EMAIL SIGNATURE (CARD) -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; color: ${textColor}; line-height: 1.4; max-width: 540px; background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 10px; padding: 16px; text-align: left;">
  <tr>
    <td valign="top">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          ${hasAvatar ? `
            <td valign="top" width="70" style="padding-right: 14px;">
              <img src="${escapeHtml(data.avatarUrl.trim())}" alt="${escapeHtml(data.fullName)}" width="70" height="70" style="width: 70px; height: 70px; border-radius: ${avatarRadius}; display: block; border: 2px solid ${accent}; object-fit: cover;" />
            </td>
          ` : ''}
          <td valign="top">
            ${badgeHtml}
            ${data.fullName && data.fullName.trim() ? `
              <div style="font-family: ${fontFamily}; font-size: 17px; font-weight: 900; color: ${textColor}; margin-bottom: 2px;">
                ${escapeHtml(data.fullName.trim())}
              </div>
            ` : ''}
            ${data.jobTitle && data.jobTitle.trim() ? `
              <div style="font-family: ${fontFamily}; font-size: 12px; font-weight: 700; color: ${accent};">
                ${escapeHtml(data.jobTitle.trim())}
              </div>
            ` : ''}
            ${data.companyName && data.companyName.trim() ? `
              <div style="font-family: ${monoFontFamily}; font-size: 11px; color: ${subtextColor}; text-transform: uppercase;">
                ${escapeHtml(data.companyName.trim())} ${data.department && data.department.trim() ? `&bull; ${escapeHtml(data.department.trim())}` : ''}
              </div>
            ` : ''}
          </td>
        </tr>
      </table>

      ${hasContactInfo ? `
        <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; font-size: 12px; color: ${subtextColor}; margin-top: 12px; width: 100%;">
          ${hasEmail || hasPhone ? `
            <tr>
              <td style="padding: 6px 0; border-top: 1px solid #e4e4e7;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    ${hasEmail ? `
                      <td valign="middle" style="padding-right: 6px;"><img src="${icons.email}" width="14" height="14" alt="Email" style="display: block;" /></td>
                      <td valign="middle" style="padding-right: 12px;"><a href="mailto:${escapeHtml(data.email.trim())}" style="color: ${textColor}; text-decoration: none;">${escapeHtml(data.email.trim())}</a></td>
                    ` : ''}
                    ${hasPhone ? `
                      <td valign="middle" style="padding-right: 6px;"><img src="${icons.phone}" width="14" height="14" alt="Phone" style="display: block;" /></td>
                      <td valign="middle"><a href="tel:${escapeHtml(data.phone.trim())}" style="color: ${textColor}; text-decoration: none;">${escapeHtml(data.phone.trim())}</a></td>
                    ` : ''}
                  </tr>
                </table>
              </td>
            </tr>
          ` : ''}
          ${hasWebsite || hasAddress ? `
            <tr>
              <td style="padding: 4px 0;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    ${hasWebsite ? `
                      <td valign="middle" style="padding-right: 6px;"><img src="${icons.website}" width="14" height="14" alt="Web" style="display: block;" /></td>
                      <td valign="middle" style="padding-right: 12px;"><a href="${escapeHtml(data.website.trim())}" target="_blank" style="color: ${accent}; text-decoration: none; font-weight: bold;">${escapeHtml(data.website.trim().replace(/^https?:\/\//, ''))}</a></td>
                    ` : ''}
                    ${hasAddress ? `
                      <td valign="middle" style="padding-right: 6px;"><img src="${icons.address}" width="14" height="14" alt="Location" style="display: block;" /></td>
                      <td valign="middle" style="color: ${subtextColor};">${escapeHtml(data.address.trim())}</td>
                    ` : ''}
                  </tr>
                </table>
              </td>
            </tr>
          ` : ''}
        </table>
      ` : ''}

      ${socialLinksHtml}
      ${ctaButtonHtml}
    </td>
  </tr>
</table>
${bannerHtml}
<!-- END CALMECAC EMAIL SIGNATURE -->
    `.trim();
  }

  // Template 4: Calmécac Executive Banner
  if (data.templateId === 'calmecac-executive') {
    return `
<!-- START CALMECAC EMAIL SIGNATURE (EXECUTIVE) -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; color: ${textColor}; line-height: 1.4; max-width: 560px; text-align: left;">
  <!-- Top Calmécac Branding Bar -->
  <tr>
    <td bgcolor="${accent}" style="padding: 5px 14px; border-radius: 4px 4px 0 0;">
      <div style="font-family: ${monoFontFamily}; font-size: 10px; font-weight: bold; color: #ffffff; letter-spacing: 1.5px;">
        CALMÉCAC // ${escapeHtml(data.badgeTag ? data.badgeTag.trim() : '[SISTEMA OPERATIVO]')}
      </div>
    </td>
  </tr>
  <tr>
    <td style="border: 1px solid #e4e4e7; border-top: none; padding: 16px; border-radius: 0 0 6px 6px; background-color: #ffffff;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          ${hasAvatar ? `
            <td valign="top" width="80" style="padding-right: 14px;">
              <img src="${escapeHtml(data.avatarUrl.trim())}" alt="${escapeHtml(data.fullName)}" width="80" height="80" style="width: 80px; height: 80px; border-radius: ${avatarRadius}; display: block; border: 2px solid ${accent}; object-fit: cover;" />
            </td>
          ` : ''}
          <td valign="top">
            ${data.fullName && data.fullName.trim() ? `
              <div style="font-family: ${fontFamily}; font-size: 18px; font-weight: 900; color: ${textColor};">
                ${escapeHtml(data.fullName.trim())}
              </div>
            ` : ''}
            ${data.jobTitle && data.jobTitle.trim() ? `
              <div style="font-family: ${fontFamily}; font-size: 13px; font-weight: 700; color: ${accent}; margin-bottom: 2px;">
                ${escapeHtml(data.jobTitle.trim())}
              </div>
            ` : ''}
            ${data.companyName && data.companyName.trim() ? `
              <div style="font-family: ${monoFontFamily}; font-size: 11px; color: ${subtextColor}; margin-bottom: 8px;">
                ${escapeHtml(data.companyName.trim())} ${data.department && data.department.trim() ? `&bull; ${escapeHtml(data.department.trim())}` : ''}
              </div>
            ` : ''}

            ${hasContactInfo ? `
              <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; font-size: 12px; color: ${subtextColor};">
                ${hasEmail ? `
                  <tr>
                    <td valign="middle" style="padding-right: 6px; padding-bottom: 3px;"><img src="${icons.email}" width="14" height="14" alt="Email" style="display: block;" /></td>
                    <td valign="middle" style="padding-bottom: 3px;"><a href="mailto:${escapeHtml(data.email.trim())}" style="color: ${textColor}; text-decoration: none;">${escapeHtml(data.email.trim())}</a></td>
                  </tr>
                ` : ''}
                ${hasPhone ? `
                  <tr>
                    <td valign="middle" style="padding-right: 6px; padding-bottom: 3px;"><img src="${icons.phone}" width="14" height="14" alt="Phone" style="display: block;" /></td>
                    <td valign="middle" style="padding-bottom: 3px;"><a href="tel:${escapeHtml(data.phone.trim())}" style="color: ${textColor}; text-decoration: none;">${escapeHtml(data.phone.trim())}</a></td>
                  </tr>
                ` : ''}
                ${hasWebsite ? `
                  <tr>
                    <td valign="middle" style="padding-right: 6px; padding-bottom: 3px;"><img src="${icons.website}" width="14" height="14" alt="Web" style="display: block;" /></td>
                    <td valign="middle" style="padding-bottom: 3px;"><a href="${escapeHtml(data.website.trim())}" target="_blank" style="color: ${accent}; text-decoration: none; font-weight: bold;">${escapeHtml(data.website.trim().replace(/^https?:\/\//, ''))}</a></td>
                  </tr>
                ` : ''}
              </table>
            ` : ''}
          </td>
        </tr>
      </table>

      ${socialLinksHtml}
      ${ctaButtonHtml}
    </td>
  </tr>
</table>
${bannerHtml}
<!-- END CALMECAC EMAIL SIGNATURE -->
    `.trim();
  }

  // Template 5: Calmécac Compact
  return `
<!-- START CALMECAC EMAIL SIGNATURE (COMPACT) -->
<table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; color: ${textColor}; line-height: 1.3; max-width: 520px; text-align: left;">
  <tr>
    <td valign="middle" style="padding-right: 12px;">
      <div style="width: 4px; height: 52px; background-color: ${accent}; border-radius: 2px;"></div>
    </td>
    <td valign="middle">
      ${data.fullName && data.fullName.trim() ? `
        <div style="font-family: ${fontFamily}; font-size: 15px; font-weight: 900; color: ${textColor};">
          ${escapeHtml(data.fullName.trim())} ${data.companyName && data.companyName.trim() ? `<span style="font-size: 12px; font-weight: normal; color: ${subtextColor}; font-family: ${monoFontFamily};">(${escapeHtml(data.companyName.trim())})</span>` : ''}
        </div>
      ` : ''}
      ${data.jobTitle && data.jobTitle.trim() ? `
        <div style="font-family: ${fontFamily}; font-size: 12px; color: ${accent}; font-weight: 700;">
          ${escapeHtml(data.jobTitle.trim())}
        </div>
      ` : ''}
      ${hasContactInfo ? `
        <table cellpadding="0" cellspacing="0" border="0" style="font-family: ${fontFamily}; font-size: 11px; color: ${subtextColor}; margin-top: 3px;">
          <tr>
            ${hasEmail ? `
              <td valign="middle" style="padding-right: 4px;"><img src="${icons.email}" width="12" height="12" alt="Email" style="display: block;" /></td>
              <td valign="middle" style="padding-right: 10px;"><a href="mailto:${escapeHtml(data.email.trim())}" style="color: ${textColor}; text-decoration: none; font-weight: bold;">${escapeHtml(data.email.trim())}</a></td>
            ` : ''}
            ${hasPhone ? `
              <td valign="middle" style="padding-right: 4px;"><img src="${icons.phone}" width="12" height="12" alt="Phone" style="display: block;" /></td>
              <td valign="middle" style="padding-right: 10px;"><a href="tel:${escapeHtml(data.phone.trim())}" style="color: ${subtextColor}; text-decoration: none;">${escapeHtml(data.phone.trim())}</a></td>
            ` : ''}
            ${hasWebsite ? `
              <td valign="middle" style="padding-right: 4px;"><img src="${icons.website}" width="12" height="12" alt="Web" style="display: block;" /></td>
              <td valign="middle"><a href="${escapeHtml(data.website.trim())}" target="_blank" style="color: ${accent}; text-decoration: none; font-weight: bold;">${escapeHtml(data.website.trim().replace(/^https?:\/\//, ''))}</a></td>
            ` : ''}
          </tr>
        </table>
      ` : ''}
    </td>
  </tr>
</table>
<!-- END CALMECAC EMAIL SIGNATURE -->
  `.trim();
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
