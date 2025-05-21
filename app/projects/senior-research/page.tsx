'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ChipPrinterPage() {
  return (
    <main className="min-h-screen py-24">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Image src="/static/img/heliothon-logo-color.png" alt="Heliothon Logo" width={100} height={40} className="h-8 w-auto" />
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
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
          <img
            src="https://wimg.heraldcorp.com/news/cms/2025/02/02/news-p.v1.20250201.31d0359f2b1d4666ad141785aa05a56e_P1.jpg"
            alt="3D Chip Printer"
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Senior Research</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Did you know that Heliothon was based off a high school research project? Sami Elsayed was the sole author and research of the project
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Key Features</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Multi-layer Printing:</span>
              Advanced capability to print multiple layers with different materials
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Nano-scale Precision:</span>
              Achieving precision down to 7nm
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Rapid Prototyping:</span>
              Reduce chip development time from months to weeks
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Cost Efficiency:</span>
              Significantly lower production costs compared to traditional manufacturing
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">Technical Specifications</h2>
          <div className="bg-black/50 p-6 rounded-lg">
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-semibold">Resolution:</span>
                <span>7nm - 14nm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Print Speed:</span>
                <span>1.2 layers/minute</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Material Compatibility:</span>
                <span>Silicon, Graphene, Custom Composites</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Build Volume:</span>
                <span>300mm x 300mm</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Layer Thickness:</span>
                <span>5nm - 20nm</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6">Applications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="bg-black/30 p-4 rounded-lg">AI Processor Manufacturing</li>
            <li className="bg-black/30 p-4 rounded-lg">Custom Chip Development</li>
            <li className="bg-black/30 p-4 rounded-lg">Research and Development</li>
            <li className="bg-black/30 p-4 rounded-lg">Small-batch Production</li>
          </ul>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800 pb-10">
          <Link
            href="/#projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

      <footer className="bg-black/80 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt ">
            <div>
              <Image src="/static/img/heliothon-logo-color.png" alt="Heliothon Logo" width={200} height={200} className="h-12 w-auto" />
              <p className="text-gray-400 pt-3">
                Pioneering the future of AI processors with revolutionary technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/#projects" className="text-gray-400 hover:text-white">Projects</a></li>
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