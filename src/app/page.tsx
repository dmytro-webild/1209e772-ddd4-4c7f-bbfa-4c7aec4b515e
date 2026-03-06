"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import TextAbout from "@/components/sections/about/TextAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Bot, User, Zap, Brain, Cpu, Cloud, Workflow, Target, Gauge, Users, LineChart, Mail, Award, Sparkles, Quote } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="glass-depth"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "Work", id: "work" },
            { name: "Process", id: "process" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="MECOGROW"
          button={{ text: "Start Project", href: "contact" }}
          animateOnLoad={true}
          className="fixed top-0 left-0 right-0 z-50"
          navItemClassName="text-foreground hover:text-primary-cta transition-colors"
          buttonClassName="bg-primary-cta text-primary-cta-text hover:shadow-lg"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="MECOGROW"
          description="Transform your business with intelligent AI automation systems engineered for scale"
          buttons={[
            { text: "Explore Solutions", href: "services" },
            { text: "View Our Work", href: "work" },
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/abstract-cinematic-background-with-flowi-1772797625218-2418f3e3.png",              imageAlt: "Aurora gradient technology background"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/futuristic-animated-wireframe-mesh-with--1772797625890-e28d84c7.png",              imageAlt: "Futuristic wireframe mesh visualization"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/moving-gradient-landscape-with-layered-a-1772797624925-270ebf28.png",              imageAlt: "Cinematic layered gradient landscape"},
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          ariaLabel="MECOGROW hero section with carousel background"
          className="min-h-screen"
          containerClassName="relative w-full"
          contentContainerClassName="flex flex-col justify-center items-center"
          descriptionClassName="text-xl md:text-2xl font-light text-foreground"
          buttonContainerClassName="flex gap-4 mt-8"
          buttonClassName="px-8 py-3 rounded-lg font-medium transition-all"
          logoClassName="text-7xl md:text-9xl font-light tracking-tighter"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBento
          title="Our AI Automation Services"
          description="Cutting-edge automation solutions designed to streamline operations and drive intelligent business growth"
          tag="Services"
          features={[
            {
              title: "AI Chatbots",              description: "Intelligent conversational systems that enhance customer engagement and reduce support costs",              bentoComponent: "chat",              aiIcon: Bot,
              userIcon: User,
              exchanges: [
                {
                  userMessage: "What are your business hours?",                  aiResponse: "We're open Monday-Friday, 9 AM to 6 PM EST. How can I assist you further?"},
                {
                  userMessage: "Can I schedule a consultation?",                  aiResponse: "Absolutely! I can schedule that for you right now. What time works best?"},
                {
                  userMessage: "What services do you offer?",                  aiResponse: "We specialize in AI automation, workflow optimization, and intelligent systems integration."},
              ],
              placeholder: "Ask me anything..."},
            {
              title: "Workflow Automation",              description: "Seamlessly integrate and automate your business processes for maximum efficiency",              bentoComponent: "animated-bar-chart"},
            {
              title: "AI Agents",              description: "Autonomous intelligent agents that learn and adapt to optimize your operations",              bentoComponent: "orbiting-icons",              centerIcon: Zap,
              items: [
                { icon: Brain, ring: 1 },
                { icon: Cpu, ring: 1 },
                { icon: Cloud, ring: 2 },
                { icon: Workflow, ring: 2 },
                { icon: Target, ring: 3 },
                { icon: Gauge, ring: 3 },
              ],
            },
            {
              title: "CRM Automation",              description: "Intelligent customer relationship management that scales with your business",              bentoComponent: "icon-info-cards",              items: [
                { icon: Users, label: "Contact Management", value: "Automated" },
                { icon: LineChart, label: "Sales Tracking", value: "Real-time" },
                { icon: Mail, label: "Campaign Automation", value: "Intelligent" },
              ],
            },
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About MECOGROW"
          tagIcon={Sparkles}
          title="We engineer tomorrow's automation today. Transforming ambitious visions into intelligent, scalable systems that drive measurable business growth."
          useInvertedBackground={true}
          buttons={[
            { text: "Learn Our Story", href: "#" },
          ]}
        />
      </div>

      <div id="work" data-section="work">
        <ProductCardOne
          title="Featured Case Studies"
          description="Explore how we've transformed businesses across industries with intelligent automation"
          tag="Work"
          tagIcon={Award}
          products={[
            {
              id: "1",              name: "E-commerce Automation Platform",              price: "120% ROI",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/modern-dashboard-showing-analytics-and-p-1772797625758-9713a223.png",              imageAlt: "E-commerce automation dashboard"},
            {
              id: "2",              name: "Enterprise Workflow Integration",              price: "340% Efficiency Gain",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/workflow-integration-platform-showing-co-1772797625295-e964d8ba.png",              imageAlt: "Enterprise workflow system"},
            {
              id: "3",              name: "Customer Success AI System",              price: "89% Time Saved",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/customer-success-dashboard-showing-autom-1772797626875-b6da3418.png",              imageAlt: "Customer success dashboard"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="process" data-section="process">
        <MetricCardTwo
          title="Our Process"
          description="A methodical approach to building intelligent automation systems that deliver results"
          tag="Methodology"
          metrics={[
            {
              id: "1",              value: "Discover",              description: "Deep-dive analysis of your business needs and automation opportunities"},
            {
              id: "2",              value: "Design",              description: "Strategic architecture planning for optimal integration and scalability"},
            {
              id: "3",              value: "Deploy",              description: "Seamless implementation with comprehensive training and support"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Proven Results"
          description="Measurable impact delivered across our client portfolio"
          tag="Impact"
          metrics={[
            {
              id: "1",              value: "500+",              description: "Processes Automated"},
            {
              id: "2",              value: "98%",              description: "Client Satisfaction"},
            {
              id: "3",              value: "3.5M+",              description: "Hours Saved Annually"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Clients Say"
          description="Trusted by industry leaders to deliver transformative automation solutions"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",              name: "Sarah Anderson",              handle: "@sarahceo",              testimonial: "MECOGROW transformed our operations with their intelligent automation system. We've seen a 300% improvement in processing speed and cut our manual workload by 70%. Exceptional team.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/professional-headshot-of-a-confident-bus-1772797625694-6501dd8b.png",              imageAlt: "Sarah Anderson"},
            {
              id: "2",              name: "Michael Chen",              handle: "@m_chen_tech",              testimonial: "The AI agents MECOGROW deployed are phenomenal. They learn our processes and continuously optimize them. Best investment we've made in automation technology.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/professional-woman-in-tech-business-atti-1772797626269-a27c31f9.png",              imageAlt: "Michael Chen"},
            {
              id: "3",              name: "Emily Rodriguez",              handle: "@emilyrod",              testimonial: "Professional, innovative, and results-driven. MECOGROW didn't just implement automation—they became partners in our growth. Highly recommend.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/professional-man-in-business-casual-atti-1772797627026-4685c398.png",              imageAlt: "Emily Rodriguez"},
            {
              id: "4",              name: "David Park",              handle: "@davidpark",              testimonial: "Outstanding execution. The team understood our complex requirements and delivered a solution that exceeded expectations. Our ROI exceeded 400% in the first year.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/professional-diverse-business-leader-in--1772797624072-898cda0a.png",              imageAlt: "David Park"},
            {
              id: "5",              name: "Jessica Warner",              handle: "@jessicaw_cto",              testimonial: "MECOGROW's expertise in AI automation is unmatched. They scaled our operations without scaling our headcount. Game-changer for our enterprise.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/professional-entrepreneur-in-modern-busi-1772797624681-ad447ad7.png",              imageAlt: "Jessica Warner"},
            {
              id: "6",              name: "Thomas Mitchell",              handle: "@tmitchell",              testimonial: "From consultation to deployment, every step was seamless. MECOGROW delivers intelligent automation solutions that actually work. Impressed.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZPqQCfpmvOc5udQPPnBKo97Uz/professional-business-executive-with-mod-1772797624322-120c4694.png",              imageAlt: "Thomas Mitchell"},
          ]}
          showRating={true}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Sparkles}
          title="Build Your AI Automation System"
          description="Let's transform your business with intelligent automation. Connect with our team today for a strategic consultation."
          background={{ variant: "rotated-rays-animated-grid" }}
          useInvertedBackground={true}
          inputPlaceholder="your@company.com"
          buttonText="Schedule Consultation"
          termsText="We respect your privacy. Unsubscribe at any time. Learn more in our Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="MECOGROW"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
          ariaLabel="MECOGROW footer"
          className="bg-background"
          wrapperClassName="relative"
          containerClassName="flex items-center justify-center py-12"
          logoClassName="text-3xl font-light tracking-tight"
        />
      </div>
    </ThemeProvider>
  );
}
