
import React from 'react';
import { Download, Briefcase, GraduationCap, Code, Mail, Phone, MapPin, Linkedin, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Experience, Education } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Product Designer Intern',
    company: 'Deloitte India',
    period: 'Sep 2025 – Now',
    description: [
      'Conducted user research and identified pain points to enhance automation products for internal users.',
      'Introduced a "Critical Fields First" layout and auto-flagging features, balancing speed and audit accuracy.',
      'Increased document processing speed by 40%, reduced error rates by up to 35%, and cut operator training time by 50%.',
      'Collaborated with developers and product managers to optimize large-scale system workflows.'
    ]
  },
  {
    id: '2',
    role: 'UI/UX Designer Intern',
    company: 'FashionTV / FTV India Private Limited',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Designed premium user interfaces for FashionTV’s digital platforms, focusing on luxury aesthetics.',
      'Redesigned key website and mobile app sections to improve visual hierarchy and accessibility.',
      'Led design for projects including homepage revamp, FTV+ subscription flow, and event pages.',
      'Collaborated closely with design leads to align design with global brand campaigns.'
    ]
  },
  {
    id: '3',
    role: 'UI/UX Designer Intern',
    company: 'Ocufox Technologies Pvt. Ltd.',
    period: 'Sep 2024 – Jan 2025',
    description: [
      'Led end-to-end redesign of Ocufox company website, improving visual consistency and modernizing brand identity.',
      'Designed the full website for parent company Green-2-Green, ensuring consistent design language.',
      'Improved internal design workflow by establishing component libraries and auto-layout systems in Figma.',
      'Streamlined developer handoff by creating clear specs and annotations, reducing queries by ~40%.',
      'Accelerated design-to-development handoff cycle by 20-30% through organized Figma frameworks.'
    ]
  }
];

const education: Education[] = [
  {
    id: '1',
    degree: 'B.Tech in Computer Engineering',
    school: 'University of Mumbai',
    year: '2022 – 2026 (Expected)'
  },
  {
    id: '2',
    degree: 'HSC - XII (Science)',
    school: 'K. J. Somaiya College of Science and Commerce',
    year: '2020 – 2022'
  }
];

