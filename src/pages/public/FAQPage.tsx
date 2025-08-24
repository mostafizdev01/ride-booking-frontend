
import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link } from "react-router"

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I sign up for RideShare?",
          answer:
            "You can sign up by downloading our mobile app or visiting our website. Simply create an account with your email, verify your phone number, and you're ready to start booking rides or driving.",
        },
        {
          question: "What cities does RideShare operate in?",
          answer:
            "RideShare currently operates in over 100 cities across the United States and Canada. You can check if we're available in your area by entering your location in our app.",
        },
        {
          question: "Is RideShare available 24/7?",
          answer:
            "Yes! RideShare operates 24 hours a day, 7 days a week. However, driver availability may vary by location and time of day.",
        },
      ],
    },
    {
      title: "For Riders",
      faqs: [
        {
          question: "How do I book a ride?",
          answer:
            "Open the RideShare app, enter your pickup location and destination, choose your ride type, and tap 'Request Ride'. You'll be matched with a nearby driver within minutes.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept credit cards, debit cards, PayPal, Apple Pay, Google Pay, and cash (in select markets). You can add and manage payment methods in your account settings.",
        },
        {
          question: "Can I schedule a ride in advance?",
          answer:
            "Yes! You can schedule rides up to 30 days in advance. Simply select 'Schedule' when booking and choose your preferred pickup time.",
        },
        {
          question: "What if I need to cancel my ride?",
          answer:
            "You can cancel your ride through the app. If you cancel within 2 minutes of booking, there's no fee. After that, a small cancellation fee may apply.",
        },
        {
          question: "How is the fare calculated?",
          answer:
            "Fares are calculated based on distance, time, and local market rates. You'll see an upfront price estimate before confirming your ride, with no hidden fees.",
        },
      ],
    },
    {
      title: "For Drivers",
      faqs: [
        {
          question: "What are the requirements to become a driver?",
          answer:
            "You must be at least 21 years old, have a valid driver's license, pass a background check, have qualifying vehicle insurance, and own or have access to an eligible vehicle.",
        },
        {
          question: "How much can I earn as a driver?",
          answer:
            "Earnings vary by location, time of day, and how often you drive. Most drivers earn between $15-25 per hour before expenses. You keep 100% of tips.",
        },
        {
          question: "When do I get paid?",
          answer:
            "You can cash out instantly after each ride for a small fee, or receive weekly automatic deposits every Tuesday for rides completed the previous week.",
        },
        {
          question: "What insurance coverage is provided?",
          answer:
            "RideShare provides comprehensive commercial insurance that covers you from the moment you accept a ride request until the trip is complete.",
        },
        {
          question: "Can I drive for other platforms too?",
          answer:
            "Yes, you're free to drive for other ride-sharing platforms. Many of our drivers work with multiple apps to maximize their earning opportunities.",
        },
      ],
    },
    {
      title: "Safety & Security",
      faqs: [
        {
          question: "How do you ensure rider and driver safety?",
          answer:
            "We conduct thorough background checks on all drivers, provide real-time GPS tracking, offer in-app emergency features, and have 24/7 safety support available.",
        },
        {
          question: "What should I do in case of an emergency?",
          answer:
            "Use the emergency button in the app to contact local authorities, or call 911 directly. The app will share your location and trip details with emergency services.",
        },
        {
          question: "How do I report a safety concern?",
          answer:
            "You can report safety concerns through the app immediately after your ride, or contact our safety team at safety@rideshare.com. All reports are taken seriously and investigated promptly.",
        },
        {
          question: "What is the SOS feature?",
          answer:
            "The SOS feature allows you to quickly contact emergency services and share your live location with trusted contacts during a ride. It's accessible with one tap from the ride screen.",
        },
      ],
    },
    {
      title: "Account & Billing",
      faqs: [
        {
          question: "How do I update my payment information?",
          answer:
            "Go to your account settings in the app, select 'Payment Methods', and add, remove, or update your payment information. Changes take effect immediately.",
        },
        {
          question: "Why was I charged a different amount than the estimate?",
          answer:
            "The final fare may differ from the estimate due to route changes, traffic delays, or additional stops. You'll always see a breakdown of charges in your ride receipt.",
        },
        {
          question: "How do I get a receipt for my ride?",
          answer:
            "Receipts are automatically sent to your email after each ride. You can also view and download receipts from your ride history in the app.",
        },
        {
          question: "Can I dispute a charge?",
          answer:
            "Yes, you can dispute charges through the app or by contacting customer support. We'll review your case and issue refunds when appropriate.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about RideShare. Can't find what you're looking for? Contact our support
              team for personalized help.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">No FAQs found matching your search.</p>
                <p className="text-muted-foreground">
                  Try different keywords or{" "}
                  <button onClick={() => setSearchQuery("")} className="text-primary hover:underline">
                    clear your search
                  </button>{" "}
                  to see all questions.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription>
                      {category.faqs.length} question{category.faqs.length !== 1 ? "s" : ""}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our support team is here to help you 24/7. Get in touch and we'll respond as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="flex-1 max-w-sm">
              <CardHeader>
                <CardTitle className="text-lg">Contact Support</CardTitle>
                <CardDescription>Get help from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                  Contact Us
                </Link>
              </CardContent>
            </Card>

            <Card className="flex-1 max-w-sm">
              <CardHeader>
                <CardTitle className="text-lg">Emergency Support</CardTitle>
                <CardDescription>For urgent safety concerns</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  to="https://wa.me/8801722172906"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 w-full"
                >
                  Emergency Line
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
