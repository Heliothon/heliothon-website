import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function NewsroomPage() {
  const articles = await getAllArticles();

  return (
    <main className="min-h-screen bg-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="/#about" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="/#projects" className="text-white hover:text-gray-300">
                Projects
              </a>
              <a href="/#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
              <a href="/newsroom" className="text-white hover:text-gray-300">
                Newsroom
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Newsroom</h1>
                <p className="mt-4 text-xl text-gray-300">
                    Stay updated with the latest developments in AI processing technology
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <Card key={article.slug} className="bg-black/50 border-gray-800 hover:border-gray-700 transition-colors">
                <CardHeader>
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{article.date}</span>
                  </div>
                  <CardTitle className="text-2xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{article.excerpt}</p>
                  <Link
                    href={`/newsroom/${article.slug}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
                ))}
            </div>
        </div>
    </div>

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