import { Shield, Users, Globe, Award } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety First",
      description: "Every driver is background-checked and every ride is tracked for maximum safety and security.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Driven",
      description: "We believe in building strong communities by connecting people and creating opportunities.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Sustainable Future",
      description: "Reducing traffic congestion and carbon emissions through efficient ride-sharing solutions.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Committed to providing the highest quality service and continuously improving our platform.",
    },
  ]

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      image: "/professional-woman-ceo.png",
      bio: "Former transportation industry executive with 15+ years of experience in building scalable mobility solutions.",
    },
    {
      name: "David Rodriguez",
      role: "CTO",
      image: "/professional-cto-headshot.png",
      bio: "Tech veteran who previously led engineering teams at major ride-sharing and logistics companies.",
    },
    {
      name: "Emily Chen",
      role: "Head of Safety",
      image: "/placeholder-rul2e.png",
      bio: "Safety expert with background in risk management and emergency response systems.",
    },
    {
      name: "Marcus Johnson",
      role: "VP of Operations",
      image: "/professional-operations-director.png",
      bio: "Operations specialist focused on optimizing driver-rider matching and service efficiency.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">RideShare</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're on a mission to revolutionize transportation by making it safer, more accessible, and more
              sustainable for everyone. Founded in 2020, RideShare has grown from a simple idea to a trusted platform
              serving millions of users worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To create a world where transportation is accessible, affordable, and sustainable for everyone. We
                believe that by connecting people through technology, we can build stronger communities and create
                economic opportunities for drivers while providing convenient, safe rides for passengers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every day, we work towards reducing traffic congestion, lowering carbon emissions, and making cities
                more livable through smart transportation solutions.
              </p>
            </div>
            <div>
              <img src="/ride-sharing-urban.png" alt="Our Mission" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape the culture of our company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/diverse-startup-office.png" alt="Our Story" className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RideShare was born out of frustration with existing transportation options. Our founders, Sarah and
                David, experienced firsthand the challenges of unreliable rides, safety concerns, and unfair pricing in
                the transportation industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Starting with just a small team in 2020, we set out to build a platform that prioritizes safety,
                fairness, and community. Today, we're proud to serve over 1 million riders and 50,000 drivers across
                100+ cities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                But we're just getting started. Our vision extends beyond ride-sharing to creating a comprehensive
                mobility ecosystem that serves the needs of modern urban communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind RideShare who work tirelessly to make transportation better for
              everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to building a better transportation future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">1M+</div>
              <div className="text-lg opacity-90">Happy Riders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Active Drivers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">25M+</div>
              <div className="text-lg opacity-90">Rides Completed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
