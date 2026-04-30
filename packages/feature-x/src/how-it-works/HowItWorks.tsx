'use client'
/// <reference path="../types/next-navigation.d.ts" />

import React from 'react'
import { Navigation } from '../shared/Navigation'
import { Footer } from '../shared/Footer'
import { AnimatedBackground } from '../shared/AnimatedBackground'
import { AnimatedClouds } from '../shared/AnimatedClouds'
import { Button } from '../../../ui-components/button'
import { Card } from '../../../ui-components/card'
import { useRouter } from 'next/navigation'
import { ShoppingCart, Truck, BarChart3, MessageSquare, CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const router = useRouter()

  const steps = [
    {
      icon: ShoppingCart,
      title: 'Browse & Order',
      description: 'Retailers browse available products from factories and distributors, and place orders with just a few clicks.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BarChart3,
      title: 'Track & Manage',
      description: 'Real-time tracking and inventory management helps optimize stock levels and reduce wastage.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Truck,
      title: 'Deliver & Complete',
      description: 'Drivers receive delivery assignments and provide real-time location updates to ensure timely delivery.',
      color: 'from-blue-500 to-purple-600',
    },
    {
      icon: MessageSquare,
      title: 'Communicate',
      description: 'Direct messaging between all stakeholders enables quick problem resolution and builds strong relationships.',
      color: 'from-purple-500 to-blue-600',
    },
  ]

  const roles = [
    {
      role: 'Retailers',
      icon: ShoppingCart,
      benefits: [
        'Easy product discovery and ordering',
        'Multiple supplier options',
        'Real-time order tracking',
        'Direct communication with suppliers',
        'Competitive pricing',
        'Flexible payment options',
      ],
    },
    {
      role: 'Factories',
      icon: BarChart3,
      benefits: [
        'Direct access to retailers',
        'Sales analytics and insights',
        'Inventory management tools',
        'Bulk order management',
        'Production planning',
        'Customer relationship management',
      ],
    },
    {
      role: 'Distributors',
      icon: Truck,
      benefits: [
        'Network of buyers and sellers',
        'Logistics optimization',
        'Warehouse management',
        'Cross-selling opportunities',
        'Real-time demand forecasting',
        'Performance analytics',
      ],
    },
    {
      role: 'Drivers',
      icon: MessageSquare,
      benefits: [
        'Clear delivery assignments',
        'Real-time routing',
        'Navigation assistance',
        'Delivery proof capture',
        'Direct communication',
        'Performance tracking',
      ],
    },
  ]

  const features = [
    {
      title: 'Unified Dashboard',
      description: 'All stakeholders have access to customized dashboards with relevant metrics and insights.',
    },
    {
      title: 'Real-Time Analytics',
      description: 'Track performance metrics, sales, inventory, and deliveries in real-time for better decision-making.',
    },
    {
      title: 'Secure Transactions',
      description: 'Bank-level security ensures all transactions and communications are protected.',
    },
    {
      title: 'Mobile-First Design',
      description: 'Seamlessly work on desktop, tablet, or smartphone with our responsive platform.',
    },
    {
      title: 'Advanced Search',
      description: 'Find products, orders, and contacts quickly with our intelligent search system.',
    },
    {
      title: 'Integration Ready',
      description: 'API access allows integration with your existing business systems.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted relative overflow-hidden">
     

      <div className="relative z-10">
        <Navigation />
 
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-56 my-8 text-center relative">
          <AnimatedBackground />
          <AnimatedClouds />
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 animate-slide-in-bottom">How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
              TradeBridge connects all participants in the supply chain for seamless collaboration and efficiency.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative animate-slide-in-bottom" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="p-6 border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full hover:animate-pulse-glow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary animate-float" />
                      </div>
                      <span className="text-2xl font-bold text-muted-foreground opacity-50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-1 bg-gradient-to-r from-primary to-secondary animate-glow" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Role-Based Benefits */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center animate-fade-in">For Every Role</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {roles.map((roleItem, index) => {
              const Icon = roleItem.icon
              return (
                <Card
                  key={index}
                  className="p-6 border border-border bg-card hover:border-primary/50 transition-all duration-300 animate-slide-in-bottom hover:animate-pulse-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-6">{roleItem.role}</h3>
                <ul className="space-y-3">
                  {roleItem.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-primary/5 rounded-xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: 'How do I get started?',
              a: 'Sign up for a free account, select your role (retailer, factory, distributor, driver, or admin), and complete your profile. You can start using TradeBridge immediately.',
            },
            {
              q: 'Is there a trial period?',
              a: 'Yes, we offer a 30-day free trial with full access to all features for new users.',
            },
            {
              q: 'How secure is my data?',
              a: 'We use bank-level encryption and comply with international security standards to protect your data.',
            },
            {
              q: 'Can I integrate with my existing systems?',
              a: 'Yes, our API allows seamless integration with your existing business systems and workflows.',
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="p-6 border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-sm text-muted-foreground">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using TradeBridge to streamline their operations.
          </p>
          <Button
            onClick={() => router.push('/login')}
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
  )
}
