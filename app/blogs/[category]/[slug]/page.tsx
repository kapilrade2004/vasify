import BlogArticlePage from "./BlogArticlePage";

export async function generateMetadata({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/slug/${params.slug}`);
  const data = await res.json();

  const blog = data?.data;
  

  return {
    title: blog?.meta_title || blog?.title,
    description: blog?.meta_description || blog?.excerpt,
    openGraph: {
       title: blog?.title || blog?.meta_title,
      description: blog?.meta_description || blog?.excerpt,
      images: [blog?.featured_image || "/default.jpg"],
    },
  };
}

export default function Page() {
  return <BlogArticlePage />;
}
