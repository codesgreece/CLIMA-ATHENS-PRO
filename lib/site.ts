export const site = {
  name: "CLIMA ATHENS PRO",
  url: "https://climaathenspro.vercel.app",
  title:
    "CLIMA ATHENS PRO | Ψυκτικός Αθήνα & Αττική | Εγκατάσταση & Service Κλιματιστικών",
  description:
    "CLIMA ATHENS PRO – Επαγγελματικές εγκαταστάσεις και service κλιματιστικών, βλάβες και επισκευές ψυγείων, κουζινών και πλυντηρίων σε όλη την Αττική και τη Σαλαμίνα.",
  phoneDisplay: "693 151 4831",
  phoneHref: "tel:6931514831",
  phoneSchema: "+306931514831",
  cta: "ΚΑΛΕΣΤΕ ΤΩΡΑ",
  area: "Όλη η Αττική & Σαλαμίνα",
} as const;

export const nav = [
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#pricing", label: "Τιμές" },
  { href: "#area", label: "Περιοχές" },
  { href: "#contact", label: "Επικοινωνία" },
] as const;

export const mobileNav = [
  { href: "#top", label: "Αρχική" },
  ...nav,
] as const;

export const trustItems = [
  "Όλη η Αττική",
  "Σαλαμίνα",
  "Εγκαταστάσεις",
  "Service",
  "Επισκευές",
] as const;

export type ServiceIcon = "install" | "service" | "bio" | "repair";

export const services: {
  icon: ServiceIcon;
  title: string;
  kicker: string;
  items: readonly string[];
  price: string;
  priceLabel: string;
  note?: string;
  cta?: { href: string; label: string };
}[] = [
  {
    icon: "install",
    title: "ΕΓΚΑΤΑΣΤΑΣΗ ΚΛΙΜΑΤΙΣΤΙΚΩΝ",
    kicker: "12.000 / 18.000 / 24.000 BTU",
    items: [],
    price: "120€",
    priceLabel: "Τιμή εγκατάστασης",
    note: "Έως 3 μέτρα σωλήνα.",
    cta: { href: "#pricing", label: "ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ" },
  },
  {
    icon: "service",
    title: "SERVICE ΚΛΙΜΑΤΙΣΤΙΚΩΝ",
    kicker: "Απλός καθαρισμός",
    items: [
      "Καθαρισμός φίλτρων",
      "Καθαρισμός στοιχείων εσωτερικής μονάδας",
      "Καθαρισμός εξωτερικής μονάδας",
      "Ειδικό καθαριστικό φάρμακο",
    ],
    price: "20€",
    priceLabel: "Τιμή απλού καθαρισμού",
  },
  {
    icon: "bio",
    title: "ΒΙΟΛΟΓΙΚΟΣ ΚΑΘΑΡΙΣΜΟΣ",
    kicker: "Πλήρης καθαρισμός",
    items: [
      "Άνοιγμα εσωτερικής μονάδας",
      "Καθαρισμός ανεμιστήρα",
      "Καθαρισμός στοιχείων",
      "Έλεγχος λειτουργίας",
      "Ισχυρό επαγγελματικό καθαριστικό",
    ],
    price: "55€",
    priceLabel: "Τιμή βιολογικού καθαρισμού",
  },
  {
    icon: "repair",
    title: "ΒΛΑΒΕΣ & ΕΠΙΣΚΕΥΕΣ",
    kicker: "Αναλαμβάνουμε",
    items: ["Ψυγεία", "Κουζίνες", "Πλυντήρια", "Κλιματιστικά"],
    price: "ΚΑΤΟΠΙΝ ΣΥΝΕΝΝΟΗΣΗΣ",
    priceLabel: "Τιμή",
  },
];

