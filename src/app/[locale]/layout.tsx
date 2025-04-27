import Navbar from "@/_Components/Navbar";
import "./globals.css";
// import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }



export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params : Promise<{locale : string}>
}) {
  const {locale} = await params;
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/Moontajty_dark.png" type="image/x-icon" sizes="32x32"/>
      </head>
      <body className={locale === 'ar' ? 'rtl' : ''}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <>
            <Navbar></Navbar>
            {children}
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
