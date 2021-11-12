import { getMarkdownData } from "../../lib/data";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { format, parseISO } from "date-fns";
import MDXComponents from "../../components/MDXComponents";
import Layout from "../../components/Layout";

export default function DocPage({ title, date, source }) {
  return (
    <div className="px-4">
      <h1>{title}</h1>
      <p>{format(parseISO(date), "MMMM do, uuu")}</p>
      <section className="prose">
        <MDXRemote {...source} />
      </section>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const allDocs = getMarkdownData();
  const { data, content } = allDocs.find((item) => item.slug === params.slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      title: data.title,
      date: data.date.toISOString(),
      source: mdxSource
    }
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getMarkdownData().map((doc) => ({
      params: {
        slug: doc.slug
      }
    })),
    fallback: false
  };
};

DocPage.layoutProps = {
  Layout: Layout
};
