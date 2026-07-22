import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { brandName, tagline, services, projects, pricing, testimonials } from "@/lib/data";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export default function HomeClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">🌸 Portland&apos;s Premier Florist Since 2004</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              {brandName}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="inline-flex">
                <Button size="lg">Explore Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
              </Link>
              <Link href="/contact" className="inline-flex">
                <Button size="lg" variant="outline">Order Flowers</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Our Services</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">From everyday bouquets to once-in-a-lifetime celebrations, we bring your floral vision to life.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="glass-card overflow-hidden h-full">
                  <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-2">
                      <FontAwesomeIcon icon={service.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline">View All Services <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Pricing</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">Beautiful arrangements for every occasion and every budget.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.slice(0, 6).map((plan) => (
              <Card key={plan.name} className={`glass-card ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription className="mt-1">{plan.description}</CardDescription>
                    </div>
                    {plan.popular && <Badge>Popular</Badge>}
                  </div>
                  <p className="text-3xl font-bold mt-3">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <FontAwesomeIcon icon={faCheck} className="size-3 text-secondary mt-1 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Featured Projects</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">A glimpse of what we create for our clients.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <Card key={project.title} className="glass-card overflow-hidden">
                <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-1">{project.category}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-flex">
              <Button variant="outline">View All Projects <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">What Our Clients Say</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Ready to Create Something Beautiful?</h2>
          <p className="text-muted-foreground mb-8">Let&apos;s bring your vision to life — whether it&apos;s a single bouquet or a grand celebration.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Get a Free Quote</Button>
            </Link>
            <Link href="/pricing" className="inline-flex">
              <Button size="lg" variant="outline">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
