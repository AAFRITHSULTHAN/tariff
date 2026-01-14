import { Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const links = {
    Services: ["Strategic Consulting", "Performance Marketing", "Creative Design", "Video Production"],
    Company: ["About Us", "Our Process", "Case Studies", "Careers"],
    Resources: ["Blog", "Growth Guide", "Templates", "Webinars"],
  }

  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-tighter text-white">QWANTOME</span>
                <span className="text-xs tracking-widest text-gray-400 uppercase">Consulting Group</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering startups with growth strategies that actually work. From strategy to execution, we're your
              partner in building sustainable success.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Mail, href: "mailto:hello@accordmarketers.com" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Qwantome. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
