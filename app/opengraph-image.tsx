import { OgImage, ogContentType, ogSize } from "@/lib/og-card";

export const alt =
  "CLIMA ATHENS PRO — επαγγελματικές υπηρεσίες κλιματισμού σε όλη την Αττική και τη Σαλαμίνα";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return OgImage();
}
