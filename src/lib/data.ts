import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faTruck,
  faLeaf,
  faBuilding,
  faDove,
  faSeedling,
  faStar,
  faUsers,
  faAward,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faCheck,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  detail: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface PricingItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const brandName = "PetalCraft Florist Co.";
export const tagline = "Crafting beauty, one petal at a time.";
export const phone = "(555) 234-5678";
export const email = "hello@petalcraftflorist.com";
export const address = "742 Bloom Lane, Garden District, Portland, OR 97201";

export const services: ServiceItem[] = [
  {
    slug: "wedding-event-florals",
    title: "Wedding & Event Florals",
    description: "Breathtaking floral designs for your most cherished celebrations, from intimate ceremonies to grand receptions.",
    icon: faHeart,
    image: "/images/services/wedding-event-florals.jpg",
    features: ["Bridal bouquets & boutonnieres", "Ceremony arches & aisle decor", "Reception centerpieces", "On-site setup & styling", "Seasonal flower sourcing"],
    detail: "Our wedding floral design team brings your vision to life with custom arrangements that capture your personal style. From the initial consultation to the final petal placement, we handle every detail. We work with seasonal blooms, exotic imports, and sustainable growers to create arrangements that are as responsible as they are beautiful. Our team has designed for over 500 weddings across the Pacific Northwest.",
  },
  {
    slug: "daily-flower-delivery",
    title: "Daily Flower Delivery",
    description: "Fresh, hand-tied bouquets delivered same-day to homes and offices across the metro area.",
    icon: faTruck,
    image: "/images/services/daily-flower-delivery.jpg",
    features: ["Same-day delivery (order by 2 PM)", "Weekly subscription plans", "Office & lobby arrangements", "Custom vase selection", "Handwritten gift notes"],
    detail: "Our daily delivery service makes it easy to brighten someone's day — or your own space. Choose from our rotating seasonal selection of hand-tied bouquets, or work with our florists to create a custom weekly subscription. We deliver to homes, offices, hotels, and hospitals across the Portland metro area. Every bouquet comes with care instructions to maximize vase life.",
  },
  {
    slug: "custom-bouquets",
    title: "Custom Bouquets",
    description: "One-of-a-kind arrangements designed around your color palette, occasion, and personal taste.",
    icon: faLeaf,
    image: "/images/services/custom-bouquets.jpg",
    features: ["Personalized design consultation", "Seasonal & exotic options", "Gift wrapping & presentation", "Photo preview before delivery", "Scent preference matching"],
    detail: "When off-the-shelf won't do, our custom bouquet service lets you collaborate directly with a florist. Tell us the occasion, your color preferences, and any special meanings you'd like the flowers to convey. We'll craft a one-of-a-kind arrangement that tells your story. Perfect for anniversaries, proposals, apologies, and celebrations that deserve something extraordinary.",
  },
  {
    slug: "corporate-floral-design",
    title: "Corporate Floral Design",
    description: "Elevate your business environment with professional floral installations and weekly refreshes.",
    icon: faBuilding,
    image: "/images/services/corporate-floral-design.jpg",
    features: ["Weekly lobby arrangements", "Event & conference florals", "Client gift programs", "Holiday & seasonal decor", "Brand-aligned color schemes"],
    detail: "First impressions matter. Our corporate program provides consistent, stunning floral displays for your business — from weekly lobby arrangements that welcome clients to complete event styling for galas and conferences. We work with your brand colors and design aesthetic to create a cohesive look that reinforces your professional image. Available on retainer or per-event basis.",
  },
  {
    slug: "sympathy-funeral",
    title: "Sympathy & Funeral Flowers",
    description: "Thoughtful, dignified arrangements that honor loved ones and comfort grieving families.",
    icon: faDove,
    image: "/images/services/sympathy-funeral.jpg",
    features: ["Casket sprays & standing sprays", "Sympathy baskets & wreaths", "Same-day funeral delivery", "Custom tribute designs", "Gentle, compassionate service"],
    detail: "In difficult times, the right flowers can speak volumes. Our sympathy collection is designed with dignity and care, using soft palettes and meaningful blooms. We coordinate directly with funeral homes for timely delivery and placement, and offer custom tribute designs that reflect the personality and passions of the departed. Every arrangement is handled with the utmost respect and compassion.",
  },
  {
    slug: "plant-orchid-rental",
    title: "Plant & Orchid Rental",
    description: "Living decor for events, offices, and homes — lush plants and elegant orchids, delivered and maintained.",
    icon: faSeedling,
    image: "/images/services/plant-orchid-rental.jpg",
    features: ["Orchid displays for events", "Office plant programs", "Living walls & green dividers", "Delivery, setup & pickup", "Care & maintenance included"],
    detail: "Living greenery adds warmth and vitality to any space. Our rental service provides healthy, curated plants and orchids for events, photoshoots, and ongoing office installations. We handle delivery, placement, ongoing care, and removal — you just enjoy the beauty. From a single statement orchid to a full living wall, we'll design the perfect green installation for your needs.",
  },
];

export const projects: ProjectItem[] = [
  { title: "Willamette Vineyard Wedding", category: "Wedding", description: "Rustic vineyard ceremony with burgundy dahlias, eucalyptus garlands, and suspended floral chandeliers.", image: "/images/projects/project-1.jpg" },
  { title: "Apex Tower Lobby Refresh", category: "Corporate", description: "Ongoing bi-weekly lobby installation featuring seasonal arrangements aligned with the building's modern aesthetic.", image: "/images/projects/project-2.jpg" },
  { title: "Rose Garden Summer Gala", category: "Event", description: "450-guest charity gala with 72 centerpieces, a 20-foot floral arch, and orchid accent walls.", image: "/images/projects/project-3.jpg" },
  { title: "Hawthorne Bridge Proposal", category: "Custom", description: "Surprise proposal setup with 500 roses, candlelit pathway, and a custom floral heart arch.", image: "/images/projects/project-4.jpg" },
  { title: "Cedar Hills Office Park", category: "Corporate", description: "Multi-floor office plant program with weekly maintenance across 6 client suites.", image: "/images/projects/project-5.jpg" },
  { title: "Pearl District Art Walk", category: "Event", description: "Gallery opening installations featuring avant-garde floral sculptures and suspended greenery.", image: "/images/projects/project-6.jpg" },
];

