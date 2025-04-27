import Navbar from "@/_Components/Navbar";
import "./globals.css";
import { routing } from '@/i18n/routing';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import { getMessages } from 'next-intl/server';


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params : Promise<{locale : string}>
}) {
  const {locale} = await params;
if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={locale === 'ar' ? 'rtl' : ''}>
        <NextIntlClientProvider>
          <>
            <Navbar></Navbar>
            {children}
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
