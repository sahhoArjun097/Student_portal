import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <span className="text-xl font-bold">StudentConnect</span>
          </Link>
          <p className="text-gray-300 mb-6">
            Empowering students with knowledge, skills, and community to succeed in today's world.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              {/* Facebook Icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              {/* Twitter Icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              {/* Instagram Icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
            <li><Link to="/features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
          <li><Link to="/contest" className="text-gray-600 hover:text-edu-purple transition-colors">Contest</Link></li>
            <li><Link to="/notice" className="text-gray-600 hover:text-edu-purple transition-colors"> Notice</Link></li>
            <li><Link to="/assignments" className="text-gray-600 hover:text-edu-purple transition-colors">Assingments</Link></li>
            <li><Link to="/timetable" className="text-gray-600 hover:text-edu-purple transition-colors">Time Table</Link></li>
          </ul>
        </div>
        <div>
        <h3 className="font-semibold text-white mb-4">Contact</h3>
        <ul className="space-y-3">
            <li className="flex items-start gap-2 ">
              {/* <MapPin className="h-5 w-5 text-edu-purple mt-0.5 mr-2" /> */}
              <svg className="h-7   text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><span className="text-gray-400 hover:text-purple-400 transition-colors">123 Campus Drive, University City, ST 12345</span>
            </li>
            <li className="flex items-center gap-2">
              {/* <Phone className="h-5 w-5 text-edu-purple mr-2" /> */}
              <svg   className="h-5   text-white "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg><span className="text-gray-400 hover:text-purple-400 transition-colors">(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              {/* <Mail className="h-5 w-5 text-edu-purple mr-2" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5   text-white " viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg> <span className="text-gray-400 hover:text-purple-400 transition-colors">info@studentconnect.edu</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="mt-12 text-center text-gray-500">
        © {new Date().getFullYear()} StudentConnect. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;


// <div className="w-full h-full p-5 md:p-10 flex flex-col bg-black items-center gap-8bg-gray-900">
//             <div className="flex gap-5 flex-col md:flex-row justify-center   md:justify-between w-full max-w-6xl">
//                 <div className='md:w-[200px]'>
//                     {/* <img  className="h-10" src="logo1.png " alt=""/> */}
//                     <img className="h-15" src="logo2.png " alt="" />
//                     {/* <img  className="h-15" src="logo3.png " alt=""/> */}
//                     <p className="text-lg font-semibold mt-5 text-white">Easy access to Records, Fee, Assingments etc.</p>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                     <div  className='flex flex-col gap-5'>
//                         <h3 className="text-lg font-semibold   text-white" >Quick Links</h3>
//                         <ul className="space-y-2 text-sm opacity-90">
//                             <li className=" cursor-pointer"><a href="/" className="hover:text-yellow-600   text-white ">Home</a></li>
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Careers</li>
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Team</li>
//                             {/* <li className="hover:text-orange-400 cursor-pointer">Services</li> */}
//                         </ul>
//                     </div>
//                     <div  className='flex flex-col gap-2'>
//                         <h3 className="font-semibold text-lg mb-3 text-white">Support</h3>
//                         <ul className="space-y-2 text-sm opacity-90">
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Help & Support</li>
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Partner With Us</li>
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Work With Us</li>
//                         </ul>
//                     </div>
//                     <div  className='flex flex-col gap-2'>
//                         <h3 className="font-semibold text-lg mb-3 text-white">Legal</h3>
//                         <ul className="space-y-2 text-sm opacity-90">
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Terms & Conditions</li>
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Privacy Policy</li>
//                             <li className="hover:text-orange-400 cursor-pointer text-white ">Cookie Policy</li>
//                         </ul>
//                     </div>
//                 </div>


//                 {/* Social Media */}
//                 <div className='items-center'>
//                     <div className="mt-4 md:mt-0 ">
//                         <h3 className="text-lg font-semibod text-white">Connect With Us</h3>
//                         <ul className="flex space-x-5 mt-3">
//                             <li>
//                                 <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-yellow-600">
//                                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
//                                         <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89h2.238v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
//                                     </svg>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-yellow-600">
//                                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
//                                         <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
//                                     </svg>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-yellow-600">
//                                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
//                                         <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                                     </svg>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                 </div>

//             </div>
//             <div className="text-center text-sm text-gray-500 mt-4">
//                 © 2025 StudentPortal. All rights reserved.
//                 <br />
//                 Designed and Developed with <span className="text-red-500">❤️</span> by <span className="text-yellow-600 font-semibold">Arjun Agarwal</span>
//             </div>
//         </div>