import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export type Article = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
};

export async function getAllArticles(): Promise<Article[]> {
  const files = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    files
      .filter((file) => path.extname(file) === '.md')
      .map(async (file) => {
        const slug = path.basename(file, '.md');
        const article = await getArticleBySlug(slug);
        return article!;
      })
  );

  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      image: data.image,
      excerpt: data.excerpt,
    };
  } catch (error) {
    return null;
  }
}