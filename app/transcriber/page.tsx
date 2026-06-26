import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { products } from "@/lib/products";

const product = products.find((p) => p.id === "transcriber")!;

export const metadata: Metadata = {
  title: `OAISIS ${product.name} — New Age Technologies`,
  description: product.description,
};

export default function Page() {
  return <ProductPage id="transcriber" />;
}