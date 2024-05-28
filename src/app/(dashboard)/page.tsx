"use client";

import HeroWithPhoneMockup from "@/app/_components/ai/hero-sections/hero-with-phone-mockup";
import NewsletterCenteredCard from "@/app/_components/ai/newsletter-sections/newsletter-centered-card";
import NewsletterSideBySideOnCard from "@/app/_components/ai/newsletter-sections/newsletter-side-by-side-on-card";
import TestimonialsGrid from "@/app/_components/ai/testimonials/testimonials-grid";
import BannerWithButton from "@/app/_components/ai/banners/banner-with-button";
import BannerWithLink from "@/app/_components/ai/banners/banner-with-link";
import HeroSimpleCentered from "@/app/_components/ai/hero-sections/hero-simple-centered";
import HeroSplitWithImage from "@/app/_components/ai/hero-sections/hero-split-with-image";
import HeroSplitWithScreenshot from "@/app/_components/ai/hero-sections/hero-split-with-screenshot";
import HeroWithAngledImageOnRight from "@/app/_components/ai/hero-sections/hero-with-angled-image-on-right";
import HeroWithOffsetImage from "@/app/_components/ai/hero-sections/hero-with-offset-image";
import CtaWithAppScreenshot from "@/app/_components/ai/cta-sections/cta-with-app-screenshot";
import CtaSimpleCentered from "@/app/_components/ai/cta-sections/cta-simple-centered";
import CtaSimpleJustified from "@/app/_components/ai/cta-sections/cta-simple-justified";
import NewsletterSimpleSideBySide from "@/app/_components/ai/newsletter-sections/newsletter-simple-side-by-side";
import NewsletterSimpleStacked from "@/app/_components/ai/newsletter-sections/newsletter-simple-stacked";
import LogosSimpleWithHeading from "@/app/_components/ai/logo-clouds/logos-simple-with-heading";
import LogosSplitWithLogosOnRight from "@/app/_components/ai/logo-clouds/logos-split-with-logos-on-right";
import LogosSimple from "@/app/_components/ai/logo-clouds/logos-simple";
import TestimonialsOffWhiteGrid from "@/app/_components/ai/testimonials/testimonials-off-white-grid";
import FaqsOffsetWithSupportingText from "@/app/_components/ai/faqs/faqs-offset-with-supporting-text";
import FaqsCenteredAccordion from "@/app/_components/ai/faqs/faqs-centered-accordion";
import FooterSocialLinksOnly from "@/app/_components/ai/footers/footer-social-links-only";
import FooterSimpleCentered from "@/app/_components/ai/footers/footer-simple-centered";
import FooterFourColumnWithNewsletter from "@/app/_components/ai/footers/footer-four-column-with-newsletter";
import FooterFourColumnWithNewsletterBelow from "@/app/_components/ai/footers/footer-four-column-with-newsletter-below";
import FooterFourColumnWithCompanyMission from "@/app/_components/ai/footers/footer-four-column-with-company-mission";
import StatsSimple from "@/app/_components/ai/stats/stats-simple";
import StatsSimpleGrid from "@/app/_components/ai/stats/stats-simple-grid";
import StatsSplitWithImage from "@/app/_components/ai/stats/stats-split-with-image";
import StatsWithDescription from "@/app/_components/ai/stats/stats-with-description";
import { useState } from "react";
import { TemplateTheme } from "@/types/theme";
import CtaTwoColumnsWithPhoto from "@/app/_components/ai/cta-sections/cta-two-columns-with-photo";
import LoginSimple from "@/app/_components/ai/auth/login-simple";

const themes: TemplateTheme[] = ["minimal", "gradient", "dark", "neo-brutal"];

export default function Page() {
  const [theme, setTheme] = useState<TemplateTheme>("minimal");
  return (
    <main className="h-full">
      <header className="relative flex items-center justify-center gap-8 px-16 py-10">
        {themes.map((item, index) => (
          <button
            key={index}
            className="capitalize"
            onClick={() => setTheme(item)}
          >
            {item}
          </button>
        ))}
      </header>
      <BannerWithButton theme={theme} />
    </main>
  );
}
