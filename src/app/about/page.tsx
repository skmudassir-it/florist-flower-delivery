import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLeaf, faAward, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { brandName, teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | PetalCraft Florist Co.",
  description: "Meet the team behind Portland's premier florist — 20 years of crafting beauty, one petal at a time.",
};

const stats = [
  { value: "500+", label: "Weddings Designed", icon: faHeart },
  { value: "20+", label: "Years in Business", icon: faLeaf },
  { value: "15K+", label: "Bouquets Delivered", icon: faAward },
  { value: "12", label: "Team Members", icon: faUsers },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">About {brandName}</h1>
            <div className="gradient-divider w-24 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">For two decades, we&apos;ve been Portland&apos;s go-to florist — transforming spaces with the artistry of flowers.</p>
          </div>

          <div className="max-w-3xl mx-auto mb-16 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {brandName} was founded in 2004 by Olivia Hart, a Paris and Tokyo-trained florist who believed
              that every arrangement should tell a story. What started as a small studio in Portland&apos;s
              Garden District has grown into the city&apos;s premier floral design house — serving weddings,
              corporate clients, and flower lovers across the Pacific Northwest.
            </p>
            <p>
              We source our blooms from Pacific Northwest growers whenever possible, supporting local agriculture
              and ensuring the freshest, longest-lasting flowers for our clients. When the season demands it,
              we import premium varieties from trusted growers in Holland, Ecuador, and Japan.
            </p>
            <p>
              Our philosophy is simple: every arrangement should be as unique as the person receiving it. We don&apos;t
              do cookie-cutter — every bouquet, centerpiece, and installation is custom-designed with intention
              and artistry.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
            {stats.map((stat) => (
              <Card key={stat.label} className="glass-card text-center">
                <CardContent className="p-6">
                  <FontAwesomeIcon icon={stat.icon} className="size-8 text-primary mb-3" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Meet Our Team</h2>
            <div className="gradient-divider w-24 mx-auto mb-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="glass-card text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex">
              <Button size="lg">Work With Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
