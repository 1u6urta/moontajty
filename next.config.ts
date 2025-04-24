import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import nextIntlConfig from './next-intl.config';
 
const nextConfig: NextConfig = {
 i18n: {
    locales: nextIntlConfig.locales,
    defaultLocale: nextIntlConfig.defaultLocale,
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
