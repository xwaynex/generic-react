import { FooterLink } from "../../constants";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex justify-center items-center space-x-6 space-y-4 md:space-y-0 md:space-x-8">
        {FooterLink.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-all duration-300 hover:text-[#c93]"
          >
            <img src={link.icon} alt={link.label} className="h-8 w-8" />
          </a>
        ))}
      </div>

      {/* Footer Copyright */}
      <div className="border-t border-gray-700 mt-4 pt-4">
        <p className="text-center text-white text-sm">
          © {today.getFullYear()} Generics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
