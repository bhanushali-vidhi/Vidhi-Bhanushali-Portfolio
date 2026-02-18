import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';
import { DoodleArrow, DoodleStar, DoodleSparkle, DoodleCircle } from '../components/Doodles';

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Reducing Document Verification Time by 95%',
    category: 'Product Design',
    description: 'Enabled 3–4× higher case throughput by reducing document verification time by 95% through automation.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    link: '#'
  }
];

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative overflow-hidden min-h-screen">
      
      {/* Decorative Doodles Background */}
      <DoodleStar className="absolute top-20 right-10 w-16 h-16 text-yellow-400 opacity-60 transform rotate-12 animate-float" />
      <DoodleCircle className="absolute top-[600px] left-[-20px] w-32 h-32 text-blue-200 opacity-40 animate-float" style={{ animationDelay: '1s' }} />

      {/* 1. Selected Work (Now First) */}
      <section className="mb-40">
        <div className="flex items-center justify-between mb-16 reveal">
          <div className="flex items-center space-x-4">
             <h2 className="text-3xl md:text-4xl font-hand font-bold text-ink transform -rotate-1">Selected Work</h2>
             <span className="text-pencil font-serif italic text-lg opacity-60">(Recent Chapters)</span>
          </div>
          <DoodleSparkle className="w-10 h-10 text-blue-400 animate-pulse hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {caseStudies.map((study) => (
            <Link to={`/work/${study.id}`} key={study.id} className="group cursor-pointer flex flex-col h-full block relative reveal" style={{ transitionDelay: '0.1s' }}>
              
              {/* Image Container with Sketch Border */}
              <div className="relative mb-8">
                <div className="sketch-border overflow-hidden bg-white p-2 shadow-xl transform transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <div className="aspect-[4/3] overflow-hidden rounded-[240px_10px_200px_10px/10px_200px_10px_240px]">
                     <img 
                      src={study.imageUrl} 
                      alt={study.title} 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                {/* Pin doodle styling */}
                <div className="absolute -top-4 left-1/2 w-5 h-5 rounded-full bg-red-400 border-2 border-black shadow-sm transform -translate-x-1/2 z-10"></div>
              </div>
              
              <div className="flex justify-between items-start px-4">
                <div className="transform transition-transform group-hover:translate-x-2 duration-300">
                  <span className="text-xl font-hand font-bold text-blue-600 mb-2 block">
                    {study.category}
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-ink mb-4 group-hover:underline decoration-wavy decoration-blue-300">
                    {study.title}
                  </h3>
                  <p className="text-pencil leading-relaxed text-xl font-serif max-w-lg">
                    {study.description}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-pencil flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-all transform group-hover:rotate-45 group-hover:scale-110 flex-shrink-0 ml-6">
                    <ArrowUpRight size={24} strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Transition Hint */}
        <div className="flex justify-center mt-32 reveal">
          <div className="flex flex-col items-center space-y-4">
             <span className="font-hand text-xl text-pencil">Wait, who made this?</span>
             <ArrowDown className="text-blue-400 animate-bounce" size={32} />
          </div>
        </div>
      </section>

      {/* 2. Hero Section / Intro (Now Second) */}
      <section className="mb-20 max-w-5xl mx-auto py-24 px-8 sketch-border bg-paper/50 relative reveal">
        <DoodleArrow className="absolute -top-12 -left-8 w-24 h-24 text-gray-300 transform -rotate-12 animate-float" />
        
        <div className="relative inline-block mb-10">
          <h2 className="text-5xl md:text-7xl font-bold text-ink leading-[1.1] font-serif">
            Hi, I'm Vidhi Bhanushali.
          </h2>
          <DoodleSparkle className="absolute -top-10 -right-12 w-16 h-16 text-yellow-400 animate-pulse" />
        </div>
        
        <div className="relative">
          <p className="text-2xl md:text-4xl text-pencil font-serif italic leading-relaxed pl-8 border-l-8 border-blue-100">
            I am an <span className="marker-highlight px-1">Associate UI/UX Designer</span> & Computer Engineer based in Mumbai. I craft intuitive digital experiences by bridging the gap between design and development.
          </p>
          
          <div className="mt-12 flex items-center space-x-8">
            <Link 
              to="/about" 
              className="sketch-button bg-ink text-paper px-10 py-4 text-xl font-hand font-bold hover:scale-105 transition-transform inline-block"
            >
              The Full Story
            </Link>
            <div className="hidden sm:flex items-center text-pencil font-hand text-xl italic">
               <span className="mr-3">Curating experiences from Mumbai</span>
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <DoodleCircle className="absolute -bottom-16 -right-16 w-48 h-48 text-yellow-100 -z-10" />
      </section>

    </div>
  );
};

export default Home;