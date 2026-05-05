"use client";

import { Button, Card } from "@repo/ui-components";
import { Award, Target, Users, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "../shared/AnimatedBackground";
import { AnimatedClouds } from "../shared/AnimatedClouds";
import { Footer } from "../shared/Footer";
import { Navigation } from "../shared/Navigation";

export default function About() {
  const router = useRouter();

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We are committed to transforming supply chain management through technology and innovation.",
    },
    {
      icon: Users,
      title: "People-Focused",
      description:
        "Our platform is designed with every stakeholder in mind - from retailers to drivers.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our product and service delivery.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuously innovating to solve real-world supply chain challenges.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "Serial entrepreneur with 15+ years in supply chain technology.",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description:
        "Full-stack engineer passionate about building scalable platforms.",
    },
    {
      name: "Michael Chen",
      role: "VP Product",
      description:
        "Product leader dedicated to user-centric design and innovation.",
    },
    {
      name: "Emma Davis",
      role: "VP Operations",
      description:
        "Operations expert with extensive supply chain management experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-56 my-8 text-center relative">
          <AnimatedClouds />
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 animate-slide-in-bottom">
              About TradeBridge
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-bottom delay-100">
              We&apos;re building the future of supply chain management with
              innovative technology and a commitment to our community.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-primary/5 rounded-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed mb-8">
              To create the most intuitive and efficient supply-demand
              management platform that empowers businesses to make smarter
              decisions, reduce costs, and maximize their operational
              efficiency. We believe that with the right tools and connections,
              every business can thrive in the modern supply chain ecosystem.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border border-border bg-card animate-slide-in-bottom hover:animate-pulse-glow transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Active Users" },
              { number: "50+", label: "Countries" },
              { number: "2M+", label: "Transactions" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center border border-border bg-card"
              >
                <p className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 border border-border bg-card text-center animate-slide-in-bottom hover:animate-pulse-glow transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto mb-4 animate-glow"></div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-xl bg-linear-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 p-12 text-center animate-slide-in-bottom animate-gradient-shift">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join TradeBridge?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey with us today and experience a smarter way to
              manage your supply chain.
            </p>
            <Button
              onClick={() => router.push("/login")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              Get Started Now
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
