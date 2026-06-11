import { getBlogBySlug, getAllBlogSlugs } from "@/data/blog";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);
  if (!post) return { title: "Blog Post Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary-600 hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← All Posts
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-white/60 text-sm">{post.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
          <p className="text-white/70 mt-2 text-sm">
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Need Help with This Service?</h3>
            <p className="text-gray-600 mb-4">Contact us for fast, reliable assistance.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919145564291"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-all"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+919145564291"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
