import Head from "next/head";
import Link from "next/link";

import colors from "../data/colors.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colors SSR!</title>
        <meta name="description" content="App that displays pretty colors to learn Next!" />
      </Head>
      <h3>Hello</h3>
      {colors.map((color) => (
        <Link href={`/${color.name}`}>
          <h2>{color.name}</h2>
        </Link>
      ))}
    </div>
  );
}
