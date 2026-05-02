'use client'

import { Navigation } from '../shared/Navigation'
import { Footer } from '../shared/Footer'
import { AnimatedBackground } from '../shared/AnimatedBackground'
import { AnimatedClouds } from '../shared/AnimatedClouds'
import { Button } from '@repo/ui-components/button'
import { Card } from '@repo/ui-components/card'
import { Input } from '@repo/ui-components/input'
import { Textarea } from '@repo/ui-components/textarea'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@tradebridge.com',
      subtext: 'Response within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      subtext: 'Mon-Fri, 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Business Ave, New York, NY',
      subtext: 'Office hours: Mon-Fri 9AM-6PM',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      content: 'Chat with our team',
      subtext: 'Available 24/7',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <Navigation />
      <AnimatedBackground />
      <AnimatedClouds />
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-56 my-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Have questions about TradeBridge? We're here to help. Reach out to our team 
       
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <Card
                key={index}
                className="p-6 border border-border bg-card hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="font-medium text-primary mb-2">{method.content}</p>
                <p className="text-sm text-muted-foreground">{method.subtext}</p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border border-border bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                {submitted && (
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      Thank you! We&apos;ve received your message and will get back to you soon.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 border border-border bg-primary/5">
              <h3 className="text-lg font-semibold text-foreground mb-4">Response Time</h3>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    We aim to respond to all inquiries within 24 business hours.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For urgent matters, please call our support hotline.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-border bg-secondary/5">
              <h3 className="text-lg font-semibold text-foreground mb-4">Office Hours</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                  aria-label="Facebook"
                >
                  f
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-primary/5 rounded-xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            {
              q: 'How quickly will I hear back?',
              a: 'We typically respond to emails within 24 hours during business hours.',
            },
            {
              q: 'Do you offer phone support?',
              a: 'Yes, our support team is available by phone during business hours. Call +1 (555) 123-4567.',
            },
            {
              q: 'Can I schedule a demo?',
              a: 'Absolutely! Fill out the contact form or call us to schedule a personalized demo.',
            },
            {
              q: 'Do you have a partnership program?',
              a: 'Yes, we have partnerships available. Contact our partnerships team for more information.',
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="p-6 border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-sm text-muted-foreground">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
