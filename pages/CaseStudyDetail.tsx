
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Layers, Zap } from 'lucide-react';
import { CaseStudyDetail } from '../types';
// Added DoodleSparkle to the import list
import { DoodleUnderline, DoodleStar, DoodleArrow, DoodleCircle, DoodleSparkle } from '../components/Doodles';

// --- SVG Components for Workflows ---

const ManualWorkflowSVG = () => (
  <svg viewBox="0 0 300 580" className="w-full h-auto max-w-[320px] mx-auto filter drop-shadow-sm">
    <defs>
      <marker id="arrow-manual" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#333" />
      </marker>
    </defs>
    <style>
      {`
        .manual-box { fill: #fee2e2; stroke: #ef4444; stroke-width: 2px; rx: 8px; }
        .manual-text { font-family: 'Crimson Text', serif; font-size: 14px; font-weight: 600; fill: #1f2937; text-anchor: middle; dominant-baseline: middle; }
        .manual-arrow { stroke: #333; stroke-width: 2px; fill: none; marker-end: url(#arrow-manual); }
      `}
    </style>
    
    <g transform="translate(50, 10)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Document Upload</text>
    </g>
    <path d="M150,55 L150,85" className="manual-arrow" />

    <g transform="translate(50, 85)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Manual Document Reading</text>
    </g>
    <path d="M150,130 L150,160" className="manual-arrow" />

    <g transform="translate(50, 160)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Copy Details to Excel</text>
    </g>
    <path d="M150,205 L150,235" className="manual-arrow" />

    <g transform="translate(50, 235)">
      <rect x="0" y="0" width="200" height="60" className="manual-box" />
      <text x="100" y="20" className="manual-text">Check Govt Websites</text>
      <text x="100" y="40" className="manual-text">Manually</text>
    </g>
    <path d="M150,295 L150,325" className="manual-arrow" />

    <g transform="translate(50, 325)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Compare Data by Eye</text>
    </g>
    <path d="M150,370 L150,400" className="manual-arrow" />

    <g transform="translate(50, 400)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Mark Verified / Unverified</text>
    </g>
    <path d="M150,445 L150,475" className="manual-arrow" />

    <g transform="translate(50, 475)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Repeat for Next Document</text>
    </g>
  </svg>
);

