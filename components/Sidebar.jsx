import data from "../lib/contents";
import Link from "next/link";
import { H3 } from "./markdown/Heading";

const Sidebar = () => {
  return (
    <div>
      {Object.keys(data).map((key) => {
        return (
          <div>
            <H3>{key}</H3>
            {data[key].map((k) => {
              return (
                <div className="pl-6">
                  <Link href={k.link}>
                    <a>{k.title}</a>
                  </Link>
                  <br />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
