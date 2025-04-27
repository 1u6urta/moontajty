import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add any other config options you need here
};

export default withNextIntl(nextConfig);
