import confetti from 'canvas-confetti';

/**
 * Fires celebration confetti when export or copy succeeds.
 */
export function triggerSuccessConfetti() {
  try {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#10b981', '#f59e0b', '#06b6d4', '#ffffff'],
    });
  } catch (err) {
    // Ignore confetti errors
  }
}

/**
 * Copies formatted HTML signature directly to clipboard as Rich Text (HTML).
 * Uses ClipboardItem with robust fallback so it never breaks in any browser.
 */
export async function copySignatureRichText(htmlContent: string): Promise<boolean> {
  try {
    // Try modern ClipboardItem API first
    if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
      try {
        const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
        const textBlob = new Blob([stripHtml(htmlContent)], { type: 'text/plain' });
        
        const item = new ClipboardItem({
          'text/html': htmlBlob,
          'text/plain': textBlob,
        });

        await navigator.clipboard.write([item]);
        triggerSuccessConfetti();
        return true;
      } catch (clipErr) {
        console.warn('ClipboardItem write failed, using DOM selection fallback:', clipErr);
      }
    }

    // Reliable Fallback for all browsers & Safari: Create temporary contentEditable container
    const container = document.createElement('div');
    container.contentEditable = 'true';
    container.innerHTML = htmlContent;
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    container.style.top = '0px';
    container.style.opacity = '0';
    document.body.appendChild(container);

    const range = document.createRange();
    range.selectNodeContents(container);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
      const successful = document.execCommand('copy');
      selection.removeAllRanges();
      document.body.removeChild(container);
      if (successful) {
        triggerSuccessConfetti();
        return true;
      }
    }
    document.body.removeChild(container);
    return false;
  } catch (error) {
    console.error('Failed to copy rich text:', error);
    return false;
  }
}

/**
 * Copies raw HTML string code to clipboard.
 */
export async function copySignatureHtmlCode(htmlContent: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(htmlContent);
      triggerSuccessConfetti();
      return true;
    }
    
    const textarea = document.createElement('textarea');
    textarea.value = htmlContent;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '0px';
    document.body.appendChild(textarea);
    textarea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    if (successful) {
      triggerSuccessConfetti();
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to copy HTML code:', error);
    return false;
  }
}

/**
 * Helper to generate canvas from DOM element without breaking on CORS images or SVG Data URIs.
 */
async function generateCanvas(element: HTMLElement): Promise<HTMLCanvasElement | null> {
  try {
    const { toCanvas } = await import('html-to-image');
    const canvas = await toCanvas(element, {
      pixelRatio: 2,
      backgroundColor: '#ffffff',
      skipFonts: true,
      cacheBust: false,
    });
    return canvas;
  } catch (err) {
    console.warn('html-to-image toCanvas failed, attempting clean fallback:', err);
    // Fallback: draw directly to canvas if html-to-image threw on CORS image
    try {
      const { toCanvas } = await import('html-to-image');
      return await toCanvas(element, {
        pixelRatio: 1,
        backgroundColor: '#ffffff',
        skipFonts: true,
      });
    } catch (e) {
      console.error('Canvas generation failed entirely:', e);
      return null;
    }
  }
}

/**
 * Export signature element as PNG image file.
 */
export async function exportToPng(element: HTMLElement, fileName = 'firma-calmecac.png'): Promise<boolean> {
  try {
    const canvas = await generateCanvas(element);
    if (!canvas) return false;

    const dataUrl = canvas.toDataURL('image/png');
    downloadFile(dataUrl, fileName);
    triggerSuccessConfetti();
    return true;
  } catch (error) {
    console.error('Failed to export PNG:', error);
    return false;
  }
}

/**
 * Export signature element as JPG image file.
 */
export async function exportToJpg(element: HTMLElement, fileName = 'firma-calmecac.jpg'): Promise<boolean> {
  try {
    const canvas = await generateCanvas(element);
    if (!canvas) return false;

    const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
    downloadFile(dataUrl, fileName);
    triggerSuccessConfetti();
    return true;
  } catch (error) {
    console.error('Failed to export JPG:', error);
    return false;
  }
}

/**
 * Export signature element as PDF document.
 */
export async function exportToPdf(element: HTMLElement, fileName = 'firma-calmecac.pdf'): Promise<boolean> {
  try {
    const canvas = await generateCanvas(element);
    if (!canvas) return false;

    const { jsPDF } = await import('jspdf');
    const dataUrl = canvas.toDataURL('image/png');
    
    const widthPx = element.offsetWidth || 500;
    const heightPx = element.offsetHeight || 200;

    const pdfWidth = Math.max(120, widthPx * 0.264583 + 20);
    const pdfHeight = heightPx * 0.264583 + 20;

    const pdf = new jsPDF({
      orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(dataUrl, 'PNG', 10, 10, widthPx * 0.264583, heightPx * 0.264583);
    pdf.save(fileName);
    
    triggerSuccessConfetti();
    return true;
  } catch (error) {
    console.error('Failed to export PDF:', error);
    return false;
  }
}

function downloadFile(dataUrl: string, filename: string) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function stripHtml(html: string): string {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}
