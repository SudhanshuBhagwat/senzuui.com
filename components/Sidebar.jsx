import data from "../lib/contents";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      {Object.keys(data).map((key) => {
        return (
          <div key={key} className="pt-4 tracking-wide">
            <h3 className="font-bold">{key}</h3>
            <div className="space-y-2 mt-2 text-gray-700 font-semibold">
              {data[key].map((k) => {
                return (
                  <div key={key}>
                    <Link href={k.link}>
                      <a>{k.title}</a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
