'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ChipPrinterPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [aboutImageIndex, setAboutImageIndex] = useState(0);

  const aboutCarouselImages = [
    'https://images.unsplash.com/photo-1610812388300-cd1e9cf28b54?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1668877780029-9f75961fcf39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070',
  ];

  const nextAboutImage = () => {
    setAboutImageIndex((prev) => (prev + 1) % aboutCarouselImages.length);
  };

  const prevAboutImage = () => {
    setAboutImageIndex((prev) => (prev - 1 + aboutCarouselImages.length) % aboutCarouselImages.length);
  };

  return (
    <main className="min-h-screen py-24">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <img src="/img/heliothon-logo-color.png" alt="Heliothon Logo" width={100} height={40} className="h-8 w-auto" />
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
            src="/img/navaar-logo-white.png"
            alt="3D Chip Printer"
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Navaar</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Navaar, a revolutionary way to harness the power of everyday devices for artificial intelligence. Imagine a world where your old smartphone or laptop can contribute to cutting-edge AI research or help businesses innovate, all while sitting idle on your desk. That's the vision behind Navaar. We're dreaming up a system that connects the unused potential of devices you already own into something powerful, accessible, and meaningful. This isn't just about technology, it's about making AI available to everyone, everywhere.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Problem</h2>
          
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
          
          <p className="text-lg text-gray-300 mt-6 mb-6">
            Artificial intelligence is changing the world, powering everything from medical breakthroughs to smarter customer service. But there's a challenge: running AI requires a lot of computational power. Most people don't have supercomputers at home, so they rely on big, expensive servers or cloud services that charge hefty fees. For many, this puts AI out of reach. On top of that, there are millions of devices, like old phones, tablets, and laptops, sitting unused in drawers or on shelves. These gadgets still have processing power, but right now, they're not doing much beyond collecting dust. It's a missed opportunity, both for technology and for the planet.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">The Solution</h2>
            <p className="text-lg text-gray-300 mb-6">
            Navaar offers a creative fix to this problem. Instead of depending on costly hardware or distant cloud servers, we're designing a way to link up all those idle devices into a shared network that can handle AI tasks together. Picture it like a community garden: everyone brings what they have, whether it's a Raspberry Pi, an old laptop, or a spare smartphone — and together, we grow something amazing. This network spreads out the work, so no single device has to be a powerhouse on its own. By pooling these resources, Navaar aims to make AI affordable and accessible while giving new life to gadgets you thought were past their prime.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">How It Works?</h2>
            <p className="text-lg text-gray-300 mb-6">
            So, how do we turn a bunch of random devices into an AI powerhouse? Navaar is built around three key ideas, each playing a specific role to keep things running smoothly.<br></br><br></br>First, there's the <strong>Node Agent</strong>. This is a small, simple program you'd install on any device you want to contribute. It's like a helpful assistant that waits for instructions, does the work — like figuring out what's in a picture or translating text — and then sends the answers back. It doesn't take up much space and works quietly in the background.<br></br><br></br>Next, we have the <strong>Job Coordinator</strong>. Think of this as the organizer who keeps everything on track. It's a central system that hands out tasks to all the participating devices and collects the results when they're done. It's like the conductor of an orchestra, making sure every instrument plays at the right time to create a harmonious whole.<br></br><br></br>Finally, there's the <strong>Admin Dashboard</strong>. This is a tool for the people overseeing the network. It's a clear, easy-to-use interface where they can see which devices are pitching in, check how tasks are going, and make sure everything's working as it should. It's like a window into the network, giving a big-picture view without getting bogged down in details.<br></br><br></br>Together, these pieces connect your devices into a team effort, sharing the load of AI work across the network.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Benefits</h2>
            <p className="text-lg text-gray-300 mb-6">Why would anyone want to join in on this? Well, Navaar comes with some pretty exciting advantages. For one, it's <strong>cost-effective</strong>. You don't need to buy fancy new equipment or pay for pricey cloud subscriptions — just use what's already lying around. It's also <strong>scalable</strong>, meaning the more devices that join, the stronger and faster the network gets. Imagine starting with a handful of gadgets and growing into a global web of computing power. Plus, it's <strong>eco-friendly</strong>. By reusing devices instead of tossing them out, we're cutting down on electronic waste and making a small dent in the environmental impact of tech.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Future Vision</h2>
            <p className="text-lg text-gray-300 mb-6">Navaar is still in the planning stage, so what you're reading about is our big dream for what it could become. We've got some ambitious ideas for the future. One day, we'd love to add a reward system — maybe tokens or credits — to thank people for lending their devices to the cause. We're also thinking about self-healing features, so if a device drops out, the network can adjust on its own without missing a beat. Down the road, we might support real-time tasks, like analyzing live video feeds, or even create a marketplace where anyone can upload their own AI projects to run on the network. These are possibilities we're exploring as we figure out how to turn this concept into reality.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Use Cases</h2>
            <p className="text-lg text-gray-300 mb-6">Who could use Navaar? The possibilities are wide open, and we see it helping all kinds of people. Researchers, for example, could tap into the network to run complex simulations or crunch massive datasets — things that might normally need a supercomputer they don't have. Businesses could use it for practical AI tasks, like figuring out what customers are saying online or spotting patterns in photos, all without breaking the bank on infrastructure. Developers, too, could find it a game-changer — testing and launching AI models on a ready-made, distributed system, perfect for experimenting without a big budget. From science to startups, Navaar could be a tool for anyone with an idea and a spare device.</p>

            <p className="text-lg text-gray-300 mb-6">Navaar is more than just a tech project; it's a vision for a future where AI is within everyone's reach. By connecting the unused potential of everyday devices, we aim to democratize access to AI, making it a tool for innovation and creativity that anyone can use. Whether you're a tech enthusiast, a researcher, or just someone with an old device collecting dust, Navaar invites you to be part of this exciting journey. We're hoping to putting in the effort to bring this concept to life, and we're gratful for your curiosity and support as we go!</p>
        
            <h2 className="text-2xl font-bold mt-12 mb-6">Status of Navaar</h2>
            <p className="text-lg text-gray-300 mb-6">Navaar is currently in the early stages of development. We are actively working on the architecture and design of the system, with plans to release a prototype in the coming months. Our goal is to create a functional proof-of-concept that demonstrates the potential of distributed AI processing using everyday devices.</p>

            <p className="text-lg text-gray-300 mb-6">If you're interested in following our progress, please check out our <strong><u><a href="https://github.com/Heliothon/navaar">GitHub repository</a></u></strong>. We welcome feedback, ideas, and contributions from anyone who shares our vision of making AI accessible to all.</p>
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
              <img src="/img/heliothon-logo-color.png" alt="Heliothon Logo" width={200} height={200} className="h-12 w-auto" />
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