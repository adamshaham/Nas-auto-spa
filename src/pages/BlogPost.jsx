// src/pages/BlogPost.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogPost } from '../data/BlogData';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // change to "auto" if you want instant jump
    });
  }, [slug]);

  const posts = Array.isArray(BlogPost) ? BlogPost : [];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-32 max-w-4xl mx-auto px-6 pb-16">
          <p className="mb-4 text-zinc-200">Post not found.</p>
          <button
            onClick={() => navigate('/blog')}
            className="px-4 py-2 rounded-full bg-[#e1b11b] text-black font-semibold hover:bg-[#e1b11b]/90 transition"
          >
            Back to Blog
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Soft glows */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 -left-10 h-72 w-72 bg-[#e1b11b]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-10 h-72 w-72 bg-zinc-700/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Back + CTA */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200 transition"
            >
              <span className="text-lg leading-none">←</span>
              <span>Back to Blog</span>
            </button>

            {/* 🔥 Book a Detail → pricing on home */}
            <Link
              to="/#pricing"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e1b11b] text-black text-xs font-semibold hover:bg-[#e1b11b]/90 transition"
            >
              Book a Detail
            </Link>
          </div>

          {/* Hero */}
          <header className="mb-10 border-b border-zinc-800 pb-6">
            <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-400 mb-3">
              NAS AUTO SPA • ARTICLE
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#e1b11b] mb-3">
              {post.title}
            </h1>

            {post.date && (
              <p className="text-xs text-zinc-400 mb-4">
                {post.date}
              </p>
            )}

            {post.excerpt && (
              <p className="text-sm md:text-base text-zinc-200 max-w-2xl">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Content */}
          <article className="text-[15px] md:text-base leading-relaxed">
            {typeof post.content === 'string' ? (
              <div
                className="space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              post.content
            )}
          </article>

          {/* Bottom CTA */}
          <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white mb-1">
                Want this handled by pros?
              </p>
              <p className="text-xs text-zinc-400 max-w-md">
                We turn everything you just read into a full-service detail — from prep and protection to that deep gloss finish.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* 🔥 View Packages → pricing on home */}
              <Link
                to="/#pricing"
                className="px-5 py-2 rounded-full bg-[#e1b11b] text-black text-sm font-semibold hover:bg-[#e1b11b]/90 transition"
              >
                View Packages
              </Link>
              <a
                href="tel:+19293076986"
                className="px-5 py-2 rounded-full border border-zinc-600 text-sm text-zinc-200 hover:border-[#e1b11b] hover:text-[#e1b11b] transition"
              >
                Call / Text (929) 307-6986
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
