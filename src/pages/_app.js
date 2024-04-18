import "@/styles/globals.css";
import "@/styles/admin.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MainContext from "@/storage/MainContext";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const queryClient = new QueryClient();

  return (
    <MainContext>
      <Head>
        <title>Nairobi Pentecostal Bible College</title>
        <meta
          name="description"
          content="Nurturing potential, building character"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/layout/npbc-logo-2.png" />
      </Head>

      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </MainContext>
  );
}
