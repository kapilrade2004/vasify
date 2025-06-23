import CategoryBlogClient from "./CategoryBlogClient"
// Generate static params for all blog categories
export async function generateStaticParams() {
  return [
    { category: "ecommerce-d2c" },
    { category: "retail-fmcg" },
    { category: "bfsi-fintech" },
    { category: "real-estate" },
    { category: "education-coaching" },
    { category: "healthcare-wellness" },
    { category: "custom-whatsapp" },
  ]
}

export default function CategoryBlogPage() {
  return <CategoryBlogClient />
}
