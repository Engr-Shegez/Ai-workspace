import { FeaturesSection } from "@/components/marketing/features-section";
import { MarketingFooter } from "@/components/marketing/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { MarketingNavbar } from "@/components/marketing/navbar";
import { PricingSection } from "@/components/marketing/pricing-section";
import { ProductPreviewSection } from "@/components/marketing/product-preview-section";
import { SocialProofSection } from "@/components/marketing/social-proof-section";

export function MarketingHomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f4ef] text-zinc-900 dark:bg-[#090909] dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_30%),radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.12),transparent_20%),linear-gradient(to_bottom,rgba(255,255,255,0.72),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.12),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(24,24,27,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.05)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.18] [mask-image:linear-gradient(to_bottom,white,transparent_85%)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:opacity-[0.08]" />

      <div className="relative">
        <MarketingNavbar />
        <HeroSection />
        <SocialProofSection />
        <FeaturesSection />
        <ProductPreviewSection />
        <HowItWorksSection />
        <PricingSection />
        <MarketingFooter />
      </div>
    </main>
  );
}
