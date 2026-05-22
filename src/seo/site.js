export const SITE_URL = 'https://www.nasautospa.com';
export const SITE_NAME = 'NAS Auto Spa LLC';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/social-share.png`;
export const DEFAULT_OG_IMAGE_ALT =
  'NAS Auto Spa - Mobile Auto Detailing in Fairfield County CT';
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const BUSINESS_PHONE = '+1-929-307-6986';
export const BUSINESS_EMAIL = 'contact@nasautospa.com';

export const PRERENDER_ROUTES = [
  '/',
  '/services',
  '/about',
  '/gallery',
  '/service-areas-fairfield-county-ct',
  '/blog',
  '/blog/winter-prep-detailing-fairfield-county',
  '/blog/ceramic-coating-vs-wax',
  '/blog/interior-deep-clean-vs-quick-vacuum',
  '/blog/why-fleet-washing-matters',
  '/mobile-detailing-fairfield-county-ct',
  '/paint-correction-fairfield-county-ct',
  '/ceramic-coating-fairfield-county-ct',
  '/fleet-detailing-fairfield-county-ct',
  '/fairfield-ct',
  '/stamford-ct',
  '/greenwich-ct',
  '/westport-ct',
  '/norwalk-ct',
  '/southport-ct',
  '/stratford-ct',
  '/milford-ct',
  '/trumbull-ct',
];

export const toAbsoluteUrl = (path = '/') => {
  if (!path || path === '/') {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