const skills = [
  "Figma", "Adobe Creative Suite", "Wireframing", 
  "Prototyping", "User Research", "Visual Design", "Design Systems",
  "Responsive Design", "A11y (Accessibility)", "Information Architecture",
  "HTML/CSS", "React.js"
];

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 print:p-0 print:bg-white">
      {/* Action Bar (Hidden on Print) */}
      <div className="max-w-3xl mx-auto px-6 mb-6 flex justify-between items-center print:hidden">
        <Link to="/" className="flex items-center text-pencil hover:text-ink font-hand text-lg group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        <button 
          onClick={handlePrint}
          className="sketch-button flex items-center space-x-2 bg-ink text-paper px-5 py-2 font-hand font-bold text-lg hover:scale-105 transition-all shadow-lg"
        >
          <Download size={18} />
          <span>Download PDF</span>
        </button>
      </div>

      {/* The Resume "Page" */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl print:shadow-none min-h-[1000px] p-8 md:p-12 border border-gray-100 print:border-none">
        
        {/* Header Section */}
        <header className="border-b-2 border-ink pb-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="mb-4 md:mb-0">
              <h1 className="text-4xl font-serif font-bold text-ink mb-1 tracking-tight">Vidhi Bhanushali</h1>
              <p className="text-xl font-hand text-blue-600 font-bold">Product Designer Intern</p>
            </div>
            <div className="space-y-1 text-left md:text-right text-pencil font-serif text-sm">
              <div className="flex items-center md:justify-end space-x-2">
                <span>vvidhi.design@gmail.com</span>
                <Mail size={14} />
              </div>
              <div className="flex items-center md:justify-end space-x-2">
                <span>+91 81693 00611</span>
                <Phone size={14} />
              </div>
              <div className="flex items-center md:justify-end space-x-2">
                <span>Mumbai, India</span>
                <MapPin size={14} />
              </div>
              <div className="flex items-center md:justify-end space-x-2 text-blue-600">
                <a href="https://linkedin.com/in/vidhi-bhanushali" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/vidhi-bhanushali</a>
                <Linkedin size={14} />
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Main Column (Experience & Education) */}
          <div className="md:col-span-2 space-y-10">
            
            {/* Experience Section (Latest to Oldest) */}
            <section>
              <h2 className="text-lg font-serif font-bold text-ink uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-6 flex items-center">
                <Briefcase size={18} className="mr-3 text-blue-600" />
                Experience
              </h2>
              
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-4 border-l border-gray-100">
                    <div className="absolute top-1.5 -left-[5px] w-2 h-2 rounded-full bg-blue-600"></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold text-ink">{exp.role}</h3>
                      <span className="text-xs font-hand font-bold text-pencil bg-gray-50 px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 font-serif font-bold italic text-sm mb-2">{exp.company}</p>
                    <ul className="space-y-1.5">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-xs text-pencil leading-relaxed">
                          <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section (Latest to Oldest) */}
            <section>
              <h2 className="text-lg font-serif font-bold text-ink uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-6 flex items-center">
                <GraduationCap size={20} className="mr-3 text-blue-600" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-bold text-ink">{edu.school}</h3>
                      <p className="text-pencil italic text-xs">{edu.degree}</p>
                    </div>
                    <span className="text-xs font-hand font-bold text-pencil bg-gray-50 px-2 py-0.5 rounded">{edu.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column (Expertise & Projects) */}
          <div className="space-y-10">
            
            {/* Expertise Section */}
            <section>
              <h2 className="text-lg font-serif font-bold text-ink uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-6 flex items-center">
                <Code size={18} className="mr-3 text-blue-600" />
                Expertise
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-gray-50 border border-gray-100 text-ink rounded text-[10px] font-serif font-bold tracking-tight uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Interactive Links Section */}
            <section>
              <h2 className="text-lg font-serif font-bold text-ink uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-6">
                Connect
              </h2>
              <div className="space-y-3 font-serif text-xs">
                <div className="p-3 bg-paper/30 border border-gray-100 rounded">
                  <p className="font-bold text-ink mb-1 text-[10px] uppercase tracking-wider opacity-60">Portfolio</p>
                  <a href="https://vidhi-bhanushali.web.app" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center">
                    vidhibhanushali.design
                    <ExternalLink size={10} className="ml-1" />
                  </a>
                </div>
                <div className="p-3 bg-paper/30 border border-gray-100 rounded">
                  <p className="font-bold text-ink mb-1 text-[10px] uppercase tracking-wider opacity-60">LinkedIn</p>
                  <a href="https://linkedin.com/in/vidhi-bhanushali" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center">
                    /in/vidhi-bhanushali
                    <ExternalLink size={10} className="ml-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Languages Section */}
            <section>
               <h2 className="text-lg font-serif font-bold text-ink uppercase tracking-[0.2em] border-b border-gray-100 pb-2 mb-4">
                Languages
              </h2>
              <div className="space-y-2 text-xs font-serif text-pencil">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="font-bold text-ink">Professional</span>
                </div>
                <div className="flex justify-between">
                  <span>Hindi</span>
                  <span className="font-bold text-ink">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Gujarati</span>
                  <span className="font-bold text-ink">Native</span>
                </div>
              </div>
            </section>

            {/* QR Code Placeholder for Print */}
            <section className="hidden print:block pt-6">
              <div className="border border-dashed border-gray-200 p-4 text-center">
                 <p className="text-[8px] uppercase tracking-widest text-gray-400 mb-2">Scan to view digital portfolio</p>
                 <div className="w-16 h-16 bg-gray-100 mx-auto mb-2 flex items-center justify-center text-[6px] text-gray-300">QR CODE</div>
                 <p className="text-[8px] text-gray-400">vidhibhanushali.design</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer for the PDF page */}
        <footer className="mt-16 pt-6 border-t border-gray-100 text-center text-[8px] text-gray-300 uppercase tracking-widest">
          References available upon request • Designed & Coded by Vidhi Bhanushali
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            margin: 0.5cm;
            size: A4;
          }
          nav, footer:not(.print-only), .print-hidden {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .min-h-screen {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .bg-gray-50 {
            background-color: white !important;
          }
          .sketch-button, button {
             display: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default Resume;
