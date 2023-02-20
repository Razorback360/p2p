import type { AppProps } from "next/app";
import Layout from "@p2p/components/Layout/Layout";

import "../styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { locale, locales, asPath } = useRouter();


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
