import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | PetalCraft Florist Co.",
  description: "Wedding florals, daily flower delivery, custom bouquets, corporate design, sympathy flowers, and plant rentals — crafted with care in Portland.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