const AIWorkflowSVG = () => (
  <svg viewBox="0 0 500 650" className="w-full h-auto font-sans text-xs filter drop-shadow-sm">
     <defs>
      <marker id="arrow-ai" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#333" />
      </marker>
    </defs>
    <style>
      {`
        .ai-box { fill: #dbeafe; stroke: #2563eb; stroke-width: 2px; rx: 8px; }
        .ai-diamond { fill: #fff7ed; stroke: #f97316; stroke-width: 2px; }
        .ai-box-green { fill: #dcfce7; stroke: #16a34a; stroke-width: 2px; rx: 8px; }
        .ai-box-red { fill: #fee2e2; stroke: #ef4444; stroke-width: 2px; rx: 8px; }
        .ai-text { font-family: 'Crimson Text', serif; font-size: 14px; font-weight: 600; fill: #1f2937; text-anchor: middle; dominant-baseline: middle; }
        .ai-arrow { stroke: #333; stroke-width: 2px; fill: none; marker-end: url(#arrow-ai); }
        .ai-label { font-family: 'Crimson Text', serif; font-size: 11px; fill: #4b5563; }
      `}
    </style>

    <g transform="translate(175, 10)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Document Upload</text>
    </g>
    <path d="M250,50 L250,70" className="ai-arrow" />

    <g transform="translate(175, 70)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Preprocessing & OCR</text>
    </g>
    <path d="M250,110 L250,130" className="ai-arrow" />

    <g transform="translate(175, 130)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Field Extraction</text>
    </g>
    <path d="M250,170 L250,190" className="ai-arrow" />

    <g transform="translate(250, 230)">
      <polygon points="0,-40 60,0 0,40 -60,0" className="ai-diamond" />
      <text x="0" y="0" className="ai-text">Data Complete?</text>
    </g>
    
    <path d="M190,230 L100,230 L100,530" className="ai-arrow" strokeDasharray="4" />
    <rect x="115" y="220" width="25" height="18" fill="#f3f4f6" />
    <text x="127" y="233" textAnchor="middle" className="ai-label">No</text>

    <path d="M250,270 L250,300" className="ai-arrow" />
    <rect x="237" y="275" width="26" height="18" fill="#f3f4f6" />
    <text x="250" y="288" textAnchor="middle" className="ai-label">Yes</text>

    <g transform="translate(175, 300)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Verification Checks</text>
    </g>
    <path d="M250,340 L250,370" className="ai-arrow" />

    <g transform="translate(250, 410)">
      <polygon points="0,-40 60,0 0,40 -60,0" className="ai-diamond" />
      <text x="0" y="0" className="ai-text">Match Status</text>
    </g>

    <path d="M207,428 L150,470" className="ai-arrow" /> 
    <rect x="150" y="435" width="55" height="18" fill="#e5e7eb" />
    <text x="177" y="448" textAnchor="middle" className="ai-label">Mismatch</text>

    <g transform="translate(75, 470)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-red" />
      <text x="60" y="20" className="ai-text">Unverified</text>
    </g>
    <path d="M135,510 L135,530" className="ai-arrow" />

    <path d="M250,450 L250,470" className="ai-arrow" />
    <rect x="230" y="450" width="40" height="18" fill="#e5e7eb" />
    <text x="250" y="463" textAnchor="middle" className="ai-label">Match</text>

    <g transform="translate(200, 470)">
      <rect x="0" y="0" width="100" height="40" className="ai-box-green" />
      <text x="50" y="20" className="ai-text">Verified</text>
    </g>

    <path d="M293,428 L350,470" className="ai-arrow" />
    <rect x="300" y="435" width="40" height="18" fill="#e5e7eb" />
    <text x="320" y="448" textAnchor="middle" className="ai-label">Partial</text>

    <g transform="translate(325, 470)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-green" />
      <text x="60" y="20" className="ai-text">Partially Verified</text>
    </g>

    <path d="M250,510 L270,530 L300,530" className="ai-arrow" fill="none" />
    <path d="M385,510 L365,530 L350,530" className="ai-arrow" fill="none" />

    <g transform="translate(75, 530)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-red" />
      <text x="60" y="20" className="ai-text">Manual Review</text>
    </g>

    <g transform="translate(280, 530)">
      <rect x="0" y="0" width="140" height="40" className="ai-box" />
      <text x="70" y="20" className="ai-text">Claim Processing</text>
    </g>
  </svg>
);