export const pricing: PricingItem[] = [
  {
    name: "Petite Bouquet",
    price: "$45",
    description: "A charming hand-tied bouquet for everyday moments.",
    features: ["12-15 stems", "Seasonal flowers", "Tissue & ribbon wrap", "Gift card included", "Same-day delivery available"],
  },
  {
    name: "Signature Arrangement",
    price: "$85",
    description: "Our most popular — a generous, artful arrangement for any occasion.",
    features: ["20-25 stems", "Premium seasonal blooms", "Designer vase included", "Handwritten note", "Photo preview before delivery"],
    popular: true,
  },
  {
    name: "Luxury Collection",
    price: "$150",
    description: "An extravagant statement piece with exotic blooms and lush greenery.",
    features: ["30-40 stems", "Exotic & imported flowers", "Crystal or ceramic vessel", "Signature fragrance spritz", "White-glove delivery & setup"],
  },
  {
    name: "Weekly Office",
    price: "$195/wk",
    description: "Fresh weekly arrangements for your business — lobby, reception, and conference rooms.",
    features: ["3 fresh arrangements weekly", "Brand-aligned color palette", "Vase rotation program", "Holiday upgrades included", "24-hour replacement guarantee"],
  },
  {
    name: "Wedding Collection",
    price: "From $2,500",
    description: "Full-service wedding florals — consultation, design, delivery, and on-site styling.",
    features: ["Personal design consultation", "Bridal party flowers", "Ceremony & reception decor", "Setup & breakdown service", "Complimentary sample bouquet"],
  },
  {
    name: "Event Styling",
    price: "From $1,200",
    description: "Complete floral styling for corporate events, galas, and private parties.",
    features: ["Venue walkthrough", "Custom design proposal", "All centerpieces & decor", "Lighting coordination", "Post-event cleanup"],
  },
];

export const testimonials = [
  { quote: "PetalCraft made our wedding absolutely magical. Every arrangement was more beautiful than we imagined. The team listened to our vision and elevated it beyond anything we could have dreamed.", author: "Sarah & Michael T.", role: "Wedding, September 2024" },
  { quote: "Our office has never looked better. The weekly arrangements have become a talking point with clients — they notice the attention to detail and it reflects well on our brand.", author: "Jennifer K.", role: "Office Manager, Apex Tower" },
  { quote: "I've been ordering from PetalCraft for three years now. Every bouquet arrives fresh, beautifully arranged, and lasts longer than any other florist I've used. Their subscription is the best gift I give myself.", author: "David R.", role: "Weekly Subscriber" },
  { quote: "The sympathy arrangement they created for my mother's service was stunning. So thoughtfully done, and they coordinated everything with the funeral home so I didn't have to worry about a thing.", author: "Margaret L.", role: "Funeral Service, June 2024" },
  { quote: "We used PetalCraft for our annual gala with 450 guests. 72 unique centerpieces, not a single repeated design. Our donors were blown away. Already booked them for next year.", author: "Robert C.", role: "Charity Gala Director" },
];

export const faqs = [
  { q: "How far in advance should I order wedding flowers?", a: "We recommend booking 6-12 months in advance for weddings, especially during peak season (May-October). However, we can often accommodate shorter timelines — reach out and we'll do our best." },
  { q: "What areas do you deliver to?", a: "We deliver across the entire Portland metro area, including Beaverton, Hillsboro, Gresham, Lake Oswego, and Tigard. Same-day delivery is available for orders placed by 2 PM." },
  { q: "Can I customize a bouquet for a specific occasion?", a: "Absolutely! Our custom bouquet service lets you work directly with a florist to design the perfect arrangement. Just let us know the occasion, colors, and budget during checkout or give us a call." },
  { q: "Do you offer subscription services?", a: "Yes! We offer weekly, bi-weekly, and monthly subscription plans for homes and offices. Each delivery is seasonally fresh and uniquely designed — never repetitive." },
  { q: "What is your cancellation and refund policy?", a: "Orders can be canceled up to 24 hours before delivery for a full refund. For weddings and events, our contract includes a detailed cancellation policy. We stand behind every arrangement — if you're not satisfied, we'll make it right." },
  { q: "Do you use locally grown flowers?", a: "Whenever possible! We source from Pacific Northwest growers during the growing season (April-October) and supplement with premium imports for year-round availability." },
];

export const teamMembers = [
  { name: "Olivia Hart", role: "Founder & Lead Florist", bio: "20 years of floral design. Trained in Paris and Tokyo.", image: "/images/team/team-1.jpg" },
  { name: "Marcus Chen", role: "Wedding Design Director", bio: "500+ weddings. Known for romantic, garden-inspired designs.", image: "/images/team/team-2.jpg" },
  { name: "Priya Sharma", role: "Corporate Accounts Manager", bio: "Manages 40+ office accounts with precision and creativity.", image: "/images/team/team-3.jpg" },
  { name: "Diego Rivera", role: "Head Grower & Plant Specialist", bio: "Botanist by training. Our living wall and orchid expert.", image: "/images/team/team-4.jpg" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];
