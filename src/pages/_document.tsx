import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/output.css" rel="stylesheet" />
      </Head>
      <body className="antialiased bg-gray-100 dark:bg-black transition-colors overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
