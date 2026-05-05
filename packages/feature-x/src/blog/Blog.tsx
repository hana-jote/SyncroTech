"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { AnimatedBackground } from "../shared/AnimatedBackground";
import { AnimatedClouds } from "../shared/AnimatedClouds";
import { Footer } from "../shared/Footer";
import { Navigation } from "../shared/Navigation";

import { Button } from "@repo/ui-components/button";
import { Card } from "@repo/ui-components/card";

import { ArrowRight, Calendar, Clock, Search, Tag, User } from "lucide-react";

export default function BlogPage() {
  const router = useRouter();

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Supply Chain Management",
      description:
        "Discover how artificial intelligence helps businesses improve logistics, forecasting, and operational efficiency.",
      category: "Technology",
      author: "TradeBridge Team",
      date: "May 2, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "Best Practices for Retailers in 2026",
      description:
        "Learn how retailers can streamline operations and improve customer experience using smart tools.",
      category: "Retail",
      author: "John Smith",
      date: "April 28, 2026",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "The Future of Logistics and Automation",
      description:
        "Automation and digital transformation are reshaping the logistics industry faster than ever before.",
      category: "Logistics",
      author: "Sarah Johnson",
      date: "April 20, 2026",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      title: "How Drivers Improve Delivery Performance",
      description:
        "Explore strategies drivers use to reduce delays and optimize transportation routes.",
      category: "Drivers",
      author: "Emma Davis",
      date: "April 15, 2026",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 5,
      title: "Smart Inventory Management Tips",
      description:
        "Inventory optimization techniques that help distributors and retailers reduce operational costs.",
      category: "Inventory",
      author: "Michael Chen",
      date: "April 10, 2026",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 6,
      title: "Why Data Analytics Matters in Business",
      description:
        "Understand how analytics empowers businesses to make smarter and faster decisions.",
      category: "Analytics",
      author: "TradeBridge Team",
      date: "April 5, 2026",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative z-10">
        {/* Navbar */}
        <Navigation />

        {/* HERO SECTION */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-48 mt-20 text-center relative">
          <AnimatedClouds />

          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

          {/* Hero Content */}
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Glass Card */}
            <div className="rounded-[40px] border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-2xl p-10 md:p-14 relative overflow-hidden">
              {/* Mirror Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>

              <h1 className="text-5xl sm:text-7xl font-black text-foreground mb-6 animate-slide-in-bottom">
                TradeBridge{" "}
                <span className="bg-linear-to-r from-blue-600 via-cyan-500 to-sky-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-in-bottom delay-100">
                Explore insights, strategies, and innovations in supply chain,
                logistics, AI, and business growth.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative animate-slide-in-bottom">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />

                <input
                  type="text"
                  placeholder="Search blog articles..."
                  className="w-full h-14 rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl px-14 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED BLOG */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-[40px] border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
            {/* Mirror Layer */}
            <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-100">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                  alt="Featured Blog"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center relative z-10">
                <div className="flex items-center gap-2 text-cyan-500 font-semibold mb-4">
                  <Tag className="w-4 h-4" />
                  Featured Article
                </div>

                <h2 className="text-4xl font-black text-foreground mb-6">
                  Smart Technology is Revolutionizing Modern Supply Chains
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Learn how businesses are using AI, automation, and analytics
                  to improve inventory management, logistics, and customer
                  satisfaction.
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    TradeBridge Team
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    May 2, 2026
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />8 min read
                  </div>
                </div>

                <Button
                  onClick={() => router.push("/login")}
                  className="w-fit bg-linear-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG CARDS */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-16">
            Latest Articles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl animate-slide-in-bottom group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>

                    <Link
                      href="/"
                      className="flex items-center gap-2 text-cyan-500 font-semibold hover:text-cyan-400 transition"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-[40px] border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-2xl p-12 text-center relative overflow-hidden">
            {/* Mirror Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-white/5 pointer-events-none"></div>

            <h3 className="text-4xl font-black text-foreground mb-6 relative z-10">
              Stay Updated with{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                TradeBridge
              </span>
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">
              Get the latest insights, business strategies, and technology
              trends delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button
                onClick={() => router.push("/login")}
                size="lg"
                className="bg-linear-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90"
              >
                Subscribe Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 hover:bg-white/20"
              >
                Explore Platform
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
