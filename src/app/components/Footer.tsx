// /src/app/components/Footer.tsx

'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center  mt-10">
        
      <div className="max-w-7xl mx-auto px-4">

        <div className="gird justify-center space-x-4 py-4">
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
          <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400">Terms of Service</a>
        </div>
        <div className="flex justify-center space-x-4 py-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Bura Video. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;