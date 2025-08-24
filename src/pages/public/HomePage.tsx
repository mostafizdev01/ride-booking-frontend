
import { ArrowRight, Shield, Clock, DollarSign, Star, Users, MapPin, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router"

const HomePage = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe & Secure",
      description: "Background-checked drivers, real-time tracking, and 24/7 emergency support for your peace of mind.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick & Reliable",
      description: "Get a ride in minutes with our extensive network of drivers available around the clock.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Affordable Rates",
      description: "Transparent pricing with no hidden fees. Compare options and choose what works for your budget.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      content: "RideShare has transformed my daily commute. Safe, reliable, and always on time!",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Driver Partner",
      content: "Great platform for drivers. Fair earnings and flexible schedule that works with my life.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Weekend User",
      content: "Perfect for nights out. Never have to worry about parking or driving after events.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "1M+", label: "Happy Riders" },
    { number: "50K+", label: "Active Drivers" },
    { number: "100+", label: "Cities Served" },
    { number: "99.9%", label: "Uptime" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Ride, <span className="text-primary">Your Way</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the future of transportation with RideShare. Safe, reliable, and affordable rides at your
                fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/register">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <Link to="/features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ride-sharing-app.png"
                alt="RideShare App Interface"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How RideShare Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting around has never been easier. Just three simple steps to your destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">1. Request a Ride</h3>
              <p className="text-muted-foreground">
                Open the app, enter your destination, and request a ride with just a few taps.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">2. Get Matched</h3>
              <p className="text-muted-foreground">
                We'll connect you with a nearby driver and show you their location in real-time.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">3. Enjoy Your Ride</h3>
              <p className="text-muted-foreground">
                Sit back, relax, and enjoy a safe, comfortable ride to your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose RideShare?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best ride-sharing experience with features that matter most to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Millions</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join our growing community of riders and drivers who trust RideShare for their transportation needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real users have to say about their RideShare experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users who trust RideShare for their daily transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/register">
                Sign Up as Rider <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/register">Become a Driver</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
