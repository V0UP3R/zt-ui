import createMiddleware from 'next-intl/middleware';
import { i18n } from '@/i18n/config';

export default createMiddleware(i18n);
 
export const config = {
  matcher: ['/', '/(pt|es|en)/:path*']
};