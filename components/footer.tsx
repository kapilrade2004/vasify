import Link from "next/link"
import { MapPin, Phone, Mail, Star, Factory, Shield } from "lucide-react"
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-800">
      <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-14 md:py-16">
        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.jpg"
                    alt="VasifyTech Logo"
                    className="h-full w-full object-fill"
                  />
                </div>
              </Link>
              <div className="flex-grow">
                <div className="text-base sm:text-lg font-bold text-white">VasifyTech PVT LTD</div>
                <div className="text-blue-300 text-xs sm:text-sm flex items-center gap-1">
                  <Factory className="h-3 w-3" />
                  Since 2024 • Mumbai
                </div>
              </div>
              <div className="bg-green-500 text-white ml-2 p-1 rounded-full">
                <Star className="h-3 w-3" />
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              The ultimate WhatsApp Business Platform for modern businesses.
            </p>
            <div className="bg-gray-800/60 rounded-xl p-3 border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="font-semibold text-white text-xs">GST No:</span>
              </div>
              <div className="text-gray-300 text-xs font-mono">27AAKCV0353N1ZW</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/features", label: "Features" },
                { href: "/services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/blogs", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-xs sm:text-sm p-1 sm:p-2 rounded-md hover:bg-gray-800/60 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg hover:bg-gray-800/40 p-2 transition-all">
                <span className="bg-blue-600/20 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </span>
                <span className="text-xs sm:text-sm text-gray-300">
                  Dani Sanjay Apartment, 102, near Datta Mandir Road, beside Dutta mandir, Kandivali, Veena Sitar, Dahanukar Wadi, Kandivali West, Mumbai, Maharashtra 400067
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg hover:bg-gray-800/40 p-2 transition-all group">
                <span className="bg-green-600/20 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-green-400" />
                </span>
                <span className="text-xs sm:text-sm">
                  <span className="text-gray-300 group-hover:text-white transition-colors">+91 9769754446</span><br />
                  <span className="text-gray-400">/ +91 9004694689</span>
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg hover:bg-gray-800/40 p-2 transition-all group">
                <span className="bg-red-600/20 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-red-400" />
                </span>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                  <a href="mailto:sushil@vasifytech.com">sushil@vasifytech.com</a>
                </span>
              </div>
            </div>
          </div>

          {/* Social / Order Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
              Connect & Order
            </h3>
            <div className="space-y-2">
              {[
                {
                  href: "https://wa.me/919769026133",
                  icon: FaWhatsapp,
                  label: "WhatsApp Order",
                  color: "hover:text-green-400",
                  bgColor: "bg-green-600/20",
                  iconColor: "text-green-400",
                  description: "Direct chat for orders"
                },
                {
                  href: "https://www.instagram.com/vasifytech?igsh=dnIweG5zdmhvemRo",
                  icon: FaInstagram,
                  label: "Instagram",
                  color: "hover:text-pink-400",
                  bgColor: "bg-pink-600/20",
                  iconColor: "text-pink-400",
                  description: "VasifyTech on Instagram"
                },
                {
                  href: "https://www.facebook.com/profile.php?id=61564894984098&mibextid=ZbWKwL",
                  icon: FaFacebook,
                  label: "Facebook",
                  color: "hover:text-blue-400",
                  bgColor: "bg-blue-600/20",
                  iconColor: "text-blue-400",
                  description: "Follow our page"
                },
                {
                  href: "https://www.youtube.com/@Techbuddy_Vasify",
                  icon: FaYoutube,
                  label: "YouTube",
                  color: "hover:text-red-400",
                  bgColor: "bg-red-600/20",
                  iconColor: "text-red-400",
                  description: "Product videos"
                }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/60 transition-all duration-300 group`}
                >
                  <span className={`p-2 rounded-lg ${link.bgColor}`}>
                    <link.icon className={`h-5 w-5 ${link.iconColor}`} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className={`text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white ${link.color} transition-colors`}>
                      {link.label}
                    </span>
                    <span className="text-gray-400 text-xs block truncate">{link.description}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <p>&copy; 2025 VasifyTech | All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-gray-200 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
