import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 sticky top-0 shadow-sm bg-white">
      <Link href="/">
        <a>
          <Image
            src="/Logo.svg"
            alt="Senzu UI Logo"
            width="160"
            height="32"
            className="cursor-pointer"
          />
        </a>
      </Link>
      <nav className="select-none">
        <ul className="flex space-x-6">
          <li>
            <Link href="https://github.com/SudhanshuBhagwat/senzuui.com">
              <a>
                <AiOutlineGithub className="h-8 w-8 cursor-pointer hover:text-gray-800" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
