import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing | PetalCraft Florist Co.",
  description: "Transparent pricing for bouquets, arrangements, weekly office subscriptions, wedding collections, and event styling.",
};

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Pricing</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Beautiful arrangements for every occasion and every budget. No hidden fees, ever.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((plan) => (
            <Card key={plan.name} className={`glass-card flex flex-col ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
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
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FontAwesomeIcon icon={faCheck} className="size-3 text-secondary mt-1 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex w-full">
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Not sure which arrangement is right for you? We&apos;re happy to help.</p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg">Contact Us for a Custom Quote</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
