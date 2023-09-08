import "../styles/globals.scss";

import Head from "next/head";
import store from "@/store";
import { Provider } from "react-redux";

import Header from "@/components/layout/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
const queryClient = new QueryClient();

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
          <Header />
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
