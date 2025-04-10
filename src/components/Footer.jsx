import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-11 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-8 text-sm p-4 py-7">

        {/* Brand Info */}
        <div className="min-w-[150px]">
          <h2 className="text-primary text-xl font-bold mb-2">Eraah</h2>
          <p>Your AI-powered digital transformation partner.</p><br />
          <p>OUR OFFICE <br />
            B-38, Block M, Old DLF Colony,<br />
            Sector 14, Gurugram, Haryana<br />
            PIN : 122001</p>
        </div>

        {/* Quick Links */}
        <div className="min-w-[150px] space-y-2">
          <h3 className="text-white font-semibold">Join Us</h3>
          <ul className="space-y-1">
            <li><Link to="#" className="hover:text-primary">Mission & Vision</Link></li>
            <li><Link to="#" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link to="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-primary">Careers</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="min-w-[150px] space-y-2">
          <h3 className="text-white font-semibold">Contact Us</h3>
          <ul className="space-y-1">
            <li><Link to="mailto:shrey.bansal@eraah.org" className="hover:text-primary">Email</Link></li>
            <li><Link to="tel:9958828233" className="hover:text-primary">Mobile</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="min-w-[150px] text-center">
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <div className="flex gap-4 justify-center">
            <a href="https://www.linkedin.com/company/eraah/" className="hover:text-primary"><LinkedInIcon /></a>
            <a href="https://x.com/eraah_org?s=21&t=78VDFA9U7opi0vJ_Df7MnQ" className="hover:text-primary"><XIcon /></a>
            <a href="https://www.instagram.com/eraah_org?igsh=M3k3NzMyMmt6b20%3D" className="hover:text-primary"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-xs text-gray-200">
        © {new Date().getFullYear()} Eraah. All rights reserved.
      </div>
    </footer>
  );
}
