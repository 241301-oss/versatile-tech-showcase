// Static site — no router needed
import {
  ArrowRight,
  Monitor,
  Cpu,
  Network,
  Video,
  ClipboardList,
  CreditCard,
  Router as RouterIcon,
  Radio,
  Cable,
  Star,
  ShieldCheck,
  Zap,
  Users2,
  Rocket,
  CheckCircle2,
  MapPin,
  Mail,
  Phone as PhoneIcon,
  CalendarClock,
  Sparkles,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Logo } from "@/components/site/Logo";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero-engineer.jpg";
import teamImg from "@/assets/about-team.jpg";
import technicianImg from "@/assets/technician.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Monitor,
    title: "Desktop IT Support",
    desc: "Responsive on-site and remote assistance to keep every workstation productive, secure, and running at peak performance.",
  },
  {
    icon: Cpu,
    title: "Hardware IT Support",
    desc: "Diagnostics, repair, and lifecycle management for servers, workstations, and peripherals across your organization.",
  },
  {
    icon: Network,
    title: "IT Network Services",
    desc: "Design, deployment, and monitoring of high-performance wired and wireless networks built for uptime and scale.",
  },
  {
    icon: Video,
    title: "Audio / Visual Support",
    desc: "Professional installation and management of conferencing systems, displays, and immersive AV environments.",
  },
  {
    icon: ClipboardList,
    title: "IT Project Management",
    desc: "End-to-end planning and delivery of technology rollouts — on time, on budget, and aligned to business goals.",
  },
  {
    icon: CreditCard,
    title: "POS Services",
    desc: "Reliable point-of-sale setup, integration, and support to keep retail and hospitality operations running smoothly.",
  },
  {
    icon: RouterIcon,
    title: "Router Installation & Configuration",
    desc: "Enterprise-grade router deployment with secure configurations tailored to your bandwidth and workflow needs.",
  },
  {
    icon: Radio,
    title: "Cradlepoint Installation & Management",
    desc: "Certified deployment and ongoing management of Cradlepoint solutions for resilient LTE and 5G connectivity.",
  },
  {
    icon: Cable,
    title: "Networking Services",
    desc: "Structured cabling, switch configuration, and network optimization engineered for a modern digital workplace.",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Fast Response & Quick Resolution",
    desc: "Rapid dispatch and industry-leading first-response times to minimize downtime and keep your teams productive.",
  },
  {
    icon: Users2,
    title: "Experienced IT Professionals",
    desc: "Certified engineers with decades of combined experience across enterprise infrastructure and business technology.",
  },
  {
    icon: ShieldCheck,
    title: "Tailored Business Solutions",
    desc: "Every engagement is scoped to your workflow, industry, and growth stage — no one-size-fits-all templates.",
  },
  {
    icon: Rocket,
    title: "Scalable Future-Ready Services",
    desc: "Architectures designed to evolve with your business — from a single office to a nationwide multi-site footprint.",
  },
];

const technicianChecklist = [
  "On-Site Technicians",
  "Remote Technical Support",
  "Network Setup",
  "Hardware Installation",
  "Software Configuration",
  "Emergency IT Support",
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    company: "Northline Retail Group",
    quote:
      "Versatile Tech Solution rolled out POS and networking across 40 of our locations without a single business-hour outage. Truly enterprise-grade delivery.",
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "IT Manager",
    company: "Meridian Logistics",
    quote:
      "Their Cradlepoint expertise transformed our fleet connectivity. Response times are astonishing — they resolve issues before we even file a ticket.",
    initials: "DC",
  },
  {
    name: "Priya Ramanathan",
    role: "COO",
    company: "Beacon Hospitality",
    quote:
      "From cabling to AV to daily desktop support, the team feels like an extension of ours. Professional, proactive, and genuinely invested in our success.",
    initials: "PR",
  },
  {
    name: "Marcus Thompson",
    role: "CFO",
    company: "Harbor Financial",
    quote:
      "Reliable, secure, and refreshingly transparent. Versatile Tech Solution modernized our infrastructure with zero disruption to daily operations.",
    initials: "MT",
  },
];

