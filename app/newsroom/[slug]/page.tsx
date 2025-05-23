import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen py-24">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Image src="/static/img/heliothon-logo-color.png" alt="Heliothon Logo" width={100} height={40} className="h-8 w-auto" />
              <a href="heliothon-website/" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="heliothon-website/#about" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="heliothon-website/#projects" className="text-white hover:text-gray-300">
                Projects
              </a>
              <a href="heliothon-website/#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
              <a href="heliothon-website/newsroom" className="text-white hover:text-gray-300">
                Newsroom
              </a>
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
        <time className="block text-gray-400 mb-8">
          {new Date(article.date).toLocaleDateString()}
        </time>
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={article.content} />
        </div>
      </article>

      <footer className="bg-black/80 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Heliothon</h3>
              <p className="text-gray-400">
                Pioneering the future of AI processors with revolutionary technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="/newsroom" className="text-gray-400 hover:text-white">Newsroom</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="mailto:techfluente@gmail.com" className="text-gray-400 hover:text-white">Email</a></li>
                <li><a href="https://www.linkedin.com/in/sami-elsayed-5ab943244/" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="https://instagram.com/heliothon" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Heliothon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}