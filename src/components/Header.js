import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-80 z-30">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        <Link href="" legacyBehavior>
          <a className="text-4xl custom-font-bold text-white">Quantumix</a>
        </Link>
        <nav>
          <ul className="flex space-x-10 text-lg custom-font-medium">
            <li><Link href="/about" legacyBehavior><a className="text-white hover:text-gray-300">About</a></Link></li>
            <li><Link href="/projects" legacyBehavior><a className="text-white hover:text-gray-300">Projects</a></Link></li>
            <li><Link href="/about" legacyBehavior><a className="text-white hover:text-gray-300">Services</a></Link></li>
            <li><Link href="/projects" legacyBehavior><a className="text-white hover:text-gray-300">Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
