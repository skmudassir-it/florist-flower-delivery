import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | PetalCraft Florist Co.",
  description: "Explore our portfolio of floral designs — weddings, corporate events, custom bouquets, and more.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
