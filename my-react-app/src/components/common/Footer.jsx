import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-10 pb-4 mt-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-neutral-700 pb-6 mb-6">
          <h3 className="text-lg font-semibold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
          <form className="flex gap-2 w-full md:w-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white text-black" />
            <Button type="submit" className="bg-black text-white">Subscribe</Button>
          </form>
        </div>
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          <div>
            <span className="font-bold text-xl tracking-tight">SHOP.CO</span>
            <p className="text-sm text-neutral-400 mt-2">Your one-stop shop for the latest fashion trends.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-neutral-300">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Help</h4>
            <ul className="space-y-1 text-sm text-neutral-300">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm text-neutral-300">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-neutral-700 pt-4 text-xs text-neutral-400">
          <span>&copy; {new Date().getFullYear()} SHOP.CO. All rights reserved.</span>
          <div className="flex gap-3 mt-2 md:mt-0">
            {/* Social icons placeholder */}
            <a href="#" aria-label="Facebook" className="hover:text-white">FB</a>
            <a href="#" aria-label="Twitter" className="hover:text-white">TW</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}