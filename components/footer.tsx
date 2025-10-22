import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl">TravelNest</span>
            </div>
            <p className="text-background/80 text-sm">
              Making travel planning effortless with expert guidance and seamless booking experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-background/80 hover:text-primary transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/visa" className="text-background/80 hover:text-primary transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-background/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Flight Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Hotel Reservations
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Visa Assistance
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Travel Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Tour Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-background/80">support@travelnest.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="text-background/80">123 Travel Street, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm">&copy; {currentYear} TravelNest. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
