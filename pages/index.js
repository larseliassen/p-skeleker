import Head from "next/head";
import Image from "next/image";
import Menu from "@components/Menu";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Påskeleker 2023 - Solstua</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>
      <main style={{display:"flex",alignItems:"center",height:"100%",justifyContent:"center"}}>
        <div>
          <h1>PÅSKE <br/> LEKER <br/> 2023 </h1>
        </div>      
      </main>
    </div>
  );
}
