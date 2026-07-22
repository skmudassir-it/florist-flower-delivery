"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="max-w-4xl mx-auto">
      <CarouselContent>
        {items.map((t, i) => (
          <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <FontAwesomeIcon icon={faQuoteRight} className="size-6 text-primary/30 mb-3" />
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <FontAwesomeIcon key={j} icon={faStar} className="size-3 text-secondary" />
                  ))}
                </div>
                <p className="font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
