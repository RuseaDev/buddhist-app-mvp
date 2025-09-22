import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <>
    
    <Hero />
    <section className="mx-auto max-w-7xl space-y-5 lg:space-y-6">
      <Card title="Foundations" subtitle="Subheading" body="Body text for your whole article or post." />
    </section>
    
    <Footer />

    </>
    
    
  );
}
