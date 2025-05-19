'use client';

import { Raleway, Geist_Mono } from "next/font/google";
import Header from "../components/Header";

import "./globals.css";
// core styles are required for all packages
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, CSSVariablesResolver, ColorSchemeScript, mantineHtmlProps } from '@mantine/core';

const raleway = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  other: {
    greyLight: '#495057',
    greyDark: '#b8b8b8'
  }
});

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--mantine-color-gray': theme.other.greyLight,
  },
  dark: {
    '--mantine-color-gray': theme.other.greyDark,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body
        className={`${raleway.variable} ${geistMono.variable} antialiased`}
      >
        <ColorSchemeScript />
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>

          <Header />

          {children}
        </MantineProvider>

      </body>
    </html>
  );
}
