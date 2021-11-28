import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4">
      <div>
        <p>
          Made with ❤ by{" "}
          <span className="font-semibold text-blue-600">
            <Link href="https://github.com/SudhanshuBhagwat">
              Sudhanshu Bhagwat
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
