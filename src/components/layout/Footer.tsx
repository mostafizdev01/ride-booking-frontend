import { Car, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
     <footer className="">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {/* Company Info */}
             <div className="space-y-4">
               <Link to="/" className="flex items-center gap-2">
                 <div className="p-2 bg-primary rounded-lg">
                   <Car className="h-6 w-6 text-primary-foreground" />
                 </div>
                 <span className="text-xl font-bold">RideShare</span>
               </Link>
               <p className="text-gray-400 text-sm">
                 Your trusted ride partner. Safe, reliable, and affordable transportation at your fingertips.
               </p>
             </div>
   
             {/* Quick Links */}
             <div>
               <h3 className="font-semibold mb-4">Quick Links</h3>
               <ul className="space-y-2 text-sm">
                 <li>
                   <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                     About Us
                   </Link>
                 </li>
                 <li>
                   <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                     Features
                   </Link>
                 </li>
                 <li>
                   <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                     FAQ
                   </Link>
                 </li>
                 <li>
                   <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                     Contact
                   </Link>
                 </li>
               </ul>
             </div>
   
             {/* Services */}
             <div>
               <h3 className="font-semibold mb-4">Services</h3>
               <ul className="space-y-2 text-sm">
                 <li>
                   <span className="text-gray-400">Ride Booking</span>
                 </li>
                 <li>
                   <span className="text-gray-400">Driver Registration</span>
                 </li>
                 <li>
                   <span className="text-gray-400">24/7 Support</span>
                 </li>
                 <li>
                   <span className="text-gray-400">Emergency SOS</span>
                 </li>
               </ul>
             </div>
   
             {/* Contact Info */}
             <div>
               <h3 className="font-semibold mb-4">Contact Us</h3>
               <ul className="space-y-2 text-sm">
                 <li className="flex items-center gap-2 text-gray-400">
                   <Mail className="h-4 w-4" />
                   support@rideshare.com
                 </li>
                 <li className="flex items-center gap-2 text-gray-400">
                   <Phone className="h-4 w-4" />
                   +1 (555) 123-RIDE
                 </li>
                 <li className="flex items-center gap-2 text-gray-400">
                   <MapPin className="h-4 w-4" />
                   123 Main St, City, State 12345
                 </li>
               </ul>
             </div>
           </div>
   
           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
             <p>&copy; {new Date().getFullYear()} RideShare. All rights reserved.</p>
           </div>
         </div>
       </footer>
  );
}
