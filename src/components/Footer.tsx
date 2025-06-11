import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link 
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-colors rounded-sm"
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Obadiah</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Connecting talented seamstresses with customers for perfect African fashion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/seamstresses">Find Seamstresses</FooterLink></li>
              <li><FooterLink href="/how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="/faq">FAQ</FooterLink></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <SocialIcon href="https://facebook.com" icon="📘" />
              <SocialIcon href="https://twitter.com" icon="🐦" />
              <SocialIcon href="https://instagram.com" icon="📸" />
              <SocialIcon href="https://whatsapp.com" icon="💬" />
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Email: contact@obadiah.com<br />
              Phone: +233 XX XXX XXXX
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Obadiah. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              Tailored in Ghana ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 