import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | PetalCraft Florist Co.",
  description: "Order flowers, request a wedding consultation, or get a custom quote. Reach out to PetalCraft Florist Co. today.",
};

export default function ContactPage() {
  return <ContactClient />;
}
