import createMiddleware from 'next-intl/middleware';
import intlConfig from '../next-intl.config.js';
 
export default createMiddleware(intlConfig);
  
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
