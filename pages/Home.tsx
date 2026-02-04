import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';
import { DoodleArrow, DoodleStar, DoodleSparkle, DoodleCircle } from '../components/Doodles';

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Reducing Document Verification Time by 95%',
    category: 'Product Design',
    description: 'Enabled 3–4× higher case throughput by reducing document verification time by 95% through automation.',
    imageUrl: 'https://picsum.photos/800/600?random=1', // Placeholder for now
    link: '#'
  }
];

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative overflow-hidden min-h-screen">
      
      {/* Decorative Doodles Background */}
      <DoodleStar className="absolute top-40 right-10 w-16 h-16 text-yellow-400 opacity-60 transform rotate-12" />
      <DoodleCircle className="absolute top-96 left-[-20px] w-32 h-32 text-blue-200 opacity-40" />

      {/* Hero Section */}
      <section className="mb-32 max-w-4xl relative">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-7xl font-bold text-ink leading-[1.1] mb-6 font-serif">
            Vidhi Bhanushali.
          </h1>
          <DoodleSparkle className="absolute -top-8 -right-8 w-12 h-12 text-blue-500" />
        </div>
        
        <div className="relative">
          <p className="text-2xl md:text-3xl text-pencil font-serif italic leading-relaxed pl-6 border-l-4 border-gray-300">
            I am an <span className="marker-highlight px-1">Associate UI/UX Designer</span> & Computer Engineer based in Mumbai. I craft intuitive digital experiences by bridging the gap between design and development.
          </p>
          <DoodleArrow className="absolute -bottom-16 right-0 w-24 h-24 text-gray-400 transform rotate-45 hidden md:block" />
        </div>
      </section>

      {/* Case Studies Grid */}
      <section>
        <div className="flex items-center space-x-4 mb-12 border-b-2 border-dashed border-gray-300 pb-4">
          <h2 className="text-2xl font-hand font-bold text-ink transform -rotate-1">Selected Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {caseStudies.map((study) => (
            <Link to={`/work/${study.id}`} key={study.id} className="group cursor-pointer flex flex-col h-full block relative">
              
              {/* Image Container with Sketch Border */}
              <div className="relative mb-6">
                <div className="sketch-border overflow-hidden bg-white p-2 shadow-lg transform transition-transform duration-300 group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <div className="aspect-[4/3] overflow-hidden rounded-[240px_10px_200px_10px/10px_200px_10px_240px]">
                     <img 
                      src={study.imageUrl} 
                      alt={study.title} 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                {/* Pin doodle styling */}
                <div className="absolute -top-4 left-1/2 w-4 h-4 rounded-full bg-red-400 border border-black shadow-sm transform -translate-x-1/2 z-10"></div>
              </div>
              
              <div className="flex justify-between items-start px-2">
                <div>
                  <span className="text-lg font-hand font-bold text-blue-600 mb-1 block">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-ink mb-3 group-hover:underline decoration-wavy decoration-blue-300">
                    {study.title}
                  </h3>
                  <p className="text-pencil leading-relaxed text-lg font-serif">
                    {study.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-pencil flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors flex-shrink-0 ml-4">
                    <ArrowUpRight size={20} strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;