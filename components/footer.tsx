import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, Star, Factory, Shield, Users, ThumbsUp } from "lucide-react"
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaTelegram, FaGoogle } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-700">
            <div className="container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info - Enhanced */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <Link href="/" className="flex items-center space-x-2">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/logo.jpg"
                                            alt="vasifytech Logo"
                                            className="h-full w-full object-fill"
                                        />
                                    </div>
                                </Link>
                                <div className="absolute -top-1 -right-1">
                                    <div className="bg-green-500 text-white p-1 rounded-full">
                                        <Star className="h-2 w-2" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">VasifyTech PVT LTD</div>
                                <div className="text-blue-300 text-sm flex items-center gap-1">
                                    <Factory className="h-3 w-3" />
                                    Since 2024 • Mumbai
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            The ultimate WhatsApp Business Platform for modern businesses.            </p>

                        <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                            <div className="flex items-center gap-2 mb-1">
                                <Shield className="h-4 w-4 text-blue-400" />
                                <div className="font-semibold text-white text-sm">GST No:</div>
                            </div>
                            <div className="text-gray-300 text-sm font-mono">27AAKCV0353N1ZW</div>
                        </div>
                    </div>

                    {/* Quick Links - Enhanced */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-white flex items-center gap-2">
                            <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
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
                                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm p-2 rounded-lg hover:bg-gray-800/50 hover:translate-x-1 flex items-center gap-2 group"
                                >
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info - Enhanced */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-white flex items-center gap-2">
                            <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                            Contact Info
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300">
                                <div className="bg-blue-600/20 p-2 rounded-lg flex-shrink-0">
                                    <MapPin className="h-4 w-4 text-blue-400" />
                                </div>
                                <div className="text-sm text-gray-300 leading-relaxed">
                                    601, 6th floor, Kohinoor CHS, Dattamandir road, dahanukarwadi, kandivali west, Mumbai – 400067                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300 group">
                                <div className="bg-green-600/20 p-2 rounded-lg">
                                    <Phone className="h-4 w-4 text-green-400" />
                                </div>
                                <div className="text-sm">
                                    <div className="text-gray-300 group-hover:text-white transition-colors">+91 9769754446</div>
                                    <div className="text-gray-400 text-xs">/ +91 9004694689</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300 group">
                                <div className="bg-red-600/20 p-2 rounded-lg">
                                    <Mail className="h-4 w-4 text-red-400" />
                                </div>
                                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    sushil@vasifytech.com
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links & Order Links - Enhanced */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-white flex items-center gap-2">
                            <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                            Connect & Order
                        </h3>
                        <div className="space-y-3">
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
                                },
                            ].map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800/30 transition-all duration-300 group"
                                >
                                    <div className={`p-2 rounded-lg ${link.bgColor}`}>
                                        <link.icon className={`h-4 w-4 ${link.iconColor}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`text-sm font-medium text-gray-300 group-hover:text-white ${link.color} transition-colors`}>
                                            {link.label}
                                        </div>
                                        <div className="text-gray-500 text-xs truncate">
                                            {link.description}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Enhanced */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 VasifyTech. All rights reserved.</p>
                    <Link href="/privacy-policy" className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>Privacy policy</p>
                    </Link>
                </div>

            </div>
        </footer>
    )
}
export default Footer