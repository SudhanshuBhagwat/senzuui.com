import path from "path";
import fs from "fs";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_content");

export function getMarkdownData() {
  const allDocs = fs.readdirSync(contentDirectory);

  return allDocs.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf8"
    );

    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}
