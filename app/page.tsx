import Field from "@/components/Field";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Field />
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </>
  );
}
