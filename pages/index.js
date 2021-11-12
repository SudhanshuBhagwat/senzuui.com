import Card from "../components/Card";
import Heading from "../components/markdown/Heading";
import Layout from "../components/Layout";

export default function IndexPage({ layoutProps }) {
  return (
    <div className="h-full flex justify-center items-center">
      <Card className="flex items-center space-x-2">
        <span aria-label="fun" role="img">
          🎉
        </span>
        <Heading.H2>Something fun is on it's way</Heading.H2>
        <span aria-label="fun" role="img">
          🎉
        </span>
      </Card>
    </div>
  );
}

IndexPage.layoutProps = {
  title: "Senzu UI",
  Layout: Layout
};
