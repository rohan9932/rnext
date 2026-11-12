import blogs from "@/app/data/blogs";
import { Suspense } from "react";

// we can use this to optimize when we know the data at build time
// it doesn't get rendered at run time but at build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

async function BlogContent({ params }) {
  const { id } = await params;
  const blog = blogs.find((blog) => blog.id === id);
  const { title, description } = blog;

  return (
    <>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-lg mt-6">{description}</p>
    </>
  );
}

export default function BlogDetailPage({ params }) {
  return (
    <div className="p-8">
      <Suspense fallback={<div>Loading blog...</div>}>
        <BlogContent params={params} />
      </Suspense>
    </div>
  );
}