const stats = [
  { value: 236, suffix: "K+", label: "IT Specialists" },
  { value: 490, suffix: "M+", label: "Happy Clients" },
  { value: 4.9, decimals: 1, label: "Customer Rating" },
  { value: 139, suffix: "+", label: "Expert Team" },
];

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-14 max-w-2xl text-center animate-fade-up">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-[1.1]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28">
        {/* decorations */}
        <div className="hero-blob top-0 -left-24 h-96 w-96 bg-primary/40" />
        <div className="hero-blob top-40 right-0 h-[28rem] w-[28rem] bg-secondary/40" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(13 46 94 / 0.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />

        <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted IT Partner
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.05] text-navy">
              Reliable IT Support.
              <br />
              <span className="gradient-text">Smarter Business Operations.</span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-foreground/80">
              Deliver Fast, Secure &amp; Scalable IT Solutions for Modern Businesses.
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
              Versatile Tech Solution delivers dependable IT support,
              infrastructure management, networking, hardware services, and
              expert technical assistance — empowering your business to operate
              efficiently, securely, and at scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Instant Support <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:border-primary hover:text-primary transition-colors"
              >
                Discover Services
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#FFB800] text-[#FFB800]"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-navy">4.9 Rating</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right — image + floating cards */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_80px_-30px_rgb(13_46_94/0.35)] border border-white/60">
              <img
                src={heroImg}
                alt="IT engineer monitoring dashboards in a modern office"
                width={1280}
                height={1280}
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 via-transparent to-transparent" />
            </div>

            {/* floating stat cards */}
            <div className="hidden sm:block absolute -left-6 top-14 glass-card rounded-2xl px-5 py-4 animate-float">
              <div className="text-2xl font-extrabold gradient-text">236K+</div>
              <div className="text-xs font-semibold text-muted-foreground">
                IT Specialists
              </div>
            </div>
            <div
              className="hidden sm:block absolute -right-4 top-40 glass-card rounded-2xl px-5 py-4 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-2xl font-extrabold gradient-text">490M+</div>
              <div className="text-xs font-semibold text-muted-foreground">
                Happy Clients
              </div>
            </div>
            <div
              className="hidden sm:flex absolute -left-4 bottom-24 glass-card rounded-2xl px-5 py-4 items-center gap-3 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
                <Star className="h-5 w-5 fill-white" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-navy">4.9</div>
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Customer Rating
                </div>
              </div>
            </div>
            <div
              className="hidden sm:block absolute -right-2 bottom-10 glass-card rounded-2xl px-5 py-4 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-2xl font-extrabold gradient-text">139+</div>
              <div className="text-xs font-semibold text-muted-foreground">
                Expert Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <div className="bg-surface">
        <Section
          id="services"
          eyebrow="Our Services"
          title="Our Services Overview"
          subtitle="We have the right solution for every technology challenge — from a single workstation to a nationwide network."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="card-lift group rounded-3xl border border-border bg-white p-8 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary group-hover:gradient-primary group-hover:text-white transition-all">
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ABOUT */}
      <Section id="about" eyebrow="About Us">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative animate-fade-up">
            <div className="absolute -top-6 -left-6 h-40 w-40 rounded-3xl gradient-primary opacity-20 blur-2xl" />
            <div className="relative rounded-[28px] overflow-hidden border border-white/60 shadow-[0_30px_60px_-25px_rgb(13_46_94/0.3)]">
              <img
                src={teamImg}
                alt="IT engineers collaborating"
                loading="lazy"
                width={1280}
                height={1024}
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-navy">Certified &amp; Trusted</div>
                <div className="text-xs text-muted-foreground">
                  Enterprise-grade delivery
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-[1.1]">
              Experienced <span className="gradient-text">IT Professionals</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For years, Versatile Tech Solution has partnered with businesses
              of every size to simplify technology and unlock growth. Our
              certified engineers combine deep technical expertise with a
              service-first mindset — delivering solutions that are secure,
              scalable, and built to last.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From daily IT support to strategic infrastructure projects, we
              handle the complexity so your teams can stay focused on what they
              do best.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-white p-5 card-lift"
                >
                  <div className="text-3xl font-extrabold gradient-text">
                    <Counter
                      target={s.value}
                      suffix={s.suffix}
                      decimals={s.decimals}
                    />
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-primary/20 bg-primary-soft/60 p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">
                  Our Mission
                </div>
                <p className="mt-2 text-sm text-navy/80 leading-relaxed">
                  To deliver dependable, forward-thinking IT solutions that
                  empower every business to operate at its best.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Our Vision
                </div>
                <p className="mt-2 text-sm text-navy/80 leading-relaxed">
                  To be the technology partner of choice for modern businesses
                  seeking clarity, security, and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <div className="bg-surface relative overflow-hidden">
        <div className="hero-blob top-20 left-1/3 h-96 w-96 bg-primary/25" />
        <Section
          id="why"
          eyebrow="Why Choose Us"
          title="Built for the businesses that can't afford downtime"
          subtitle="Everything you need from a modern IT partner — response, expertise, and a roadmap that scales with you."
        >
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="card-lift group rounded-3xl border border-border bg-white p-8 flex gap-5 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="shrink-0 grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-white shadow-[var(--shadow-glow)]">
                  <r.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-navy">{r.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* TECHNICIAN */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative animate-fade-up order-2 lg:order-1">
            <div className="absolute -bottom-6 -left-6 h-52 w-52 rounded-full gradient-primary opacity-25 blur-3xl" />
            <div className="relative rounded-[28px] overflow-hidden border border-white/60 shadow-[0_30px_60px_-25px_rgb(13_46_94/0.35)]">
              <img
                src={technicianImg}
                alt="Certified IT technician"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms] order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> Certified Technicians
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy leading-[1.1]">
              A dedicated expert,
              <br />
              <span className="gradient-text">ready when you are.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Book a certified IT technician for on-site or remote assistance —
              from urgent troubleshooting to full deployments, our specialists
              show up prepared, professional, and results-focused.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {technicianChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-navy">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-transform"
            >
              Hire IT Technician <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <div className="bg-surface relative overflow-hidden">
        <div className="hero-blob top-0 right-0 h-96 w-96 bg-secondary/30" />
        <Section
          id="testimonials"
          eyebrow="Testimonials"
          title="Trusted by teams that demand reliability"
          subtitle="Real feedback from operations, IT, and finance leaders who rely on us every day."
        >
          <div className="relative">
            <div
              className="flex gap-6 animate-marquee"
              style={{ width: "max-content" }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="glass-card w-[360px] sm:w-[420px] shrink-0 rounded-3xl p-8"
                >
                  <Quote className="h-8 w-8 text-primary/40" />
                  <p className="mt-4 text-navy/85 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-full gradient-primary text-white font-bold">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-navy">
                          {t.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t.role} · {t.company}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-[#FFB800] text-[#FFB800]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
          </div>
        </Section>
      </div>

      {/* CONTACT */}
      <Section id="contact">
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-white p-8 md:p-14 shadow-[0_40px_80px_-40px_rgb(13_46_94/0.3)]">
          <div className="hero-blob -top-24 -right-24 h-96 w-96 bg-primary/30" />
          <div className="hero-blob -bottom-24 -left-24 h-96 w-96 bg-secondary/25" />

          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <PhoneIcon className="h-3.5 w-3.5" /> Get In Touch
              </div>
              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy leading-[1.1]">
                Talk to an <span className="gradient-text">Expert</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Need technical support or professional advice? Our team is
                standing by to help you move faster.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+17372833257"
                  className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-transform"
                >
                  <CalendarClock className="h-4 w-4" /> Schedule a Free Call
                </a>
                <a
                  href="mailto:versatile.techdispatch@versatiledispatchbpo.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:border-primary hover:text-primary transition-colors"
                >
                  Contact Information
                </a>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-border bg-white p-5">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </div>
                  <a
                    href="tel:+17372833257"
                    className="mt-1 block text-sm font-semibold text-navy hover:text-primary"
                  >
                    737 283 3257
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-white p-5">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <a
                    href="mailto:versatile.techdispatch@versatiledispatchbpo.com"
                    className="mt-1 block text-sm font-semibold text-navy hover:text-primary break-words"
                  >
                    versatile.techdispatch@versatiledispatchbpo.com
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-white p-5">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Address
                  </div>
                  <div className="mt-1 text-sm font-semibold text-navy leading-relaxed">
                    5900 Balcones Dr, STE 12908
                    <br />
                    Austin TX 78731
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-[24px] overflow-hidden border border-border min-h-[400px]">
              <iframe
                title="Versatile Tech Solution location"
                src="https://www.google.com/maps?q=5900+Balcones+Dr+STE+12908+Austin+TX+78731&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-navy text-white/80 relative overflow-hidden">
        <div className="hero-blob -top-24 -left-24 h-96 w-96 bg-primary/25" />
        <div className="container-x relative py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-1">
              <div className="[&_.text-navy]:text-white [&_.text-primary]:text-primary">
                <Logo />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Reliable IT support, networking, and infrastructure services
                built for the businesses shaping what's next.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "X" },
                  { icon: Youtube, label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 hover:bg-primary hover:border-primary transition-colors"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Quick Links
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["Home", "#home"],
                  ["About", "#about"],
                  ["Why Choose Us", "#why"],
                  ["Testimonials", "#testimonials"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Services
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {services.slice(0, 6).map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Contact
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  737 283 3257
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span className="break-words">
                    versatile.techdispatch@versatiledispatchbpo.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  5900 Balcones Dr, STE 12908, Austin TX 78731
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div>© 2026 Versatile Tech Solution. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
