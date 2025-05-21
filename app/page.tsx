'use client';

import { useEffect, useState } from 'react';
import { ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070',
  'https://images.unsplash.com/photo-1624969862644-791f3dc98927?q=80&w=2070',
  'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1740&auto=format',
];

const aboutCarouselImages = [
  'https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1673&auto=format',
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070',
];

const projects = [
  {
    id: '3d-chip-printer',
    title: '3D Chip Printer',
    description: 'Revolutionary technology for printing AI processors using advanced 3D printing techniques.',
    image: 'https://wimg.heraldcorp.com/news/cms/2025/02/02/news-p.v1.20250201.31d0359f2b1d4666ad141785aa05a56e_P1.jpg',
  },
  {
    id: 'ai-architecture',
    title: 'AI Architecture',
    description: 'Developing next-generation AI processor architectures for improved performance and efficiency.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070',
  },
  {
    id: 'quantum-integration',
    title: 'Quantum Integration',
    description: 'Exploring quantum computing principles for enhanced AI processing capabilities.',
    image: 'https://www.sciencefriday.com/wp-content/uploads/2025/01/quantum-computer.jpg',
  },
  {
    id: 'senior-research',
    title: 'Senior Research',
    description: 'Did you know that Heliothon is built off a high school research project? Heliothon is a continuation of a senior research project at Thomas Jefferson High School for Science and Technology by Sami Elsayed. The original project was mainly focused on optimizing AI/ML models within a Linux-based environment using a heterogenous technique.',  
  }
];

const inspirationalQuotes = [
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    role: "Co-founder of Apple"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Computer Science Pioneer"
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    role: "Co-founder of Apple"
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const fullText = 'Heliothon';

  useEffect(() => {
    const typeText = () => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    };

    const timeout = setTimeout(typeText, 150);
    return () => clearTimeout(timeout);
  }, [typedText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setCurrentQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextAboutImage = () => {
    setAboutImageIndex((prev) => (prev + 1) % aboutCarouselImages.length);
  };

  const prevAboutImage = () => {
    setAboutImageIndex((prev) => (prev - 1 + aboutCarouselImages.length) % aboutCarouselImages.length);
  };

  return (
    <main className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Image src="/static/img/heliothon-logo-color.png" alt="Heliothon Logo" width={100} height={40} className="h-8 w-auto" />
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#projects" className="text-white hover:text-gray-300">
                Projects
              </a>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
              <a href="/newsroom" className="text-white hover:text-gray-300">
                Newsroom
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="image-collage"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      />

      <section id="home" className="section">
        <div className="text-center">
          <h1 className="typing-text mb-4">{typedText}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of AI with revolutionary 3D chip-based printing technology
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="fade-in max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={aboutCarouselImages[aboutImageIndex]}
              alt="About Heliothon"
              className="object-cover w-full h-full transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevAboutImage}
                className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextAboutImage}
                className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
              <p className="text-lg md:text-xl text-gray-300">
                We are currently living through an unprecedented era that some might argue is greater than the Internet Boom of the late 1990s. With the exponential rise in AI development, comes with the need of better hardware to accommodate the future. With Heliothon's AI processing innovation, develop cutting-edge technology
                that combines advanced AI processing capabilities with revolutionary 3D chip-based printing methods that would make way for the development of 3D printed AI chips.
              </p>
            </div>
            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold mb-4">People</h3>
              <div className="flex items-center space-x-6">
                <img
                  src="/static/img/sami-elsayed.jpeg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold">Sami Elsayed</h4>
                  <p className="text-gray-400">Founder & Lead Researcher</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Current TJHSST senior and aspiring computer engineer. He works as a Lead Sysadmin at the TJ Computer Systems Lab. He is the author of <i>Unraveling AI Paradoxes</i>, <i>Codects</i>, and <i>The Techbook</i>. Check out his GitHub <Link href="https://github.com/selsayed25">here</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="fade-in max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="fade-in max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Join Our Journey</h2>
          <div className="mb-12">
            <blockquote className="text-2xl md:text-3xl text-gray-300 italic">
              “{inspirationalQuotes[currentQuoteIndex].quote}"
              <footer className="text-lg text-gray-400 mt-4">
                <cite>
                  {inspirationalQuotes[currentQuoteIndex].author}
                  <span className="block text-sm mt-1">
                    {inspirationalQuotes[currentQuoteIndex].role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          </div>
          <p className="text-lg md:text-xl text-gray-300">
            Be part of the revolution in AI processing technology. Together, we can shape the future of
            computing.
          </p>
        </div>
      </section>

      <footer className="bg-black/80 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/static/img/heliothon-logo-color.png" alt="Heliothon Logo" width={200} height={200} className="h-12 w-auto" />
              <p className="text-gray-400 pt-3">
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

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </main>
  );
}