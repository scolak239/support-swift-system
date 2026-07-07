import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/">
          <img src="/logo.png" alt="SUMITECH" className="h-8" />
        </Link>
        <div className="flex gap-6 text-sm text-gray-support">
          <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
        <p className="text-gray-support text-sm">
          © {new Date().getFullYear()} SumiTech. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;