const caseStudiesData: Record<string, CaseStudyDetail & { highFiImages: string[] }> = {
  '1': {
    id: '1',
    title: 'Reducing Document Verification Time by 95%',
    category: 'Product Design',
    description: 'Enabled 3–4× higher case throughput by reducing document verification time by 95% through automation.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    client: 'Deloitte India (Internal)',
    year: 'Sep 2023 - Present',
    role: 'Product Designer',
    tools: ['Figma', 'Miro', 'User Research'],
    challenge: 'An automobile company receives hundreds of documents daily (invoices, buyer details, etc.) for verification. The manual process took 15–20 minutes per document, was error-prone, and caused severe backlogs during peak sales seasons. Verification of ID details was also unreliable manually.',
    approach: 'We reimagined the workflow by mapping the manual process and identifying bottlenecks. We then designed an AI-powered verification system. My focus was on rethinking the UX to be fast, reliable, and user-friendly, moving from a manual entry system to an exception-handling model.',
    solution: 'An AI-powered document verification system that extracts, verifies, and structures data automatically. The system uses OCR for scanning, cross-verifies with government APIs, and only flags exceptions for manual review.',
    results: [
      'Verification time reduced by 95% (<60s vs 20mins)',
      'Accuracy increased by 92% via API cross-checks',
      'Manual effort reduced by 80%',
      'Approvals became 5x faster',
      'Team size reduced from 25 to 3-4 people'
    ],
    contentImages: [
      'https://placehold.co/600x400/fff/000?text=Sketch+1',
      'https://placehold.co/600x400/fff/000?text=Sketch+2',
      'https://placehold.co/600x400/fff/000?text=Sketch+3'
    ],
    highFiImages: [
      'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=800'
    ]
  }
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudiesData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center font-serif">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-6 pt-32 pb-20">
      
      {/* Navigation Header */}
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center text-lg font-hand font-bold text-pencil hover:text-ink transition-colors transform hover:-translate-x-1">
          <ArrowLeft size={20} className="mr-2" />
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <header className="mb-16">
        <div className="inline-block relative">
             <span className="text-lg font-hand font-bold tracking-wider text-blue-600 uppercase mb-4 block transform -rotate-1">
              Chapter: {study.category}
            </span>
            <DoodleStar className="absolute -top-6 -right-8 w-10 h-10 text-yellow-400 opacity-60" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-6 leading-tight">
          Speeding Up Document Verification by 20× Through AI-Driven Automation
        </h1>

        <div className="bg-yellow-50 border-2 border-dashed border-yellow-200 p-4 rounded-lg mb-8 transform -rotate-1">
          <p className="text-sm font-serif italic text-gray-600">
            <strong>Disclaimer:</strong> This project is under Non-Disclosure Agreement. Below is a brief insight into the process and outcomes.
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y-2 border-dashed border-gray-300">
          <div>
             <span className="block text-sm font-hand text-gray-400 mb-1">Role</span>
            <span className="font-serif font-bold text-lg text-ink">{study.role}</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Tools</span>
            <span className="font-serif font-bold text-lg text-ink">{study.tools.join(', ')}</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Timeline</span>
            <span className="font-serif font-bold text-lg text-ink">{study.year}</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Location</span>
            <span className="font-serif font-bold text-lg text-ink">Mumbai</span>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="grid md:grid-cols-12 gap-12 mb-20">
        
        {/* Sidebar / Context */}
        <div className="md:col-span-3 hidden md:block">
           <div className="sticky top-32">
             <h3 className="text-xl font-hand font-bold text-ink mb-4 underline decoration-wavy decoration-blue-300">Contents</h3>
             <ul className="space-y-3 text-lg font-serif text-pencil italic">
               <li><a href="#problem" className="hover:text-ink">The Challenge</a></li>
               <li><a href="#ideation" className="hover:text-ink">Workflows</a></li>
               <li><a href="#process" className="hover:text-ink">Sketches & System</a></li>
               <li><a href="#results" className="hover:text-ink">Outcomes</a></li>
             </ul>
           </div>
        </div>

        {/* Main Text Content */}
        <div className="md:col-span-9 space-y-20">
          
          {/* Problem Statement */}
          <section id="problem">
            <h2 className="text-3xl font-serif font-bold text-ink mb-6 flex items-center">
                The Challenge
                <DoodleUnderline className="ml-4 w-32 text-red-300 opacity-50" />
            </h2>
            <p className="text-xl text-ink font-serif leading-relaxed mb-6">
              {study.challenge}
            </p>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
               <h4 className="font-bold font-hand text-lg mb-2 text-red-800">Bottlenecks Identified:</h4>
               <ul className="list-disc ml-5 space-y-1 font-serif text-ink">
                 <li>15–20 minutes manual verification per document.</li>
                 <li>Manual cross-checks with government portals.</li>
                 <li>High error rates during peak sales seasons.</li>
               </ul>
            </div>
          </section>

          {/* Ideation & Workflows */}
          <section id="ideation">
            <h2 className="text-3xl font-serif font-bold text-ink mb-8">Process: Mapping the Change</h2>
            
            <div className="flex flex-col lg:flex-row items-stretch gap-8 mb-12">
              <div className="flex-1">
                 <div className="bg-white p-2 sketch-border transform -rotate-1 shadow-md mb-4">
                    <ManualWorkflowSVG />
                 </div>
                 <p className="text-center font-hand text-xl text-red-500 font-bold">Manual Flow</p>
              </div>

              <div className="flex-1">
                 <div className="bg-white p-2 sketch-border transform rotate-1 shadow-md mb-4">
                    <AIWorkflowSVG />
                 </div>
                 <p className="text-center font-hand text-xl text-blue-600 font-bold">AI-Automated Flow</p>
              </div>
            </div>
          </section>

          {/* Wireframes & System Screenshots Section */}
          <section id="process">
            <div className="relative mb-8">
              <h2 className="text-3xl font-serif font-bold text-ink flex items-center">
                From Sketches to System
                <DoodleArrow className="ml-4 w-12 h-12 text-blue-300 opacity-60" />
              </h2>
            </div>
            
            {/* 1. Wireframes Carousel */}
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-4 text-pencil font-hand text-lg">
                 <Layers size={18} />
                 <span>Low-Fidelity Explorations</span>
              </div>
              <div className="relative -mx-6 px-6 overflow-x-auto pb-8 snap-x flex space-x-6 scrollbar-hide">
                 {study.contentImages.map((img, idx) => (
                   <div key={idx} className="snap-center flex-shrink-0 w-[80%] md:w-[600px]">
                      <div className="bg-white p-3 sketch-border shadow-lg transform hover:rotate-1 transition-transform">
                        <img src={img} alt={`Wireframe ${idx + 1}`} className="w-full h-auto rounded-md" />
                        <p className="text-center font-hand mt-3 text-pencil italic">Concept Sketch 0{idx + 1}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* 2. Transition Paragraph */}
            <div className="max-w-2xl mx-auto py-12 px-8 bg-paper border-l-4 border-blue-400 relative mb-12">
               <DoodleSparkle className="absolute -top-4 -right-4 w-12 h-12 text-yellow-400 opacity-60 animate-pulse" />
               <p className="text-xl font-serif italic text-ink leading-relaxed">
                 After validating the initial layouts with stakeholders, we moved into high-fidelity design. The goal was to build a robust "Control Center" that felt familiar to spreadsheet users but carried the power of machine learning. We focused on clear visual feedback for verified data and prominent highlighting for discrepancies.
               </p>
            </div>

            {/* 3. Actual System Screenshots */}
            <div className="space-y-12">
               <div className="flex items-center space-x-2 mb-4 text-ink font-hand text-xl font-bold">
                 <Monitor size={22} className="text-blue-600" />
                 <span>High-Fidelity Implementation</span>
               </div>
               
               <div className="grid grid-cols-1 gap-12">
                  {study.highFiImages.map((img, idx) => (
                    <div key={idx} className="group relative">
                       <div className="sketch-border overflow-hidden bg-white p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                          <img src={img} alt={`System Screenshot ${idx + 1}`} className="w-full h-auto rounded-lg" />
                       </div>
                       <div className="absolute -bottom-4 -right-4 bg-ink text-white px-4 py-1 rounded-full font-hand text-lg rotate-3">
                          Screen 0{idx + 1}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* Results */}
          <section id="results" className="bg-yellow-50 p-10 sketch-border relative transform -rotate-1">
            <DoodleCircle className="absolute -top-6 -left-6 w-20 h-20 text-blue-200 -z-10" />
            <div className="flex items-center space-x-3 mb-8">
               <Zap className="text-yellow-600 fill-yellow-600" size={32} />
               <h2 className="text-3xl font-serif font-bold text-ink">Impact & Outcomes</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {study.results.map((result, idx) => (
                <div key={idx} className="flex items-start bg-white/50 p-4 rounded-lg border border-yellow-100">
                  <div className="w-2 h-2 rounded-full bg-ink mt-2.5 mr-3 flex-shrink-0"></div>
                  <p className="text-ink font-serif text-lg leading-snug">{result}</p>
                </div>
              ))}
            </div>
            <DoodleStar className="absolute -bottom-6 -right-6 w-16 h-16 text-yellow-400 opacity-40 animate-float" />
          </section>

        </div>
      </div>

    </article>
  );
};

export default CaseStudyDetail;
