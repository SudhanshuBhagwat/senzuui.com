import { getMarkdownData } from "../../lib/data";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { format, parseISO } from "date-fns";
import MDXComponents from "../../components/MDXComponents";
import DocumentationLayout from "../../components/DocumentationLayout";

export default function DocPage({ title, date, source }) {
  return (
    <div className="px-4">
      <section className="prose">
        <MDXRemote {...source} components={MDXComponents} />
      </section>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const allDocs = getMarkdownData();
  const { data, content } = allDocs.find((item) => item.slug === params.slug);

  const docData = {};
  allDocs.map((doc) => {
    const key = doc.data.parent;
    if (docData[key]) {
      docData[key] = [...docData[key], doc.data.title];
    } else {
      docData[key] = [doc.data.title];
    }
  });

  const mdxSource = await serialize(content);

  return {
    props: {
      title: data.title,
      date: data.date.toISOString(),
      source: mdxSource,
      docData,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: getMarkdownData().map((doc) => ({
      params: {
        slug: doc.slug,
      },
    })),
    fallback: false,
  };
};

DocPage.layoutProps = {
  Layout: DocumentationLayout,
};
