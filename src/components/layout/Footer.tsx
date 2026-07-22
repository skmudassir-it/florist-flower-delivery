import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faPinterest, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { brandName, tagline, phone, email, address, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight mb-3">
              <FontAwesomeIcon icon={faLeaf} className="size-6 text-secondary-foreground" />
              <span>{brandName}</span>
            </Link>
            <p className="text-sm text-accent-foreground/80 leading-relaxed">{tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/wedding-event-florals" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Wedding & Event Florals</Link></li>
              <li><Link href="/services/daily-flower-delivery" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Daily Flower Delivery</Link></li>
              <li><Link href="/services/custom-bouquets" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Custom Bouquets</Link></li>
              <li><Link href="/services/corporate-floral-design" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Corporate Design</Link></li>
              <li><Link href="/services" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">All Services →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-accent-foreground/80">
                <FontAwesomeIcon icon={faPhone} className="size-3" />
                {phone}
              </li>
              <li className="flex items-center gap-2 text-accent-foreground/80">
                <FontAwesomeIcon icon={faEnvelope} className="size-3" />
                {email}
              </li>
              <li className="flex items-center gap-2 text-accent-foreground/80">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="size-3" />
                {address}
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-5" /></a>
              <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"><FontAwesomeIcon icon={faPinterest} className="size-5" /></a>
              <a href="#" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-10 pt-6 text-center text-sm text-accent-foreground/60">
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
