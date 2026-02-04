import React from 'react';
import { Briefcase } from 'lucide-react';
import { Experience } from '../types';
import { DoodleSpiral, DoodleUnderline } from '../components/Doodles';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Product Designer Intern',
    company: 'Deloitte India',
    period: 'Sep 2024 – Present',
    description: [
      'Conducted user research and identified pain points to enhance automation products for both client and internal users.',
      'Introduced a "Critical Fields First" layout and auto-flagging features, balancing processing speed and audit accuracy.',
      'Increased document processing speed by 40%, reduced error rates by up to 35%, and cut operator training time by 50%.',
      'Collaborated with developers and product managers to align design vision and optimize system workflows.'
    ]
  },
  {
    id: '2',
    role: 'Associate UI/UX Designer',
    company: 'Ocufox Technologies Pvt. Ltd.',
    period: 'Sep 2024 – Jan 2025',
    description: [
      'Redesigned company website, increasing user engagement by 20% and improving navigation through usability enhancements.',
      'Created responsive high-fidelity mockups using Figma, accelerating design-to-development handoff by 30%.',
      'Applied principles of design systems, user-centered design, and accessibility in daily workflows.'
    ]
  },
  {
    id: '3',
    role: 'Designer',
    company: 'FashionTV / FTV India',
    period: 'Jun 2024 – Sep 2024',
    description: [
      'Designed premium user interfaces for FashionTV’s digital platforms, focusing on luxury aesthetics, clean layouts, and brand consistency.',
      'Redesigned key website and mobile app sections to improve visual hierarchy, navigation flow, and content accessibility.',
      'Created editorial-style landing pages, event highlights, and brand story sections using bold typography.'
    ]
  },
  {
    id: '4',
    role: 'UI/UX Designer',
    company: 'All World Gayatri Pariwar',
    period: 'May 2024 – Aug 2024',
    description: [
      'Revamped user interface for AWGP’s website, leading to a 30% boost in user engagement and a 25% increase in session duration.',
      'Designed with a focus on accessibility for elderly users and large-scale member usability.',
      'Utilized Figma and CSS to craft layouts optimized for performance and visual clarity.'
    ]
  },
  {
    id: '5',
    role: 'Graphic Designer',
    company: 'Dolphin Ad World',
    period: 'Feb 2024 – May 2024',
    description: [
      'Developed static and motion graphics for social media campaigns, brochures, and corporate branding for 5+ clients.',
      'Collaborated closely with brand managers to maintain visual identity, clarity, and creative storytelling.',
      'Delivered on-brand assets using Canva, Adobe Illustrator, Photoshop, and After Effects under tight timelines.'
    ]
  }
];

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative">
        <DoodleSpiral className="absolute top-20 right-0 w-32 h-32 text-gray-200 -z-10 opacity-50" />
        
      <div className="grid md:grid-cols-3 gap-12">
        {/* Bio Section */}
        <div className="md:col-span-1">
          <div className="sticky top-32">
              <h1 className="text-4xl font-serif font-bold text-ink mb-6 relative inline-block">
                About Me
                <DoodleUnderline className="absolute -bottom-2 left-0 w-full text-yellow-400 opacity-80" />
              </h1>
              <div className="prose text-ink font-serif text-lg space-y-6">
                <p className="leading-relaxed">
                  I'm a UI/UX Designer and Computer Engineering student at the University of Mumbai (Class of 2026), driven by a passion for creating accessible and scalable design systems.
                </p>
                <p>
                  My background in engineering allows me to speak the language of developers. I bridge the gap between creative vision and technical implementation.
                </p>
                <p className="font-hand text-xl text-blue-600 transform -rotate-1">
                   "I believe that great design is measurable."
                </p>
              </div>
              
              <div className="mt-12 p-6 bg-white sketch-border bg-opacity-60 backdrop-blur-sm">
                 <h3 className="text-xl font-hand font-bold text-ink mb-4">Extra-Curricular Activities</h3>
                 <ul className="space-y-4 text-base font-serif text-pencil">
                   <li>
                     <strong className="text-ink block">Chairperson, CodeAI KJSIT</strong>
                     Founded committee, designed branding & website.
                   </li>
                   <li>
                     <strong className="text-ink block">Performer, Gajashree Dhol Tasha</strong>
                     Traditional drumming ensemble performer.
                   </li>
                   <li>
                     <strong className="text-ink block">Bibliophile</strong>
                     Drawing creative inspiration from literature.
                   </li>
                 </ul>
              </div>
          </div>
        </div>

        {/* Experience Timeline Section */}
        <div className="md:col-span-2">
           <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 border-2 border-ink rounded-full">
                  <Briefcase className="text-ink" size={20} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-ink">My Journey</h2>
            </div>
            
            {/* Hand-drawn line */}
            <div className="space-y-12 border-l-4 border-dotted border-gray-300 pl-8 ml-3 relative">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1.5 h-5 w-5 rounded-full border-2 border-ink bg-paper group-hover:bg-yellow-300 transition-colors"></span>
                  
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-serif font-bold text-ink">{exp.role}</h3>
                    <div className="flex flex-wrap items-baseline gap-2 mt-1">
                       <span className="text-blue-600 font-hand font-bold text-lg">{exp.company}</span>
                       <span className="text-sm font-hand text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full transform rotate-2">{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 transform transition-transform hover:scale-[1.01]">
                      <ul className="list-disc list-outside ml-4 space-y-2 text-ink font-serif leading-relaxed">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;