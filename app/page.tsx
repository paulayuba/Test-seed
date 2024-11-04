
import BastDeals from "@/components/BastDeals";

import Ecommerce from "@/components/Ecommerce";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar"
import Pricing from "@/components/Pricing";
import ProductGategories from "@/components/ProductGategories";
import Shoping from "@/components/Shoping";


export default function Home() {
  return (
<div>
  <Navbar />
  <Header />
  <Pricing />
  <BastDeals />
  <ProductGategories />
  <Ecommerce />
  <Shoping />
  <Footer />
</div>
         
  );
}
