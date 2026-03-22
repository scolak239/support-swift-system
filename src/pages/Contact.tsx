import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[30rem] font-heading font-black text-primary-foreground leading-none">S</span>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-orange text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-gray-support text-lg max-w-xl mx-auto">
              Ready to build your dedicated team? Reach out and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input name="name" placeholder="Full Name" required className="bg-section-light border-border" />
                  <Input name="email" type="email" placeholder="Email Address" required className="bg-section-light border-border" />
                </div>
                <Input name="company" placeholder="Company Name" className="bg-section-light border-border" />
                <Input name="subject" placeholder="Subject" required className="bg-section-light border-border" />
                <Textarea name="message" placeholder="Tell us about your needs..." rows={5} required className="bg-section-light border-border" />
                <Button type="submit" disabled={loading} className="bg-accent text-accent-foreground hover:opacity-90 px-8 py-3 h-auto text-sm font-semibold">
                  {loading ? "Sending..." : "Send Message"} <ArrowRight size={16} />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">Contact Information</h2>
              {[
                { icon: Mail, label: "Email", value: "info@sumitech.eu", href: "mailto:info@sumitech.eu" },
                { icon: Phone, label: "Phone", value: "+386 70 493 447", href: "tel:+38670493447" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/38670493447" },
                { icon: MapPin, label: "Location", value: "Planinska Cesta 29, Sevnica, 8290, Slovenia", href: undefined },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("https") ? "_blank" : undefined}
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-primary rounded-2xl p-8 mt-8">
                <h3 className="text-primary-foreground font-heading font-semibold mb-3">Why work with us?</h3>
                <ul className="space-y-3 text-gray-support text-sm">
                  <li>✓ Response within 24 hours</li>
                  <li>✓ No long-term contracts required</li>
                  <li>✓ Flexible team scaling</li>
                  <li>✓ Free initial consultation</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
