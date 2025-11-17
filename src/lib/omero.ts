export const OMERO_BASE = '/omero';

export function omeroLoginUrl(returnTo: string): string {
  const next = encodeURIComponent(returnTo);
  return `${OMERO_BASE}/webclient/login/?next=${next}`;
}

export function iviewerUrlForImage(imageId: number | string): string {
  return `${OMERO_BASE}/iviewer/?images=${imageId}`;
}

export function thumbnailUrl(imageId: number | string): string {
  return `${OMERO_BASE}/webgateway/thumbnail/${imageId}/`;
}
