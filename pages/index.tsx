import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Aboutus from "../components/cockponents/Aboutus";
import Community from "../components/cockponents/Community";
import Footer from "../components/cockponents/Footer";
import FQA from "../components/cockponents/FQA";
import Header from "../components/cockponents/Header";
import Navbar from "../components/cockponents/Navbar";
import Roadmap from "../components/cockponents/Roadmap";


const Template2: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cockmaster</title>
        <meta name="description" content="This NFT Landing Page" />
        <link rel="Cock Icon" href="fullbody.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo title="Cockmaster" description="Cockmaster NFT Collection" />
      <div id="home">
        <div className="bg-[url('../public/grass.png')]">
          <Navbar />
        </div>
        <Header />
        <div className="gradient_header_tem1">
          <Aboutus />
        </div>
        <Roadmap />
        <div className="bg-[url('../public/grass.png')] bg-[center_bottom_100px]">
          <FQA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Template2;