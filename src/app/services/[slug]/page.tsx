import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} | PetalCraft Florist Co.`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
          Back to Services
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="w-full h-72 sm:h-96 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <Badge variant="secondary" className="mb-3">{service.title}</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{service.title}</h1>
            <p className="text-muted-foreground leading-relaxed mb-6">{service.detail}</p>
            <h2 className="font-semibold text-lg mb-3">What&apos;s Included</h2>
            <ul className="space-y-2 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-muted-foreground">
                  <FontAwesomeIcon icon={faCheck} className="size-4 text-secondary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Inquire About This Service</Button>
            </Link>
          </div>
        </div>

        {/* Other Services */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Other Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.slice(0, 3).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                <Card className="glass-card h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <FontAwesomeIcon icon={s.icon} className="size-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{s.title}</p>
                        <p className="text-xs text-muted-foreground">{s.description.slice(0, 60)}...</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
