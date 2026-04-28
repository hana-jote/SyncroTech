'use client'

import { useRouter } from 'next/navigation'
import { Navigation } from '../shared/Navigation'
import { Footer } from '../shared/Footer'
import { AnimatedBackground } from '../shared/AnimatedBackground'
import { AnimatedClouds } from '../shared/AnimatedClouds'
import { ArrowRight, Zap, TrendingUp, Shield, BarChart3, MessageSquare } from 'lucide-react'
import { Button } from '../../../ui-components/button'
import { Card } from '../../../ui-components/card'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-48 mt-24 text-center relative">
          <AnimatedClouds />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 animate-slide-in-bottom">
              Smart Supply-Demand
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift">
                Management System
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
              Connect retailers, factories, distributors, and drivers in one unified platform. 
              Streamline operations, reduce costs, and maximize efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <Button
                onClick={() => router.push('/login')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Powerful Features for Every Role
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Real-Time Analytics',
                description: 'Track performance metrics and make data-driven decisions instantly',
              },
              {
                icon: Shield,
                title: 'Secure Transactions',
                description: 'Bank-level security for all your supply chain operations',
              },
              {
                icon: BarChart3,
                title: 'Advanced Reporting',
                description: 'Comprehensive insights into inventory and order management',
              },
              {
                icon: MessageSquare,
                title: 'Direct Communication',
                description: 'Seamless messaging between all stakeholders in your supply chain',
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Optimized performance for smooth user experience',
              },
              {
                icon: Shield,
                title: 'Multi-Role Support',
                description: 'Tailored interfaces for retailers, factories, distributors, and drivers',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="p-6 border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-in-bottom hover:animate-pulse-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </section>

        {/* User Types Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Built for Everyone
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { role: 'Retailers', description: 'Browse & order products efficiently' },
              { role: 'Factories', description: 'Manage production & sales' },
              { role: 'Distributors', description: 'Optimize inventory & logistics' },
              { role: 'Drivers', description: 'Track & complete deliveries' },
              { role: 'Admins', description: 'Control platform & users' },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center border border-border bg-card hover:bg-primary/5 transition-all duration-300 animate-slide-in-bottom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item.role}
                </h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 p-12 text-center animate-slide-in-bottom animate-gradient-shift">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Supply Chain?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that are already using TradeBridge to streamline their operations.
            </p>
            <Button
              onClick={() => router.push('/login')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
