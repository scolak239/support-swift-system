import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Headphones, Users, Truck, ShieldCheck, ClipboardList, Wrench, ArrowRight, CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Users,
    title: "Account Management",
    description: "Dedicated account managers who build strong client relationships, handle communication, and drive retention for your business.",
    features: ["Client relationship management", "Communication handling", "Retention strategy", "Reporting & analytics"],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Skilled support agents who handle your tickets, calls, and chats — delivering fast, professional service to your customers.",
    features: ["Ticket management", "Live chat support", "Phone support", "Email handling"],
  },
  {
    icon: Truck,
    title: "Dispatching Services",
    description: "Efficient dispatchers who coordinate logistics, manage schedules, and ensure timely operations for your fleet or service teams.",
    features: ["Route optimization", "Schedule management", "Real-time coordination", "Fleet tracking"],
  },
  {
    icon: ShieldCheck,
    title: "IT Support",
    description: "Experienced IT professionals who manage infrastructure, troubleshoot systems, and keep your technology running smoothly.",
    features: ["Infrastructure management", "System troubleshooting", "Network administration", "Security monitoring"],
  },
  {
    icon: ClipboardList,
    title: "Data Entry & Admin",
    description: "Reliable team members for data entry, CRM updates, documentation, and other administrative tasks your business needs.",
    features: ["CRM data management", "Document processing", "Database maintenance", "Administrative tasks"],
  },
  {
    icon: Wrench,
    title: "Device Troubleshoot & Repair",
    description: "Skilled technicians who diagnose hardware and software issues, perform repairs, and ensure your devices are always operational.",
    features: ["Hardware diagnostics", "Software troubleshooting", "Device repair", "Preventive maintenance"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Services = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[30rem] font-heading font-black text-primary-foreground leading-none">S</span>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">What We Provide</p>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-gray-support text-lg max-w-2xl mx-auto">
            From customer support to IT infrastructure, we provide skilled professionals ready to integrate with your team.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Services Detail */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 space-y-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <service.icon size={28} className="text-orange" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-orange shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`bg-section-light rounded-2xl p-10 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <service.icon size={120} className="text-accent/20" strokeWidth={1} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-section-dark py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-6">Need a service not listed?</h2>
          <p className="text-gray-support text-lg mb-10 max-w-xl mx-auto">
            We're flexible. Tell us what you need and we'll find the right professionals for you.
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

export default Services;
