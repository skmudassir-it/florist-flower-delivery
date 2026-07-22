"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { phone, email, address } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      // proceed anyway
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-secondary/20 text-secondary mx-auto mb-6">
            <FontAwesomeIcon icon={faPaperPlane} className="size-7" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">Thank You!</h1>
          <p className="text-muted-foreground mb-8">We&apos;ve received your message and will get back to you within 24 hours. In the meantime, feel free to call us at {phone}.</p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Get in Touch</h1>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">Ready to create something beautiful? Fill out the form below or reach us directly.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Name *</label>
                      <Input {...register("name")} placeholder="Your name" />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <Input {...register("email")} type="email" placeholder="you@email.com" />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone</label>
                      <Input {...register("phone")} placeholder="(555) 000-0000" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Service *</label>
                      <Select value={watch("service")} onValueChange={(v: string | null) => setValue("service", v || "")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding & Event Florals</SelectItem>
                          <SelectItem value="delivery">Daily Flower Delivery</SelectItem>
                          <SelectItem value="custom">Custom Bouquets</SelectItem>
                          <SelectItem value="corporate">Corporate Floral Design</SelectItem>
                          <SelectItem value="sympathy">Sympathy & Funeral</SelectItem>
                          <SelectItem value="plant">Plant & Orchid Rental</SelectItem>
                          <SelectItem value="other">Other / General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Message *</label>
                    <Textarea {...register("message")} rows={5} placeholder="Tell us about your event, occasion, or vision..." />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Contact Info</h3>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhone} className="size-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="size-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="size-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faClock} className="size-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 8 AM – 6 PM</p>
                    <p className="text-sm text-muted-foreground">Sat: 9 AM – 4 PM</p>
                    <p className="text-sm text-muted-foreground">Sun: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
