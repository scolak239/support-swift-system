import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Headphones,
  Users,
  ClipboardList,
  Monitor,
  Truck,
  Wrench,
  ShieldCheck,
  Cog,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trustPoints = [
  { icon: Users, text: "Distributed European team" },
  { icon: Monitor, text: "Tech-savvy professionals" },
  { icon: ClipboardList, text: "Flexible & scalable solutions" },
];

const services = [
  {
    icon: ShieldCheck,
    title: "IT Support & Maintenance",
    description:
      "Experienced professionals who manage infrastructure, troubleshoot systems, and keep your technology running smoothly.",
  },
  {
    icon: Cog,
    title: "Automation Solutions",
    description:
      "Streamline your workflows with Google Sheets automation, system integrations, and custom process optimization.",
  },
  {
    icon: Headphones,
    title: "Customer Support Outsourcing",
    description:
      "Skilled support agents who handle your tickets, calls, and chats — delivering fast, professional service to your customers.",
  },
  {
    icon: Truck,
    title: "Logistics & Dispatch Consulting",
    description:
      "Efficient coordination for logistics operations, schedule management, and dispatch optimization for your fleet or service teams.",
  },
  {
    icon: Users,
    title: "Account Management",
    description:
      "Dedicated account managers who build strong client relationships, handle communication, and drive retention.",
  },
  {
    icon: Wrench,
    title: "Device Troubleshoot & Repair",
    description:
      "Skilled technicians who diagnose hardware and software issues, perform repairs, and ensure your devices are always operational.",
  },
];

const benefits = [
  "Structured company with a distributed European team",
  "Flexible — scale your team up or down as needed",
  "No recruitment headaches — we handle staffing",
  "Cost-effective alternative to in-house hiring",
  "Seamless integration with your existing tools & workflows",
  "Long-term partnerships, not one-off projects",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[40rem] font-heading font-black text-primary-foreground leading-none">
            S
          </span>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              IT support, automation &{" "}
              <span className="text-orange">
                scalable operations for your business.
              </span>
            </h1>
            <p className="text-gray-support text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              SUMITECH is a Slovenia-based tech company providing IT support,
              workflow automation, customer service outsourcing, and logistics
              consulting — so you can focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold text-center hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <a
                href="#services"
                className="border border-gray-support/30 text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-center hover:bg-primary-foreground/5 transition-colors"
              >
                View Services
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex items-center gap-2 text-gray-support text-sm"
                >
                  <point.icon size={16} className="text-orange shrink-0" />
                  {point.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">
              What We Provide
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group border border-border rounded-lg p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon size={24} className="text-orange" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SUMITECH */}
      <section className="py-20 md:py-28 bg-section-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">
                Why Us
              </p>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
                Why Choose SUMITECH?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine local expertise in Slovenia with a trusted network of
                partners across Europe. Our hybrid model means you get the
                reliability of a structured company with the flexibility of a
                distributed team — no lengthy hiring, no overhead.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="text-orange shrink-0 mt-0.5"
                    />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none">
                <span className="text-[14rem] font-heading font-black text-primary-foreground leading-none">
                  S
                </span>
              </div>
              <div className="relative z-10 space-y-8">
                {[
                  { label: "IT Support & Maintenance", desc: "Infrastructure management, troubleshooting & monitoring" },
                  { label: "Automation Solutions", desc: "Google Sheets, workflow integrations & process optimization" },
                  { label: "Customer Support", desc: "Professional agents for tickets, calls & live chat" },
                  { label: "Logistics Consulting", desc: "Dispatch coordination, route planning & fleet management" },
                  { label: "Account Management", desc: "Dedicated managers for client relationships & retention" },
                  { label: "Device Repair", desc: "Hardware & software diagnostics, repair & maintenance" },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-accent pl-4">
                    <p className="text-primary-foreground font-semibold text-sm">
                      {item.label}
                    </p>
                    <p className="text-gray-support text-xs mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="text-[30rem] font-heading font-black text-primary-foreground">
            S
          </span>
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-6">
              Need reliable people for your team?
            </h2>
            <p className="text-gray-support text-lg mb-10 max-w-xl mx-auto">
              Tell us what roles you need filled and we'll provide skilled
              professionals ready to start.
            </p>
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-10 py-4 rounded-md font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-lg"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
