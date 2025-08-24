
import { Shield, Clock, DollarSign, MapPin, Star, Users, Smartphone, CreditCard, AlertTriangle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const FeaturesPage = () => {
  const riderFeatures = [
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Easy Booking",
      description:
        "Request rides with just a few taps. Set your pickup location, destination, and preferred ride type.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Real-Time Tracking",
      description: "Track your driver's location in real-time and get accurate arrival estimates.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Multiple Payment Options",
      description: "Pay with credit card, debit card, digital wallet, or cash - whatever works for you.",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Rate & Review",
      description: "Rate your ride and provide feedback to help maintain service quality.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety Features",
      description: "Share trip details with contacts, emergency SOS button, and 24/7 support.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Ride History",
      description: "Access your complete ride history with receipts and trip details.",
    },
  ]

  const driverFeatures = [
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Flexible Earnings",
      description: "Drive when you want and earn competitive rates with transparent pricing.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Driver Community",
      description: "Connect with other drivers, share tips, and get support from our community.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Smart Routing",
      description: "Get optimized routes and navigation to reduce drive time and fuel costs.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage while you're driving with RideShare.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Instant Payouts",
      description: "Get paid instantly after each ride or choose weekly payouts.",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Performance Insights",
      description: "Track your earnings, ratings, and performance with detailed analytics.",
    },
  ]

  const adminFeatures = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "User Management",
      description: "Comprehensive tools to manage riders and drivers, including verification and support.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Ride Oversight",
      description: "Monitor all rides in real-time with advanced filtering and search capabilities.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Revenue Analytics",
      description: "Detailed financial reporting and analytics to track platform performance.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety Monitoring",
      description: "Advanced safety tools including incident reporting and emergency response.",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Quality Control",
      description: "Rating and review management to maintain service quality standards.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Dispute Resolution",
      description: "Efficient tools for handling disputes and customer support issues.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover all the features that make RideShare the best choice for riders, drivers, and administrators.
              Built with safety, efficiency, and user experience in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="riders" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-16">
              <TabsTrigger value="riders">For Riders</TabsTrigger>
              <TabsTrigger value="drivers">For Drivers</TabsTrigger>
              <TabsTrigger value="admins">For Admins</TabsTrigger>
            </TabsList>

            <TabsContent value="riders" className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Rider Features</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Everything you need for a safe, convenient, and enjoyable ride experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {riderFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drivers" className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Driver Features</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Tools and features designed to help drivers maximize their earnings and provide excellent service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {driverFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="admins" className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Admin Features</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive administrative tools for managing the platform, users, and operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adminFeatures.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-center mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Safety is Our Priority</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We've built comprehensive safety features into every aspect of our platform. From driver background
                checks to real-time ride monitoring, we're committed to keeping our community safe.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Comprehensive background checks for all drivers</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Real-time GPS tracking for all rides</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Emergency SOS button with instant response</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>24/7 customer support and safety monitoring</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/safety-dashboard.png"
                alt="Safety Features"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/placeholder-77cg5.png" alt="Technology" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Cutting-Edge Technology</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our platform is built on modern, scalable technology that ensures reliability, performance, and
                security. We continuously innovate to provide the best possible experience for our users.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Native mobile apps for iOS and Android</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Advanced mapping and routing algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Real-time matching and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Enterprise-grade security and encryption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage
