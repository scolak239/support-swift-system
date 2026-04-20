import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  MessageSquare,
  Search,
  Users,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  DollarSign,
  Handshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const processSteps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "You Reach Out",
    description:
      "Tell us what your business needs — whether it's IT support, automation, customer service, or logistics coordination.",
  },
  {
    icon: Search,
    step: "02",
    title: "We Analyze & Plan",
    description:
      "Our team evaluates your requirements and designs a tailored solution using the right mix of skills and resources.",
  },
  {
    icon: Users,
    step: "03",
    title: "We Deliver",
    description:
      "Our internal team and trusted partners across Europe and North America execute the work — integrated seamlessly into your workflows.",
  },
  {
    icon: Shield,
    step: "04",
    title: "Quality & Ongoing Support",
    description:
      "We ensure consistent quality, proactive communication, and long-term support as your needs evolve.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Flexible & Scalable Team",
    description:
      "Scale your team up or down based on demand. No long-term contracts, no rigid commitments.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We move quickly. From initial contact to deployment, we minimize lead times so you can focus on growth.",
  },
  {
    icon: TrendingUp,
    title: "Industry Experience",
    description:
      "Deep expertise in logistics, tech infrastructure, and business automation — we understand your challenges.",
  },
  {
    icon: DollarSign,
    title: "Cost-Efficient Solutions",
    description:
      "Get enterprise-level talent and service without the overhead of in-house hiring and training.",
  },
];

const About = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[30rem] font-heading font-black text-primary-foreground leading-none">
          S
        </span>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">
            About Us
          </p>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Built for Scale. Driven by Trust.
          </h1>
          <p className="text-gray-support text-lg max-w-2xl mx-auto">
            SumiTech is a Slovenia-based tech company delivering IT support,
            automation, customer service, and logistics solutions to businesses
            across Europe.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story + Stats */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SUMITECH was founded to help businesses access reliable tech
              talent and operational support — without the complexity of
              traditional hiring. Based in Slovenia, we operate with a hybrid
              model: core operations are managed locally, while work is
              delivered through a network of trusted remote collaborators across
              Europe.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We specialize in IT support & system maintenance, workflow
              automation, customer support outsourcing, and logistics &
              dispatch consulting. Our clients range from startups to
              established mid-size companies looking for a dependable partner
              to handle critical operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're not a freelance marketplace. We're a structured, scalable
              company that takes ownership of the work we deliver — and builds
              long-term partnerships with every client.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "4+", label: "Service Verticals" },
                { value: "EU", label: "Distributed Team" },
                { value: "24h", label: "Response Time" },
                { value: "100%", label: "Client Retention" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-section-light rounded-xl p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 md:py-28 bg-section-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To empower small and mid-size businesses with scalable, cost-efficient IT and operational solutions — delivered by a team that treats your business like its own.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become the trusted operational partner for growing businesses across Europe — known for reliability, speed, and long-term value.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background rounded-2xl p-10 border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <item.icon size={28} className="text-orange" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How We Work */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">
            How We Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A clear, structured process that gets you from challenge to
            solution — fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="text-5xl font-heading font-black text-accent/10 mb-4">
                {step.step}
              </div>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <step.icon size={24} className="text-orange" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team / Collaboration */}
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
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">
              Local Expertise. European Reach.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SUMITECH combines local expertise based in Slovenia with a
              carefully curated network of trusted partners and collaborators
              across Europe. This hybrid model allows us to deliver scalable,
              high-quality solutions while maintaining the agility and personal
              touch of a focused team.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every collaborator in our network is vetted, experienced, and
              aligned with our standards for quality and communication. Whether
              we're deploying an IT support team or building an automation
              workflow, you get the reliability of a structured company with the
              flexibility of a distributed workforce.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Slovenia HQ", "Remote-First", "EU Partners", "Vetted Teams"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
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
            <div className="relative z-10 space-y-6">
              {[
                {
                  icon: Globe,
                  label: "Distributed Across Europe",
                  desc: "Collaborators in multiple EU countries for timezone-aligned delivery",
                },
                {
                  icon: Handshake,
                  label: "Long-Term Partnerships",
                  desc: "We build relationships, not one-off transactions",
                },
                {
                  icon: Shield,
                  label: "Vetted & Trusted",
                  desc: "Every team member meets our quality and reliability standards",
                },
                {
                  icon: Clock,
                  label: "Always Available",
                  desc: "Responsive communication and proactive project management",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-orange" />
                  </div>
                  <div>
                    <p className="text-primary-foreground font-semibold text-sm">
                      {item.label}
                    </p>
                    <p className="text-gray-support text-xs mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">
            The SUMITECH Advantage
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">
            Why Choose Us
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border border-border rounded-lg p-8 text-center hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 mx-auto">
                <item.icon size={24} className="text-orange" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-section-dark py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-6">
            Ready to build your dedicated team?
          </h2>
          <p className="text-gray-support text-lg mb-10 max-w-xl mx-auto">
            Let's discuss how SUMITECH can help you scale operations, reduce
            costs, and grow with confidence.
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

export default About;