export const prices = [
  {
    amount: "120€",
    title: "ΕΓΚΑΤΑΣΤΑΣΗ AC",
    lines: ["12K / 18K / 24K BTU", "Έως 3m σωλήνα"],
  },
  {
    amount: "20€",
    title: "SERVICE AC",
    lines: ["Απλός καθαρισμός"],
  },
  {
    amount: "55€",
    title: "ΒΙΟΛΟΓΙΚΟΣ ΚΑΘΑΡΙΣΜΟΣ",
    lines: ["Πλήρης καθαρισμός εσωτερικής μονάδας"],
  },
] as const;

export type ApplianceIcon = "fridge" | "cooker" | "washer" | "ac";

export const appliances: { icon: ApplianceIcon; label: string }[] = [
  { icon: "fridge", label: "ΨΥΓΕΙΑ" },
  { icon: "cooker", label: "ΚΟΥΖΙΝΕΣ" },
  { icon: "washer", label: "ΠΛΥΝΤΗΡΙΑ" },
  { icon: "ac", label: "ΚΛΙΜΑΤΙΣΤΙΚΑ" },
];

export const reasons = [
  {
    index: "01",
    title: "ΕΠΑΓΓΕΛΜΑΤΙΣΜΟΣ",
    text: "Επαγγελματική εξυπηρέτηση.",
  },
  {
    index: "02",
    title: "ΣΩΣΤΗ ΕΡΓΑΣΙΑ",
    text: "Εγκατάσταση, service και επισκευή.",
  },
  {
    index: "03",
    title: "ΔΙΑΦΑΝΕΙΣ ΤΙΜΕΣ",
    text: "120€ εγκατάσταση, 20€ service, 55€ βιολογικός καθαρισμός.",
  },
  {
    index: "04",
    title: "ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΟΛΗ ΤΗΝ ΑΤΤΙΚΗ",
    text: "Και στη Σαλαμίνα.",
  },
] as const;

export const coverageNodes = [
  { name: "Μαραθώνας", x: 78.5, y: 26.4, place: "above" },
  { name: "Κηφισιά", x: 59.8, y: 37.7, place: "start" },
  { name: "Ελευσίνα", x: 27.4, y: 41.6, place: "start" },
  { name: "Αθήνα", x: 49.5, y: 49, place: "end" },
  { name: "Σαλαμίνα", x: 20, y: 52.1, place: "below" },
  { name: "Πειραιάς", x: 39.4, y: 53.9, place: "below" },
  { name: "Γλυφάδα", x: 51.1, y: 60, place: "end" },
  { name: "Λαύριο", x: 88.3, y: 83.7, place: "start" },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phoneSchema,
  image: `${site.url}/opengraph-image`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Αττική",
    addressCountry: "GR",
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Αττική",
    },
    {
      "@type": "Place",
      name: "Σαλαμίνα",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Υπηρεσίες",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Εγκατάσταση κλιματιστικών",
        price: "120",
        priceCurrency: "EUR",
        description: "12.000 / 18.000 / 24.000 BTU. Έως 3 μέτρα σωλήνα.",
      },
      {
        "@type": "Offer",
        name: "Service κλιματιστικών",
        price: "20",
        priceCurrency: "EUR",
        description:
          "Απλός καθαρισμός: φίλτρα, στοιχεία εσωτερικής μονάδας, εξωτερική μονάδα, ειδικό καθαριστικό φάρμακο.",
      },
      {
        "@type": "Offer",
        name: "Βιολογικός καθαρισμός",
        price: "55",
        priceCurrency: "EUR",
        description:
          "Άνοιγμα εσωτερικής μονάδας, καθαρισμός ανεμιστήρα και στοιχείων, έλεγχος λειτουργίας, ισχυρό επαγγελματικό καθαριστικό.",
      },
      {
        "@type": "Offer",
        name: "Βλάβες και επισκευές",
        description:
          "Ψυγεία, κουζίνες, πλυντήρια και κλιματιστικά. Τιμή κατόπιν συνεννόησης.",
      },
    ],
  },
};
