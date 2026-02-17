import { Inter } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "next-themes";
import Header from "@/copmonents/sections/Header";
import { cookies } from "next/headers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html
      lang={locale}
      className={theme}
      style={{ colorScheme: theme }}
      suppressHydrationWarning
    >
      <body className={`${inter.variable} min-h-screen w-full antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={theme}
          enableSystem={false}
          enableColorScheme={true}
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Header />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
