import { Appliances } from "@/components/appliances";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { ServiceArea } from "@/components/service-area";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { TrustBar } from "@/components/trust-bar";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Pricing />
        <Appliances />
        <ServiceArea />
        <WhyUs />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
