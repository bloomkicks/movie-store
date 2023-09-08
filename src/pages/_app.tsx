import "../globals.scss";

import Head from "next/head";
import store from "@/store";
import { Provider } from "react-redux";

import Header from "@/components/layout/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";

const queryClient = new QueryClient();
const inter = Inter({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Movie Store</title>
        <meta
          name="description"
          content="Here you can find a movie just for you"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <style jsx global>
            {`
              html,
              body {
                font-family: ${inter.style.fontFamily}, Roboto,
                  system-ui, -apple-system, sans-serif;
              }
            `}
          </style>
          <Header />
          <Component {...pageProps} className={inter.className} />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
