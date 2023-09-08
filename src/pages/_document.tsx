import { Html, Head, Main, NextScript } from "next/document";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html;charset=UTF-8"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
