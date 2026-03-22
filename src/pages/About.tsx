import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Globe, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Reliability", description: "We deliver consistent, dependable service you can count on every day." },
  { icon: Zap, title: "Efficiency", description: "Our professionals integrate fast and start delivering value immediately." },
  { icon: Globe, title: "Flexibility", description: "Scale your team up or down based on your business needs — no strings attached." },
  { icon: Users, title: "Partnership", description: "We work as an extension of your team, aligned with your goals and culture." },
];

const stats = [
  { value: "50+", label: "Professionals" },
  { value: "30+", label: "Happy Clients" },
  { value: "6", label: "Service Areas" },
  { value: "24/7", label: "Support Available" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const About = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[30rem] font-heading font-black text-primary-foreground leading-none">S</span>
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Who We Are</h1>
          <p className="text-gray-support text-lg max-w-2xl mx-auto">
            SUMITECH is a staffing solutions company providing skilled, English-speaking professionals to businesses worldwide.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SUMITECH was founded with a simple mission: help businesses access top-tier talent without the overhead of traditional hiring. We saw companies struggling with recruitment costs, lengthy onboarding, and inconsistent staffing — and we built a better solution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we provide dedicated professionals across customer support, IT, dispatching, account management, and more. Our team members are English-speaking, tech-savvy, and ready to integrate seamlessly into your workflows from day one.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-section-light rounded-xl p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1">{stat.value}</p>
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
            { icon: Target, title: "Our Mission", text: "To empower businesses with reliable, skilled professionals who drive growth and efficiency — without the traditional hiring complexities." },
            { icon: Eye, title: "Our Vision", text: "To be the go-to staffing partner for businesses worldwide, known for quality, flexibility, and seamless integration." },
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
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">Our Values</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
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
                <v.icon size={24} className="text-orange" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-section-dark py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-6">Ready to work with us?</h2>
          <p className="text-gray-support text-lg mb-10 max-w-xl mx-auto">
            Let's discuss how SUMITECH can help you build a reliable, dedicated team.
          </p>
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground px-10 py-4 rounded-md font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-lg"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </>
);

export default About;
