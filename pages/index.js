import Layout from "../components/Layout";
import Link from "next/link";

export default function IndexPage({ layoutProps }) {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-center text-7xl font-bold">
        <span className="text-blue-400">Supercharge</span> your Flutter
        <br />
        <span>app development</span>
      </h1>
      <p className="text-xl tracking-wide text-center mt-6">
        Senzu UI is a simple, yet highly customizable <br /> component library
        providing you the UI components <br />
        to build slick Flutter applications.
      </p>
      <div className="flex mt-6 space-x-4">
        <Link href="#">
          <a className="flex text-2xl font-bold justify-center items-center bg-blue-600 px-8 py-4 rounded-md text-white">
            Get Started{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}

IndexPage.layoutProps = {
  title: "Senzu UI",
  Layout: Layout,
};
