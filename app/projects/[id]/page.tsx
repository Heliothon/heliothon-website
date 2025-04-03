'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const projects = {
  '3d-chip-printer': {
    title: '3D Chip Printer',
    description: 'Revolutionary technology for printing AI processors using advanced 3D printing techniques.',
    fullDescription: `Our 3D Chip Printer project represents a breakthrough in semiconductor manufacturing. By leveraging cutting-edge 3D printing technology, we're developing a system capable of producing complex AI processors with unprecedented precision and efficiency.

    The printer utilizes advanced materials and novel printing techniques to create multi-layer semiconductor structures. This innovation allows for more complex and efficient chip designs, potentially revolutionizing the way AI processors are manufactured.`,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070',
    features: [
      'Multi-layer semiconductor printing',
      'Nanoscale precision control',
      'Advanced material compatibility',
      'Integrated testing and verification',
    ],
    specifications: {
      resolution: '5nm feature size',
      printSpeed: '12 layers per hour',
      buildVolume: '300mm x 300mm x 1mm',
      materials: 'Silicon, Germanium, III-V semiconductors',
    },
  },
  'ai-architecture': {
    title: 'AI Architecture',
    description: 'Developing next-generation AI processor architectures for improved performance and efficiency.',
    fullDescription: `Our AI Architecture project focuses on creating innovative processor designs specifically optimized for artificial intelligence and machine learning workloads. By rethinking traditional processor architectures from the ground up, we're developing solutions that dramatically improve performance and energy efficiency.

    The architecture incorporates novel approaches to parallel processing, memory management, and data flow, enabling faster and more efficient AI computations.`,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070',
    features: [
      'Optimized neural network processing',
      'Advanced parallel computation',
      'Efficient memory hierarchy',
      'Scalable design',
    ],
    specifications: {
      cores: '1024 AI-optimized cores',
      memory: 'Integrated HBM2E',
      bandwidth: '2.5 TB/s',
      powerEfficiency: '5 TOPS/W',
    },
  },
  'quantum-integration': {
    title: 'Quantum Integration',
    description: 'Exploring quantum computing principles for enhanced AI processing capabilities.',
    fullDescription: `The Quantum Integration project explores the intersection of quantum computing and artificial intelligence. We're developing hybrid systems that combine traditional AI processors with quantum computing elements to solve complex problems more efficiently.

    This groundbreaking research could lead to significant advances in optimization, machine learning, and simulation capabilities.`,
    image: 'https://images.unsplash.com/photo-1517373116367-d5a28e43af2a?q=80&w=2070',
    features: [
      'Hybrid quantum-classical processing',
      'Quantum-inspired algorithms',
      'Error correction systems',
      'Scalable qubit integration',
    ],
    specifications: {
      qubits: '100 logical qubits',
      coherenceTime: '100 microseconds',
      gateTime: '10 nanoseconds',
      errorRate: '10^-6',
    },
  },
};

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 whitespace-pre-line">{project.fullDescription}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
              <dl className="space-y-3">
                {Object.entries(project.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-gray-400 text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
                    <dd className="text-white font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}