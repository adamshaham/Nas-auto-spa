import {
  BUSINESS_EMAIL,
  BUSINESS_ID,
  BUSINESS_PHONE,
  SITE_NAME,
  SITE_URL,
  toAbsoluteUrl,
} from './site';

export const businessProvider = () => ({
  '@type': 'AutoDetailing',
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  url: SITE_URL,
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

export const locationServiceSchema = ({
  city,
  path,
  description,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `Mobile Auto Detailing in ${city}, CT`,
  description,
  provider: businessProvider(),
  areaServed: {
    '@type': 'City',
    name: city,
    containedInPlace: { '@type': 'State', name: 'Connecticut' },
  },
  url: toAbsoluteUrl(path),
});

export const servicePageSchema = ({
  name,
  description,
  path,
  offers,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: businessProvider(),
  areaServed: {
    '@type': 'County',
    name: 'Fairfield County, Connecticut',
  },
  url: toAbsoluteUrl(path),
  ...(offers ? { offers } : {}),
});

export const articleSchema = ({
  title,
  description,
  path,
  datePublished,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  datePublished,
  url: toAbsoluteUrl(path),
  mainEntityOfPage: toAbsoluteUrl(path),
  author: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
  },
});
