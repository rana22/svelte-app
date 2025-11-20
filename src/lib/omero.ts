
export const OMERO_BASE = 'https://nife-dev.cancer.gov';

export function omeroLoginUrl(returnTo: string): string {
  const next = encodeURIComponent(returnTo);
  return `${OMERO_BASE}/webclient/login/?next=${next}`;
}

export function iviewerUrlForImage(imageId: number | string): string {
  return `https://nife-dev.cancer.gov/webgateway/render_thumbnail/${imageId}`;
}

export function thumbnailUrl(imageId: number | string): string {
  return `https://nife-dev.cancer.gov/webgateway/render_thumbnail/${imageId}`;
}

export async function getImageRenderUrl(imageId: number): Promise<string> {
  const imgDataRes = await fetch(
    `${OMERO_BASE}/webgateway/imgData/${imageId}/`,
    { credentials: 'include' } // use OMERO session cookie
  );

  if (!imgDataRes.ok) {
    throw new Error(`imgData failed: ${imgDataRes.status}`);
  }

  const data = await imgDataRes.json();

  const model = (data.rdefs?.model || 'g') as 'g' | 'c';
  const channels = Array.isArray(data.channels) ? data.channels : [];

  // Build c param from active channels (or all if you prefer)
  const cParts = channels
    .map((ch: any, idx: number) => {
      const chIndex = idx + 1; // OMERO channels are 1-based in URLs
      const start = ch.window?.start ?? 0;
      const end = ch.window?.end ?? 65535;
      const colorHex = (ch.color || '#FFFFFF').replace('#', '');

      return `${chIndex}|${start}:${end}$${colorHex}`;
    });

  const cParam = cParts.join(',');

  return `${OMERO_BASE}/webgateway/render_image/${imageId}/0/0/?m=${model}&c=${encodeURIComponent(
    cParam
  )}&zm=1&max_size=1600`;
}
