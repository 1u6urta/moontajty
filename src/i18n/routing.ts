import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['ar', 'fr', 'en','tz'],
 
  defaultLocale: 'ar',
  localeDetection: true,
});