import Head from "next/head";

import { Products } from "../components/products";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 p-20 text-center">
        <h1 className="text-4xl">Sample Shop</h1>
        <Products />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        footer
      </footer>
    </div>
  );
}
