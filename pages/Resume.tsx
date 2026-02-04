import React from 'react';
import { Download, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Experience, Education } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    role: 'Associate UI/UX Designer',
    company: 'Ocufox Technologies Pvt. Ltd.',
    period: 'Sep 2024 – Jan 2025',
    description: [
      'Led end-to-end redesign of Ocufox company website, improving visual consistency, information hierarchy, and modernizing brand identity.',
      'Designed the full website for parent company Green-2-Green, ensuring consistent design language across sister brands.',
      'Improved internal design workflow by establishing component libraries, auto-layout systems, and reusable patterns in Figma.',
      'Streamlined developer handoff by creating clear specs and annotations, reducing clarification queries by ~40%.',
      'Accelerated design-to-development handoff cycle by 20-30% through organized Figma frameworks.'
    ]
  },
  {
    id: '2',
    role: 'Designer',
    company: 'FashionTV / FTV India Private Limited',
    period: 'Jun 2024 – Sep 2024',
    description: [
      'Designed premium user interfaces for FashionTV’s digital platforms, focusing on luxury aesthetics, clean layouts, and brand consistency.',
      'Redesigned key website and mobile app sections to improve visual hierarchy, navigation flow, and content accessibility.',
      'Led design for projects including homepage revamp, FTV+ subscription flow, and event pages.',
      'Collaborated closely with design leads to align design with brand and campaign goals.'
    ]
  },
  {
    id: '3',
    role: 'Product Designer Intern',
    company: 'Deloitte India',
    period: 'Sep 2023 – Present',
    description: [
      'Conducted user research and identified pain points to enhance automation products for both client and internal users.',
      'Introduced a "Critical Fields First" layout and auto-flagging features, balancing processing speed and audit accuracy.',
      'Increased document processing speed by 40%, reduced error rates by up to 35%, and cut operator training time by 50%.',
      'Collaborated with developers and product managers to align design vision and optimize system workflows.'
    ]
  }
];

const education: Education[] = [
  {
    id: '1',
    degree: 'B.Tech in Computer Engineering',
    school: 'University of Mumbai',
    year: 'Jun 2026 (Expected)'
  },
  {
    id: '2',
    degree: 'Matriculated - XII',
    school: 'K. J. Somaiya College of Science and Commerce',
    year: 'May 2022'
  }
];

const skills = [
  "Figma", "Canva", "Adobe Creative Tools", "Wireframing", 
  "Prototyping", "User Research", "Visual Design", "Design Systems",
  "Responsive Design", "Developer Handoff", "Accessibility Design"
];

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-gray-200 pb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Vidhi Bhanushali</h1>
          <p className="text-lg text-gray-600">Associate UI/UX Designer</p>
        </div>
        <button 
          className="mt-4 md:mt-0 flex items-center space-x-2 bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
          onClick={() => window.print()}
        >
          <Download size={16} />
          <span>Download PDF</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Main Content (Left) */}
        <div className="md:col-span-2 space-y-12">
          
          {/* Experience Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
            </div>
            
            <div className="space-y-10 border-l-2 border-gray-100 pl-8 ml-3 relative">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-600 ring-2 ring-gray-100"></span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">{exp.period}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900">{edu.school}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-gray-700">{edu.degree}</p>
                    <span className="text-sm text-gray-500">{edu.year}</span>
                  </div>
                  {edu.degree.includes('B.Tech') && (
                    <p className="text-sm text-gray-500 mt-2">GPA: 9.3/10</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar (Right) */}
        <div className="space-y-12">
          
          {/* Skills */}
          <section>
             <div className="flex items-center space-x-3 mb-6">
              <Code className="text-blue-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Contact Info Sidebar Block */}
          <section className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email</span>
                <a href="mailto:vvidhi.design@gmail.com" className="hover:text-white transition-colors">vvidhi.design@gmail.com</a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Phone</span>
                +91 81693 00611
              </p>
              <p>
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Location</span>
                Mumbai, India
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Resume;