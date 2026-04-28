'use client'

import { Navigation } from '../shared/Navigation'
import { Footer } from '../shared/Footer'
import { AnimatedBackground } from '../shared/AnimatedBackground'
import { AnimatedClouds } from '../shared/AnimatedClouds'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import { Button } from '../../../ui-components/button'
import { Card } from '../../../ui-components/card'

export default function PricingPage() {
  const router = useRouter()

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses just starting',
      price: '$29',
      period: '/month',
      popular: false,
      features: [
        'Up to 5 users',
        'Basic product catalog',
        'Order management',
        'Email support',
        'Basic analytics',
        'Mobile app access',
        'Community forum access',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      description: 'For growing businesses with more demands',
      price: '$99',
      period: '/month',
      popular: true,
      features: [
        'Up to 50 users',
        'Advanced product management',
        'Order & inventory tracking',
        'Priority email support',
        'Advanced analytics & reports',
        'Mobile app access',
        'API access',
        'Custom integrations',
        'Team collaboration tools',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Enterprise',
      description: 'For large-scale operations',
      price: 'Custom',
      period: 'pricing',
      popular: false,
      features: [
        'Unlimited users',
        'Custom features',
        'Multi-warehouse support',
        '24/7 dedicated support',
        'Custom analytics & reporting',
        'Advanced security features',
        'White-label options',
        'Dedicated account manager',
        'Custom SLA',
        'On-premise deployment option',
      ],
      cta: 'Contact Sales',
    },
  ]

  const addOns = [
    { name: 'Advanced Analytics', price: '$49', description: 'Deep insights and custom reports' },
    { name: 'API Access', price: '$25', description: 'Full API for integrations' },
    { name: 'Priority Support', price: '$99', description: '24/7 dedicated support team' },
    { name: 'White Label', price: '$199', description: 'Customize branding and domain' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-56 mt-8 text-center">
          <AnimatedClouds />
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 animate-slide-in-bottom">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-bottom pb-6" style={{ animationDelay: '0.1s' }}>
            Choose the plan that best fits your business needs. All plans include a 14-day free trial.
          </p>
        </section>

      {/* Billing Toggle */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 pb-56 flex justify-center">
        <div className="flex items-center gap-4 bg-muted p-1 rounded-lg">
          <button className="px-4 py-2 rounded-md text-foreground font-medium bg-background">
            Monthly
          </button>
          <button className="px-4 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors">
            Annual
            <span className="ml-2 text-xs font-semibold text-primary">Save 20%</span>
          </button>
        </div>
      </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 border transition-all duration-300 relative animate-slide-in-bottom ${ plan.popular
                  ? 'border-primary bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 lg:scale-105 shadow-xl hover:animate-pulse-glow'
                  : 'border-border bg-card hover:shadow-lg hover:animate-pulse-glow'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period !== 'pricing' && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <Button
                onClick={() => router.push('/login')}
                className={`w-full mb-8 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'border border-border text-foreground hover:bg-muted'
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-primary/5 rounded-xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Add-on Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => (
            <Card
              key={index}
              className="p-6 border border-border bg-background hover:border-primary/50 transition-all duration-300 text-center"
            >
              <h3 className="font-semibold text-foreground mb-2">{addon.name}</h3>
              <p className="text-2xl font-bold text-primary mb-3">{addon.price}</p>
              <p className="text-sm text-muted-foreground">{addon.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Starter</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Professional</th>
                <th className="text-center py-4 px-4 font-semibold text-foreground">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'User Accounts', starter: '5', pro: '50', enterprise: 'Unlimited' },
                { feature: 'Product Listings', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                { feature: 'Order Management', starter: 'Yes', pro: 'Yes', enterprise: 'Yes' },
                { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                { feature: 'API Access', starter: 'No', pro: 'Yes', enterprise: 'Yes' },
                { feature: 'Email Support', starter: 'Yes', pro: 'Priority', enterprise: '24/7' },
                { feature: 'Custom Integrations', starter: 'No', pro: 'Yes', enterprise: 'Yes' },
                { feature: 'White Label', starter: 'No', pro: 'No', enterprise: 'Yes' },
              ].map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.starter}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.pro}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Pricing FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: 'Can I change plans anytime?',
              a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.',
            },
            {
              q: 'Do you offer a free trial?',
              a: 'Yes, we offer a 30-day free trial with full access to the Professional plan features.',
            },
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, bank transfers, and wire payments for Enterprise plans.',
            },
            {
              q: 'Is there a money-back guarantee?',
              a: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with our service.',
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
            Start Your Free Trial Today
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            No credit card required. Full access to all Professional features for 30 days.
          </p>
          <Button
            onClick={() => router.push('/login')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            Start Free Trial
          </Button>
        </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
