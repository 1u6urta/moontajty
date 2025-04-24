import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import nextIntlConfig from './next-intl.config';
 
const nextConfig: NextConfig = {};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
