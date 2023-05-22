import "@/styles/globals.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MainContext from "@/storage/MainContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <MainContext>
      <Component {...pageProps} />
    </MainContext>
  );
}
