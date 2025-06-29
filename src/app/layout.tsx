'use client';

import { Raleway, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  primaryColor: "gray",
  primaryShade: { light: 8, dark: 4 },
  other: {
    // define custom colors here
  }
});

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--mantine-color-gray': theme.colors.gray[8],
    '--background-color': theme.colors.gray[4],
  },
  dark: {
    '--mantine-color-gray': theme.colors.gray[4],
    '--mantine-color-body': theme.colors.dark[9],
    '--background-color': theme.colors.dark[4]
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
        className={`${raleway.variable} antialiased`}
      >
        <ColorSchemeScript />
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <Header />
          <div style={{ padding: '0% 5%' }}>
            {children}
          </div>
          <Footer />
        </MantineProvider>

      </body>
    </html>
  );
}
