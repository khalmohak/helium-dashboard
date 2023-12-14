import type { Metadata } from 'next'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, LegacyCard, Button} from '@shopify/polaris';
import React from "react";
// import Link from "next/link";
// import AppBridgeProvider from "@/lib/providers/AppBridgeProvider";
import '@shopify/polaris/build/esm/styles.css';

export const metadata: Metadata = {
  title: 'Helium Dashboard Dev',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
          <AppProvider i18n={enTranslations}>
              <Page title="Example app">
                  <LegacyCard sectioned>
                      <Button onClick={() => alert('Button clicked!')}>Example button</Button>
                  </LegacyCard>
              </Page>
          </AppProvider>
      </>
  )
}
