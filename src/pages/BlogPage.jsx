// src/pages/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogPost } from '../data/BlogData';

const BlogPage = () => {
  const posts = Array.isArray(BlogPost) ? BlogPost : [];
  const hasPosts = posts.length > 0;
  const featuredPost = hasPosts ? posts[0] : null;
  const otherPosts = hasPosts ? posts.slice(1) : [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-28 pb-20 relative overflow-hidden">
        {/* Subtle glows */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 -right-10 h-72 w-72 bg-[#e1b11b]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-10 h-72 w-72 bg-zinc-700/40 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-zinc-400 mb-3">
                NAS AUTO SPA • JOURNAL
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-[#e1b11b] mb-4">
                Detailing Insights & Care Guides
              </h1>
              <p className="text-sm md:text-base text-zinc-300 max-w-2xl">
                Learn how to protect, maintain, and elevate your vehicle. Real-world detailing tips,
                ceramic coating insights, winter prep guides, interior resets, and fleet care — from
                Fairfield County’s top mobile detailers.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e1b11b] text-black text-sm md:text-base font-semibold hover:bg-[#e1b11b]/90 transition"
              >
                View Detailing Services
              </Link>
              <p className="text-xs text-zinc-400 italic">
                Your cars, our passion — your gloss, our obsession.
              </p>
            </div>
          </header>

          {/* No posts fallback */}
          {!hasPosts && (
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-10 backdrop-blur">
              <h2 className="text-xl font-semibold text-[#e1b11b] mb-3">
                Blog coming soon
              </h2>
              <p className="text-sm text-zinc-300 mb-4">
                We’re putting together in-depth guides on paint protection, winter prep, ceramic coatings,
                interior resets, and maintaining that “just detailed” look for longer.
              </p>
              <p className="text-xs text-zinc-500">
                Check back soon or follow us on social media for updates.
              </p>
            </div>
          )}

          {/* Featured post */}
          {hasPosts && featuredPost && (
            <section className="mb-12">
              <div className="grid md:grid-cols-[1.2fr,0.9fr] gap-8 items-stretch">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:-translate-y-1 hover:border-[#e1b11b]/70 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,_#e1b11b_0,_transparent_55%)]" />
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">
                    Featured Article
                  </p>

                  <h2 className="relative text-2xl md:text-3xl font-semibold text-[#e1b11b] mb-3">
                    {featuredPost.title}
                  </h2>

                  {featuredPost.date && (
                    <p className="relative text-xs text-zinc-400 mb-4">
                      {featuredPost.date}
                    </p>
                  )}

                  <p className="relative text-sm md:text-base text-zinc-200 mb-5 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="relative flex items-center gap-3 text-xs text-zinc-300">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#e1b11b]/60 bg-black/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e1b11b]" />
                      Protection • Prep • Care
                    </span>
                    <span className="hidden sm:inline text-zinc-500 group-hover:text-zinc-300 transition">
                      Read article →
                    </span>
                  </div>
                </Link>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-6 py-6 md:px-7 md:py-7 flex flex-col justify-between backdrop-blur">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Why we share this
                    </h3>
                    <p className="text-sm text-zinc-300 mb-4">
                      Proper detailing isn’t just about shine — it’s about preserving value, avoiding
                      damage, and making every drive feel like you just left the shop.
                    </p>
                  </div>
                  <div className="space-y-3 text-xs text-zinc-400">
                    <p className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e1b11b]" />
                      Learn how pros think about prep, protection, and maintenance.
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                      Apply what you read or let us handle everything for you.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Other posts */}
          {otherPosts.length > 0 && (
            <section className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-[0.2em]">
                  More Articles
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 hover:border-[#e1b11b]/60 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mb-3">
                      {post.date && (
                        <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                          {post.date}
                        </p>
                      )}
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#e1b11b] transition">
                        {post.title}
                      </h4>
                    </div>

                    <p className="text-xs text-zinc-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="group-hover:text-zinc-300 transition">
                        Read article →
                      </span>
                      <span className="px-2 py-1 rounded-full border border-zinc-700 text-[10px] uppercase tracking-wider">
                        Detailing
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
